The Lab: Test Them Test'em
=============

This repository contains the source code for the above [Lab episode](http://www.letscodejavascript.com/v3/episodes/lab/4) of James Shore's [Let's Code JavaScript](http://www.letscodejavascript.com) screencast. Let's Code: Test-Driven JavaScript is a screencast series focused on rigorous, professional JavaScript development.

This episode was focused on evaluating Test'em 'Scripts, a cross-browser testing tools for JavaScript. For more information, [watch the screencast](http://www.letscodejavascript.com/v3/episodes/lab/4).


Building and Testing
--------------------

Before building for the first time:

1. Install [Node.js](http://nodejs.org/download/).
2. Download and unzip [the source code](https://github.com/jamesshore/automatopia/archive/master.zip) into a convenient directory.
3. All commands must run from the root of the source tree: `cd <directory>`.

To run Test'em:

1. Run `./testem.sh` (Unix/Mac) or `node_modules\.bin\testem` (Windows).

To run the automated build:

3. Run `./jake.sh` (Unix/Mac) or `jake` (Windows).


Note
----
Due to a ridiculously deep dependency tree (thanks to lodash), this code may not work on all file systems, including Windows.


License
-------

MIT License. See `LICENSE.TXT`.