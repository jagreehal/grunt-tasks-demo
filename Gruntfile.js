/*global module:false*/

module.exports = function(grunt){
	"use strict";

	grunt.registerTask('log', function(){
		grunt.log.subhead('A bold head');
		grunt.log.writeln('A new line');
	});

	grunt.registerTask('error', function(){
		grunt.log.errorlns('Prints error message');
	});

	grunt.registerTask('default', ['log', 'error']);
};