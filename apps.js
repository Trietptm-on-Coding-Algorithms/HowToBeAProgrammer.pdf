
var md = require('markdown-pdf');

bookTitle = "howtobeprogrammerbook.pdf"

var glob = require("glob")

glob("**/*.md", function (er, files) {
	if (er == true) {
		console.log('unable to find markdown files!');
	};
	md().concat.from(files).to(bookTitle, function () {
  console.log("Created", bookTitle)
});
  
});
