from fastapi import FastAPI

import requests

app = FastAPI()
fiat_currencies = ["USD", "SGD", "EUR"]
crypto_currencies = ["BTC", "DOGE", "ETH"]


@app.get("/")
async def root():
    return {"message": "Use /exchange-rates?base=fiat or /exchange-rates?base=crypto to get started"}


@app.get("/exchange-rates")
async def get_rates(base: str = ""):
    if base == "fiat":
        return get_exchange(fiat_currencies, crypto_currencies)
    elif base == "crypto":
        return get_exchange(crypto_currencies, fiat_currencies)
    else:
        return {"error": f"Invalid query param {base}"}


def get_exchange(base_set, new_set):
    return {
        cur: {
            other_cur: rate
            for other_cur, rate in get_currency_info(cur).items()
            if other_cur in new_set
        }
        for cur in base_set
    }


def get_currency_info(source_currency):
    response = requests.get(f"https://api.coinbase.com/v2/exchange-rates?currency={source_currency}")
    return response.json()['data']['rates']

