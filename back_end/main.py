from fastapi import FastAPI

import requests

app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.get("/exchange-rates")
async def get_rates(base: str = ""):
    if base == "fiat":
        return {"message": "Fiat"}
    elif base == "crypto":
        print(get_currency_info("BTC"))
        return {"message": "Crypto"}
    else:
        return {"error": f"Invalid query param {base}"}


def get_currency_info(source_currency):
    response = requests.get(f"https://api.coinbase.com/v2/exchange-rates?currency={source_currency}")
    return response.json()

