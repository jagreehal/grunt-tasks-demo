/*jslint node: true */
/*global module:false*/

module.exports = function(grunt){
	'use strict';

	// npm install --save-dev time-grunt
	require('time-grunt')(grunt);

	grunt.registerTask('log', function(){
		grunt.log.subhead('A bold head');
		grunt.log.writeln('A new line');
	});

	grunt.registerTask('long', function(){
		var start = Date.now();
		while(Date.now()-start<5000){
		}
	});

	grunt.registerTask('done', function(){
		grunt.log.oklns('Finsihed!');
	});

	grunt.registerTask('default', ['log', 'long', 'done']);
};