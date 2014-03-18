WeirdBrowserErrors
==================


What to expect
--------------


How to contribute
-----------------


Installation
------------
```
component install Wizcorp/WeirdBrowserErrors
```

Best Practice
-------------

### RegExp vs indexOf loop
Be sure to use regular expressions with pipes, over an array which you loop and indexOf. This provides a significant performance benefit. See below benchmarks.

__RegExp Benchmark__
```javascript
var a = 'this is a test string we will be testing to see if it contains hello or 12345';
var b = new RegExp('hello|test|hereagain|testing|12354');
console.time('regex');
for (var i = 0; i < 100000; i++) {
  a.match(b);
}
console.timeEnd('regex');
```

__indexOf Benchmark__
```javascript
var a = 'this is a test string we will be testing to see if it contains hello or 12345';
var b = ['hello','test','hereagain','testing','12354'];
console.time('indexOf');
for (var i = 0; i < 100000; i++) {
  for (var j = 0; j < b.length; j++) {
    a.indexOf(b[j]);
  }
}
console.timeEnd('indexOf');
```

License
-------
WierdBrowserErrors is distributed under the `MIT` License.

References
----------
* [Pamela Fox](https://github.com/pamelafox): [senderror.js](https://gist.github.com/pamelafox/1878283)
* [Rakesh Pai](https://github.com/rakeshpai): [The Tale of an Unfindable JS Error](http://blog.errorception.com/2012/03/tale-of-unfindable-js-error.html)