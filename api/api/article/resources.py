import json
import re

from flask_restful import Resource, reqparse

from api.article import models
from api.article.utils import get_tags_from_json, paginate


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
        parser.add_argument('summary', type=str, required=True)
        parser.add_argument('tags', action='append', required=False)
        args = parser.parse_args()
        tags = get_tags_from_json(args.get('tags'))
        del args['tags']
        article = models.Article(**args, tags=tags)
        article.save()
        return json.loads(article.to_json())


class ArticleByTitle(Resource):
    endpoint = '/article-by-title'

    def get(self):
        parser = reqparse.RequestParser()
        parser.add_argument('article_title', type=str, required=True)
        args = parser.parse_args()
        regex_name_search = re.compile(args['article_title'].replace('-', '[ |-]'), re.IGNORECASE)
        article = models.Article.objects(__raw__={'title': {'$in': ['sql', regex_name_search]}}).first()
        return json.loads(article.to_json())


class Articles(Resource):
    endpoint = '/articles'

    def get(self):
        parser = reqparse.RequestParser()
        parser.add_argument('page', type=str, required=False, default=1)
        parser.add_argument('per_page', type=str, required=False, default=0)
        args = parser.parse_args()
        response = paginate(models.Article.objects, page=args['page'], per_page=args['per_page'])
        return response


class ArticlesRecommended(Resource):
    endpoint = '/articles/recommended'

    def get(self):
        parser = reqparse.RequestParser()
        parser.add_argument('article_title', type=str, required=True)
        args = parser.parse_args()
        regex_name_search = re.compile(args['article_title'].replace('-', '[ |-]'), re.IGNORECASE)
        article = models.Article.objects(__raw__={'title': {'$in': ['sql', regex_name_search]}}).first()
        articles = models.Article.objects.filter(tags__in=article.tags, id__ne=article.id).order_by('date').limit(5)
        if not articles:
            articles = models.Article.objects.filter(id__ne=article.id).order_by('date').limit(5)
        return {"articles": json.loads(articles.to_json())}


class SearchTag(Resource):
    endpoint = '/search/tag'

    def get(self):
        parser = reqparse.RequestParser()
        parser.add_argument('name', type=str, required=True)
        args = parser.parse_args()
        tag = models.Tag.objects(name__icontains=args.get('name'))
        return json.loads(tag.to_json())
