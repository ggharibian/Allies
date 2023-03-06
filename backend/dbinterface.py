# Importing PostgreSQL database adapter for Python
import psycopg2
import os

debug = True

def get_db_conn(username, password, database_name):
    con = psycopg2.connect(user=username,
                            password=password,
                            host='localhost',
                            port=5432,
                            database=database_name
                            )
    con.autocommit = True
    return con
    
def close_db_conn(con):
    con.close()
    
def add_user(con, firstname, lastname, password, email, instagram):
    with con.cursor() as cur:
        cur.execute(f'''
            INSERT INTO USERS(
                {firstname},
                {lastname},
                {password},
                {email},
                {instagram}
            )
        ''')

def print_users(con):
    rows = []
    with con.cursor() as cur:
        cur.execute('''   
            SELECT 
                *
            FROM
                USERS;
        ''')
        
        rows = cur.fetchall()
        
    print('Query Output')
    print('==========')
    print(rows)
    
def print_trip(con):
    rows = []
    with con.cursor() as cur:
        cur.execute('''   
            SELECT 
                *
            FROM
                TRIP;
        ''')
        
        rows = cur.fetchall()
        
    print('Query Output')
    print('==========')
    print(rows)
    
def get_n_closest(con, email, n=10):
    rows = []
    with con.cursor() as cur:
        cur.execute(f'''   
            SELECT 
                email, 
                destination,
                origin,
                starttime
            FROM
                TRIP
                WHERE email != {email}
                LIMIT {n};
        ''')
        
        rows = cur.fetchall()
        
    if debug:
        print('Query Output')
        print('==========')
        print(rows)