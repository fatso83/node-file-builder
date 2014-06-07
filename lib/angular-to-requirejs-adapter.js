/**
 * Converts the Angular (name, [dep1, dep2, function() {} ]) way of
 * defining modules to the require JS AMD format
 *
 * @param name the name of the module
 * @param list a list of dependencies, where the last item is the module
 * @returns {*} the module
 */

module.exports = {
    adapter: function (name, list) {

        var requirejs = require('requirejs')
            , define = requirejs.define
            , args = [name]
            , len
            , indexOfFunction
            , closureReturningAModule
            , dependencies;

        if (typeof list !== 'function') {
            len = list.length;
            indexOfFunction = len - 1;
            closureReturningAModule = list[indexOfFunction];
            dependencies = list.slice(0, indexOfFunction);

            if (dependencies.length !== 0) {
                args.push(dependencies)
            }
        } else {
            closureReturningAModule = list;
        }

        args.push(closureReturningAModule);

        return define.apply(define, args);
    }
};
