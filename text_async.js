
var fs = require('fs');
for (var i = 0; i < 5; i++) {
    var file = "Async-txt" + i + ".txt";
    fs.writeFile(file, "Hello Node.js!", function(err, out) {
        console.log(out);
    });
}
