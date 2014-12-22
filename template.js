'use strict';

// Basic template description.
exports.description = 'Create scaffold for all projects';

// Template-specific notes to be displayed before question prompts.
exports.notes =
'For more information, please see readme.md';

// Template-specific notes to be displayed after question prompts.
exports.after = 'You should now install project dependencies with npm-install ';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '*';

// The actual init template.
exports.template = function(grunt, init, done) {
    var files = init.filesToCopy();
    // Copy all files in the root directory
    init.copyAndProcess(files);

        // Generate package.json file, used by npm and grunt.
        init.writePackageJSON('package.json', {
            "devDependencies": {
                "grunt": "^0.4.5",
                "grunt-contrib-concat": "^0.5.0",
                "grunt-contrib-jshint": "~0.10.0",
                "grunt-contrib-nodeunit": "~0.4.1",
                "grunt-contrib-sass": "^0.8.1",
                "grunt-contrib-uglify": "^0.6.0",
                "grunt-contrib-watch": "^0.6.1",
                "grunt-template": "^0.2.3"

            }
        });

        // All done!
        done();

};