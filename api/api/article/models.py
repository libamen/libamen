from datetime import datetime

from mongoengine import StringField, connect, Document, DateField

connect("article")


class Article(Document):
    title = StringField(required=True, max_length=200)
    author = StringField(required=True, max_length=25)
    body = StringField(required=True)
    date = DateField(required=True, default=datetime.utcnow)
