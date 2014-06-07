var builder = require('..')
    , chai = require('chai')
    , should = chai.should()
    , read = require('fs').readFileSync;

describe('basic functionality works', function () {
    it('should compile javascript', function (done) {
        var outputFile =  __dirname + '/../.tmp/output.js'
            , fileOptions = {
                input: __dirname + '/fixtures/starting-point.js',
                config: {},
                customOutput: outputFile
            }
            , projectOptions = { path: '.' };

        builder.javascript(fileOptions, projectOptions, function (err) {
            try {
                var expectedContent = read(__dirname + '/results/output.js').toString();
                read(outputFile).toString().should.eql(expectedContent);
                done();
            } catch (ex) {
                done(ex);
            }
        });
    })
});

var file = {
        input: 'test/fixtures/starting-point.js',
        config: {
            uglify: false,
            sourcemaps: false,
            mangle: false
        },
        customOutput: 'output.js'
    }
    , project = {
        path: '.'
    };
