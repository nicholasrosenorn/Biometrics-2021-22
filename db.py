import re
import sqlite3
from tkinter.messagebox import NO

import click
from flask import current_app, g
from flask.cli import with_appcontext

def get_db():
    # g = unique for each request
    # used to store data that might be accessed by multiple functions-
    # the connection is stored and reused instead of creating a new connection
    if 'db' not in g:
        g.db = sqlite3.connect(
            current_app.config['DATABASE'],
            detect_types=sqlite3.PARSE_DECLTYPES
        )
        # to access columns by name
        g.db.row_factory = sqlite3.Row

    return g.db

def close_db(e=None) :
    db = g.pop('db', None)

    if db is not None:
        db.close()

def init_db():
    db = get_db()

    with current_app.open_resource('schema.sql') as f:
        db.executescript(f.read().decode('utf8'))

# creates a command line command "init-db" that calls the init_db function
@click.command('init-db')
@with_appcontext
def init_db_command():
    init_db()
    click.echo('Initialized the database')

# function to take the application and do the registration
def init_app(app):
    # tells flask to call close_db when cleaning up after returning the response
    app.teardown_appcontext(close_db)
    app.cli.add_command(init_db_command)
