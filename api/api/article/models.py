from datetime import datetime

from bson import json_util
from mongoengine import StringField, connect, Document, DateField, ReferenceField, ListField, QuerySet

connect("article")


class CustomQuerySet(QuerySet):
    def to_json(self):
        return "[%s]" % (",".join([doc.to_json() for doc in self]))


class Tag(Document):
    name = StringField(max_length=50, unique=True)
    color = StringField(max_length=10, unique=False, default="#007bff")


class Article(Document):
    title = StringField(required=True, max_length=200, unique=True)
    author = StringField(required=True, max_length=25)
    body = StringField(required=True)
    summary = StringField(required=True)
    date = DateField(required=True, default=datetime.utcnow)
    tags = ListField(ReferenceField(Tag))

    meta = {'queryset_class': CustomQuerySet}

    def to_json(self):
        data = self.to_mongo()
        data["tags"] = [{'name': tag.name, 'color': tag.color} for tag in self.tags]
        return json_util.dumps(data)
