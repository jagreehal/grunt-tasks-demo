/*global module:false*/

module.exports = function(grunt){
	'use strict';

	grunt.registerTask('log', function(){
		grunt.log.subhead('A bold head');
		grunt.log.writeln('A new line');
	});

	grunt.registerTask('fail', function(){
		grunt.fail.fatal('A fail fatal');
		grunt.log.oklns('The end');
	});

	grunt.registerTask('default', ['log', 'fail']);
};