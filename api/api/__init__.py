from flask import Flask
from flask_restful import Api
from flask_cors import CORS

from config import DevConfig, TestConfig, Config


def create_app():
    """
    Initialize and returns a Flask app.
    :return: Flask application.
    """
    return entrypoint()


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

    app = Flask(__name__)

    configure_app(app, config)

    api = Api(app)
    init_api(api)

    return app


def configure_app(app, config):
    """
    Fetch configuration.
    :param app: Flask application.
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
