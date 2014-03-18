Weird Browser Errors
====================
The purpose of this project is to identify non-critical errors which cannot be resolved by
developers as they are caused by third parties i.e. external libraries, browsers & plugins etc.
Along with this it will act a knowledgebase developers can turn to when facing weird browser errors.

What to expect
--------------
This project will provide a well structured testing floor plan, which should allow the addition of
tests with ease. Also any tests put in place should be well documented, with information as to where
they come from and why they should be flagged.

Lastly our goal is not only to flag errors which can not be solved, but also to document some very
unusual errors, which do have solutions. These solutions will be documented inside [resolved.md](resolved.md)

Installation
------------
```
component install Wizcorp/weird-browser-errors
```

How to contribute
-----------------
There are 2 sides to contribution. Firstly being the addition of a flag, and then the removal of a
flag.

To add a flag please make sure you take a look at the [resolved.md](resolved.md) file for any
occurrences of your error. There you will find how you can resolve the issue on your end of the
equation, and intervention by this component will not be required. However if solution is not
functional or non-existant, feel free to add you flag to the appropriate tests file along with an
explanation of your error. Also if relevant, please update [resolved.md](resolved.md) with that pull
request.

To remove a flag, or rather so mark a flag as resolved. Please write a thorough explanation inside
[resolved.md](resolved.md) as to how this error can be resolved along with your pull request to
remove the flag from the appropriate tests file.

Note: Please make sure you [jshint](https://www.npmjs.org/package/jshint) your code to make sure
there are no obvious errors. And also please take a look at [best-practices.md](best-practices.md)
for general best practices that this project follows.

License
-------
Weird Browser Errors is distributed under the `MIT` License.

References
----------
_Internal_
* [resolved.md](resolved.md): Known issues with solutions
* [best-practices.md](best-practices.md): Best practices when implementing a flag

_External_
* [Pamela Fox](https://github.com/pamelafox): [senderror.js](https://gist.github.com/pamelafox/1878283)
* [Rakesh Pai](https://github.com/rakeshpai): [The Tale of an Unfindable JS Error](http://blog.errorception.com/2012/03/tale-of-unfindable-js-error.html)