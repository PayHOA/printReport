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
const ein = process.argv[3];

if ( htmlString && ein) {

  pdf.create(htmlString, options).toFile(`pdf/report-${ein}.pdf`, function(err, res) {
    if (err) return console.log(err);
    console.log(res);
  });

} else {
  !htmlString ? console.log('Provide <html> as first parameter') : false;
  !ein ? console.log('Provide <ein> as second parameter') : false;
}
