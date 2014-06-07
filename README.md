node-file-builder
=================
> A file builder ripped from the insides of PrePros

# Why?
Concatenate files with prepend and append directives embedded in the files as is possible in PrePros and CodeKit.
This tool was made to serve the needs of
[grunt-codekit](https://github.com/fatso83/grunt-codekit), but is published in
the hopes that it meets the needs of other souls out there.

# Getting started

This will produce `big.js`

```
var builder = require('file-builder')
            , fileOptions = {
                input: 'starting-point.js',
                customOutput: 'big.js'
            }
            , projectOptions = { path: '.' };

builder.javascript(fileOptions, projectOptions, callback);
```
Assuming you have the following setup:

starting-point.js
```
//@codekit-append post.js
//@codekit-prepend pre.txt
console.log('starting point - add stuff pre and post');
```

pre.txt

```
PRE
```

post.js

```
//@codekit-append post.js
//@codekit-prepend pre.txt
console.log('starting point - add stuff pre and post');
```

before-post.js

```
// This is before post
```

You will end up with the following result in `big.js`

```
PRE




console.log('starting point - add stuff pre and post');

// This is before post


var POST = true;
```

There are some more newlines that what one might expect, but this is
how Prepros does this, and so any issues with that should be filed
in the Prepros project.

# API notes
We are just working directly with the innards of Prepros, so if you want
to know about *all* the different overrides you can look into the `config`
module of PrePros.

Some quick notes

## javascript(fileOptions, projectOptions, callback)

- *fileOptions.input* (compulsory) name of input file
- fileOptions.config.customOutput Filename of specific outputfile
- fileOptions.config.uglify
- fileOptions.config.sourcemaps
- fileOptions.config.mangle
- *projectOptions.path* (compulsory) must be set to .
- callback if the first argument is non-null, an error has occurred. Second argument is name of the input file

# About
The actual file concatenation logic has been ripped from the insides
of PrePros, so thanks to  @subash for releasing those parts under the MIT
license.

# Problems? Pull requests?
File an issue if there are problems. Pull requests are very welcome.
