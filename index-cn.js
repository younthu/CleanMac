var del = require('./lib/delete.js')
del(['node_modules/'], function(err, deleted) {
	if (err) throw err;
	// deleted files
	console.log('node_module deleted')
});


