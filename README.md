encapsulated JavaScript class pattern - Skeleton.js
===

There seems to be a lot of debate regarding the best way to accomplish
encapsulation in JavaScript.  After some research I have come up with
a good usable pattern that will adapt itself nicely to different
environments.

skeleton.js serves as a nice starting point for creating clean,
encapsulated JavaScript classes that can used in different
client side or server side environments.

This archive defines a good pattern in js/skeleton.js that can be used
directly as an encapsulated javascript object,  inserted as is into a
RequireJS 'define' module enclosure and also runs nicely in node.js.

```
./README.txt			This Document

./direct.html			Test of Skeleton class loaded directly
./require.html			Test of Skeleton class loaded via RequireJS
./node-skeleton.sh		Test of Skeleton class loaded via node.js

./js/skeleton.js		The Skeleton class - annoated
./js/require-skeleton.js	The Skeleton class wrapped with RequireJS
./js/node-skeleton.js		node.js test script using skeleton.js
./js/lib/require.js		RequireJS library
./js/lib/jquery-1.11.0.js	jQuery library (for testing RequireJS)
./js/lib/base64-utf8.module.js	base64 library (for testing RequireJS)
```
