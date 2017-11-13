const argv = require('minimist')(process.argv.slice(2));
const gexf = require('gexf');
const fs = require('fs');

if (!argv.input || !argv.output) {
  console.error('You must specify an --input and --output paths parameters to convert json to gexf');
  console.log('example: node gexf-to-json --input path/to/input.gexf --output path/to/output.json');
  return;
}

const indent = argv.indent || 0;
const input = argv.input;
const output = argv.output;

const gexf_file = fs.readFileSync(input, 'utf-8');
const graph = gexf.parse(gexf_file);
fs.writeFileSync(output, JSON.stringify(graph, null, indent));