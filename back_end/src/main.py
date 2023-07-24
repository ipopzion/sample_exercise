from fastapi_utils.tasks import repeat_every

from .config import *

from fastapi import FastAPI

from . import crud, models
from .database import SessionLocal, engine

models.Base.metadata.create_all(bind=engine)

app = FastAPI()


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.get("/")
async def root():
    return {"message": "Use /exchange-rates?base=fiat or /exchange-rates?base=crypto to get started"}


@app.get("/exchange-rates")
async def get_rates(base: str = ""):
    db = next(get_db())
    if base == "fiat":
        return crud.get_currency(db, FIAT_CURRENCIES, CRYPTO_CURRENCIES)
    elif base == "crypto":
        return crud.get_currency(db, CRYPTO_CURRENCIES, FIAT_CURRENCIES)
    else:
        return {"error": f"Invalid query param {base}"}


@app.on_event("startup")
@repeat_every(seconds=INTERVAL)
async def update_data():
    db = next(get_db())
    crud.update_exchange(db, FIAT_CURRENCIES, CRYPTO_CURRENCIES)
    crud.update_exchange(db, CRYPTO_CURRENCIES, FIAT_CURRENCIES)
