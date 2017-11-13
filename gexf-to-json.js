const argv = require('minimist')(process.argv.slice(2));
const gexf = require('gexf');
const fs = require('fs');

if (!argv.input || !argv.output) {
  console.error('You must specify an --input and --output paths parameters to convert json to gexf');
  console.log('example: node gexf-to-json --input path/to/input.gexf --output path/to/output.json');
}

let indent = argv.indent || 0;
if (argv.input && argv.output) {
  input = argv.input;
  output = argv.output;
}

var gexf_file = fs.readFileSync(input, 'utf-8');
var graph = gexf.parse(gexf_file);
fs.writeFileSync(output, JSON.stringify(graph, null, indent));