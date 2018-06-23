var del = require('./lib/delete.js')
var fs = require('fs');
var path = require('path');


function syncedWalker(dir) {
    var files = fs.readdirSync(dir);
    files.forEach(function (filename) {
            var fullname = path.join(dir, filename);
            try {
                var stats = fs.statSync(fullname);
            }
            catch (err) {
                console.log(err);
                return;
            }
            if (stats.isDirectory()) {
                const patterns = ["/node_modules", "/.gradle", "/build"]
                deleted = false;
                for (index in patterns) {
                    if (fullname.includes(patterns[index])) {
                        del([fullname], {force: true}, function (err, deleted) {
                            console.log("XXX Deleted(" + patterns[index] + ":" + err + fullname);
                        })
                        deleted = true
                        break;
                    }

                }

                if (!deleted) {
                    syncedWalker(fullname)
                }
            }
        }
    );
}

syncedWalker('./') // pass the folder you want to clean here
