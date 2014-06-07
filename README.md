node-file-builder
=================
> A file builder ripped from the insides of PrePros

# Why?
Concatenate files with prepend and append directives embedded in the files.
This tool was made to serve the needs of
[grunt-codekit](https://github.com/fatso83/grunt-codekit), but is published in
the hopes that it needs the needs of others souls out there.

# Getting started

This will produce `big.js`
`
var builder = require('file-builder');
var options = '{customOut : 'big.js'};
builder.compile('app.js', options, callback);
`

Assuming you have the following setup:

`starting-point.js`
>//@codekit-append post.js
>//@codekit-prepend pre.txt
>console.log('starting point - add stuff pre and post');

`pre.txt`
>PRE

`post.js`
> //@codekit-append post.js
> //@codekit-prepend pre.txt
> console.log('starting point - add stuff pre and post');

`before-post.js`
>// This is before post

You will end up with the following result in `big.js`
> PRE
> console.log('starting point - add stuff pre and post');
> // This is before post
> var POST = true;

If not specifying anything the default output filename is ..

# About
The actual file concatenation logic has been ripped from the insides
of PrePros, so thanks to  @subash for releasing those parts under the MIT
license.
