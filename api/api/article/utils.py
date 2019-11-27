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
