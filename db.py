from sqlalchemy import create_engine, MetaData

DATABASE_URL = "mysql+pymysql://root:laraibsadaf2002@localhost:3306/ProductDB"
engine = create_engine(DATABASE_URL)
metadata = MetaData(bind=engine)
metadata.reflect()
