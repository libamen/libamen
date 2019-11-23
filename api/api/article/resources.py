from flask_restful import Resource, reqparse

from api.article.dao import ArticleDao


class Article(Resource):
    endpoint = '/article'

    def get(self):
        parser = reqparse.RequestParser()
        parser.add_argument('article_id', type=str, required=False)
        args = parser.parse_args()
        article = ArticleDao()
        return article.convert_to_dict()
