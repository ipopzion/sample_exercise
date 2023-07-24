import requests

from sqlalchemy.orm import Session

from . import models


def get_currency_info(source_currency):
    response = requests.get(f"https://api.coinbase.com/v2/exchange-rates?currency={source_currency}")
    return response.json()['data']['rates']


def update_exchange(db: Session, base_set, new_set):
    for cur in base_set:
        for other_cur, rate in get_currency_info(cur).items():
            if other_cur not in new_set:
                continue
            db_exchange = models.Exchange(
                base_currency=cur,
                other_currency=other_cur,
                rate=rate,
            )
            db.add(db_exchange)
            db.commit()
    return


def get_currency(db: Session, base_currencies: list, other_currencies: list):
    response = {}
    for cur in base_currencies:
        rates = {}
        for other_cur in other_currencies:
            query = db.query(models.Exchange).filter(models.Exchange.base_currency == cur).filter(
                models.Exchange.other_currency == other_cur).order_by(models.Exchange.id.desc()).first()
            rates.update({other_cur: query.rate})
        response.update({cur: rates})
    return response
