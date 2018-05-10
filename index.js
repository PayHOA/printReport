const pdf = require('html-pdf');

/**
 * CREATING AND SAVING HTML TO A PDF
 * @param <string> htmlString
 * @param <int> ein
 * Pass in the HTML and EIN to generate the report.
 * usage: node '<html><body></body></html>' 11111111
 */

// default options
const options = {
  "format": 'Letter',
  "border": {
    "top": ".5in",
    "right": ".5in",
    "bottom": ".5in",
    "left": ".5in"
    },
  "type": "pdf",
  "quality": "75",
  "base": "assets/"
  };


const htmlString = process.argv[2];

if (htmlString) {
  pdf.create(htmlString, options).toBuffer(function(err, buffer) {
    if (err) return console.log(err);
    process.stdout.write(buffer);
  });

} else {
  !htmlString ? console.log('Provide <html> as first parameter') : false;
}