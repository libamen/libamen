from flask import Flask
from flask_restful import Api
from flask_cors import CORS

from config import DevConfig, TestConfig, Config

app = Flask(__name__)


def create_app(config: Config = DevConfig):
    """
    Initialize and returns a Flask app.
    :return: Flask application.
    """
    return entrypoint(config)


def create_test_app():
    """
    Initialize and returns a Flask app for testing purposes.
    :return: Flask application.
    """
    return entrypoint(config=TestConfig)


def entrypoint(config: Config = DevConfig):
    """
    Initializes a application.
    :param config: Config object.
    :return: An initialized app.
    """

    configure_app(config)
    register_blueprints()

    api = Api(app, prefix='/api')
    init_api(api)

    return app


def configure_app(config):
    """
    Fetch configuration.
    :param config: Config object.
    """
    app.config.from_object(config)
    CORS(app, resources={r"/*": {"origins": "*"}}, support_credentials=True)


def init_api(api):
    """
    Fetches all the different parts of the api and initializes them.
    :param api: Flask_Restful api application.
    """
    from api import article
    article.init_api(api=api)


def register_blueprints():
    """
    Register all blueprints that makes up the part of flask that is not the api.
    """
    from api.uploads.routes import upload_bp
    app.register_blueprint(upload_bp, url_prefix="/uploads")
