module.exports = function(grunt){
	grunt.initConfig({
		pugDataUri: {
			dist: {
				src: ['test/html/*.html'],
				dest: 'test',
				options: {
					target: ['test/images/*.*'],
					baseDir: './'
				}
			}
		}
	});
	grunt.loadTasks('tasks');
	grunt.registerTask('default', 'pugDataUri');
}