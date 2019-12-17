from flask_restful import Api

from api.article import resources


def init_api(api: Api):
    """
    Initializes all endpoints for the article module
    :param api: Main Flask api
    """
    api.add_resource(resources.Article, resources.Article.endpoint)
    api.add_resource(resources.ArticleByTitle, resources.ArticleByTitle.endpoint)
    api.add_resource(resources.Articles, resources.Articles.endpoint)
    api.add_resource(resources.ArticlesRecommended, resources.ArticlesRecommended.endpoint)
    api.add_resource(resources.SearchTag, resources.SearchTag.endpoint)
