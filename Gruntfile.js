/*global module:false*/

module.exports = function(grunt){
	'use strict';

	grunt.registerTask('log', function(){
		grunt.log.subhead('A bold head');
		grunt.log.writeln('A new line');
	});

	grunt.registerTask('long', function(){
		var start = Date.now();
		while(Date.now()-start<5000){
		}
		grunt.log.oklns('Finished!');
	});


	grunt.registerTask('default', ['log', 'long']);
};