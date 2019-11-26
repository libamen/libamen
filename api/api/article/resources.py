import json

from flask_restful import Resource, reqparse

from api.article import models


class Article(Resource):
    endpoint = '/article'

    def get(self):
        parser = reqparse.RequestParser()
        parser.add_argument('article_id', type=str, required=False)
        args = parser.parse_args()
        article = models.Article.objects.get(id=args.get('article_id'))
        return json.loads(article.to_json())

    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('title', type=str, required=True)
        parser.add_argument('author', type=str, required=True)
        parser.add_argument('body', type=str, required=True)
        args = parser.parse_args()
        article = models.Article(title=args.get('title'), author=args.get('author'), body=args.get('body'))
        article.save()
        return json.loads(article.to_json())


class Articles(Resource):
    endpoint = '/articles'

    def get(self):
        articles = models.Article.objects
        return {"articles": json.loads(articles.to_json())}
