class ArticleDao:
    def __init__(self):
        self.title = "Test"
        self.author = "Ted Johansson"
        self.body = """
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor finibus mauris id luctus. Etiam ultricies facilisis felis nec faucibus. Cras elementum est a mollis consequat. Proin velit sem, vulputate quis est vitae, vehicula volutpat turpis. Aenean id tellus aliquet, pellentesque dui a, aliquam tellus. Duis scelerisque libero sit amet vestibulum iaculis. Ut ultrices pellentesque felis, placerat ultricies velit laoreet sed. In sed dui ut justo congue rutrum vel eget purus.</p>

<p>Aenean interdum turpis quis nisi scelerisque laoreet. Pellentesque porttitor quam sed bibendum sagittis. Nullam eros nibh, gravida vel sapien sit amet, sollicitudin rutrum sem. Vestibulum in pellentesque nulla. Phasellus lacinia quam quis augue blandit blandit. Quisque eget faucibus mi. Proin suscipit nulla ante, non sagittis orci vehicula vel. In in imperdiet mi. Integer pretium laoreet purus et elementum. Suspendisse egestas scelerisque leo, non accumsan nulla semper a. Phasellus at odio at nulla efficitur ultricies et vitae ipsum. Nullam vel nulla sit amet purus vulputate aliquet quis id tellus.</p>

<p>Nulla scelerisque congue pulvinar. Fusce tempus accumsan mattis. Etiam id hendrerit metus. Quisque quis elit orci. Nunc gravida ornare eros sit amet rhoncus. Morbi vel facilisis risus, eu sodales dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam sit amet metus eget ante varius pellentesque sit amet sed nibh. Fusce sed volutpat est, eget fringilla orci. In faucibus vehicula odio, eget congue ipsum condimentum vitae. Maecenas ac faucibus dui. Morbi ac rutrum felis. Maecenas facilisis risus at est eleifend, vitae ultrices nibh porttitor. Cras ornare dolor at ipsum mollis, efficitur venenatis ante volutpat.</p>

<p>Pellentesque nec vehicula velit. Nulla ornare at mi hendrerit lacinia. Proin faucibus risus eget risus cursus, nec facilisis velit rhoncus. Quisque eu mauris ac tortor dapibus maximus eget convallis urna. Quisque iaculis facilisis quam vel tincidunt. Integer eget sodales ex. In faucibus eros justo, nec ultricies nisl euismod eleifend. Pellentesque commodo, lectus et rutrum laoreet, neque nunc porta erat, et posuere metus mi ullamcorper arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi nisl arcu, molestie quis fermentum eget, porttitor ut ante. Donec at mi pellentesque, elementum libero vel, feugiat elit. Morbi venenatis nibh lacinia, malesuada ligula ut, facilisis nulla. Quisque a interdum sapien. Nunc at enim massa.</p>

<p>Duis non urna eleifend, tempor tortor vel, interdum nisl. Fusce gravida ante a vehicula tincidunt. In tempus nibh feugiat felis posuere efficitur. Nunc orci nisl, posuere non posuere sit amet, imperdiet eget sem. Quisque at lorem sollicitudin, ullamcorper ex vitae, varius enim. Aliquam interdum dui et urna sagittis venenatis. Praesent vestibulum tellus lorem, eu dictum leo imperdiet eget. Sed ut justo at mi fermentum maximus sed et enim. Fusce sagittis lacus urna, non posuere massa faucibus vitae.</p>
"""

    def convert_to_dict(self):
        """
        A function takes in a custom object and returns a dictionary representation of the object.
        This dict representation includes meta data such as the object's module and class names.
        """
        obj_dict = self.__dict__

        return obj_dict
