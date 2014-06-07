var prepros = require('./lib/prepros.js')
    , javascriptBuilder;

javascriptBuilder = prepros.factory('javascript');

function compileJs(file, project, callback) {
    javascriptBuilder.compile(file,project, callback);
}

module.exports = {
    javascript : compileJs
};

