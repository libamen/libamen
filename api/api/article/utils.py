import json

from api.article.models import Tag


def get_tags_from_json(tags):
    new_tags = []
    for new_tag in tags:
        tag = Tag.objects(name=new_tag)
        if not tag:
            tag = Tag(new_tag)
            tag.save()
        else:
            tag = tag[0]
        new_tags.append(tag)
    return new_tags


def paginate(query, page: int, per_page: int):
    if per_page > 0:
        rows = query.count()
        pages = round(rows/per_page)
        result = query[(page*per_page)-per_page:page*per_page]
    else:
        return {"articles": json.loads(query.to_json())}

    return {"articles": json.loads(result.to_json()), "page": page, "pages": pages, "per_page": per_page}
