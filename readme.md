The Lab: Test Them Test'em
=============

This repository contains the source code for the above [Lab episode](http://www.letscodejavascript.com/v3/episodes/lab/4) of James Shore's [Let's Code JavaScript](http://www.letscodejavascript.com) screencast. Let's Code: Test-Driven JavaScript is a screencast series focused on rigorous, professional JavaScript development.

This episode was focused on comparing Karma and Test'em 'Scripts, two cross-browser testing tools for JavaScript. To evaluate the results yourself, compare (TBD) to (TBD). For more information, [watch the screencast](http://www.letscodejavascript.com/v3/episodes/lab/4)


Building and Testing
--------------------

Before building for the first time:

1. Install [Node.js](http://nodejs.org/download/).
2. Download and unzip [the source code](https://github.com/jamesshore/automatopia/archive/master.zip) into a convenient directory.
3. All commands must run from the root of the source tree: `cd <directory>`.
4. To cause the build to fail unless certain browsers are tested, edit `REQUIRED_BROWSERS` at the top of `Jakefile.js`. Otherwise, comment those lines out.

To build (and test):

1. Run `./jake.sh karma` (Unix/Mac) or `jake karma` (Windows) to start the Karma server.
2. Start the browsers you want to test and point each one at `http://localhost:8080`.
3. Run `./jake.sh` (Unix/Mac) or `jake` (Windows) every time you want to build and test.


License
-------

MIT License. See `LICENSE.TXT`.