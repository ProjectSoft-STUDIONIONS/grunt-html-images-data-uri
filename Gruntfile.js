module.exports = function(grunt){
	grunt.initConfig({
		htmlImagesDataUri: {
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
	grunt.registerTask('default', 'htmlImagesDataUri');
}