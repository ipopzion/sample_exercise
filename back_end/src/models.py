import datetime

from sqlalchemy import Column, Integer, String, Float, TIMESTAMP

from .database import Base


class Exchange(Base):
    __tablename__ = "exchange"

    id = Column(Integer, primary_key=True, index=True)
    time_stamp = Column(TIMESTAMP, default=datetime.datetime.utcnow)
    base_currency = Column(String)
    other_currency = Column(String)
    rate = Column(Float)
