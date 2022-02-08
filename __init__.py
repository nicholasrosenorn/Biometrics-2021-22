import os

from flask import Flask

# FACTORY

def create_app(test_config=None):
    # create flask instance
    app = Flask(__name__, instance_relative_config=True) # files are relative to the instancre folder
    app.config.from_mapping(
        # to keep data safe
        # TODO must de overriden with a random value when deploying
        SECRET_KEY='dev',
        DATABASE=os.path.join(app.instance_path, 'flaskr.sqlite'),
    )

    if test_config is None:
        # load the instance config, if it exists, when not testing
        # use to override secret key later
        app.config.from_pyfile('config.py', silent=True)
    else:
        # load the test config if passed in
        app.config.from_mapping(test_config)

    # ensure the instance folder exists
    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass

    # a simple page that says hello
    @app.route('/hello')
    def hello():
        return 'Hello, World!'

    # import and call the db function
    from . import db
    # register db with the app
    db.init_app(app)

    return app
