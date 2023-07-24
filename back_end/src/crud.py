import datetime

import requests

from sqlalchemy.orm import Session

from . import models


def get_currency_info(source_currency):
    response = requests.get(f"https://api.coinbase.com/v2/exchange-rates?currency={source_currency}")
    return response.json()['data']['rates']


def update_exchange(db: Session, base_set, new_set):
    to_add = []
    for cur in base_set:
        for other_cur, rate in get_currency_info(cur).items():
            if other_cur not in new_set:
                continue
            db_exchange = models.Exchange(
                base_currency=cur,
                other_currency=other_cur,
                rate=rate,
            )
            to_add.append(db_exchange)
    db.add_all(to_add)
    db.commit()
    return


def get_currency(db: Session, base_currencies: list, target_currencies: list):
    response = {}
    for cur in base_currencies:
        rates = {}
        for target_cur in target_currencies:
            query = get_pair(db, cur, target_cur).order_by(models.Exchange.id.desc()).first()
            rates.update({target_cur: query.rate})
        response.update({cur: rates})
    return response


def get_history(db: Session, base_currency: str, target_currency: str, start: str, end: str):
    start_milli = int(start)
    end_milli = int(end) if end else int(datetime.datetime.utcnow().timestamp() * 1000)
    query = get_pair(db, base_currency, target_currency).filter(start_milli < models.Exchange.time_stamp).filter(
        models.Exchange.time_stamp < end_milli).all()
    return {"results": [
        {
            "timestamp": q.time_stamp, "value": q.rate
        } for q in query
    ]}


def get_pair(db: Session, base_currency: str, target_currency: str):
    return db.query(models.Exchange).filter(models.Exchange.base_currency == base_currency).filter(
        models.Exchange.other_currency == target_currency)
