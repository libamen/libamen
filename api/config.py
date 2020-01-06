import os

from dotenv import load_dotenv

load_dotenv()

basedir = os.path.abspath(os.path.dirname(__file__))


class Config:
    DEBUG = False
    TESTING = False
    UPLOAD_FOLDER = f'{basedir}/uploads'


class DevConfig(Config):
    DEBUG = True


class TestConfig(Config):
    TESTING = True
