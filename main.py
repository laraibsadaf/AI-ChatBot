from fastapi import FastAPI
from sqlalchemy import Table, select
from db import engine, metadata

app = FastAPI()

# Load tables from the database
suppliers = Table('Suppliers', metadata, autoload_with=engine)
products = Table('Products', metadata, autoload_with=engine)

@app.get("/products")
async def get_products():
    query = select(products)
    with engine.connect() as conn:
        result = conn.execute(query).fetchall()
    return [dict(row) for row in result]

@app.get("/suppliers")
async def get_suppliers():
    query = select(suppliers)
    with engine.connect() as conn:
        result = conn.execute(query).fetchall()
    return [dict(row) for row in result]
