`gexf-to-json`
===

A nano cli tool to convert a gexf file to json.

# Todo

Publish as an npm library usable as a global package.

# Usage

```
git clone https://github.com/robindemourat/gexf-to-json
# then cd to the repo
# then copy the file you want to convert
node gexf-to-json --input path/to/input.gexf --output path/to/output.json
```

Optional parameters :

* `--indent` : sets json indentation level (default 0)

# Credits

* [gexf](https://github.com/Yomguithereal/gexf) by [Guillaume Plique](https://github.com/Yomguithereal)
* [minimist](https://github.com/substack/minimist) by [substack](https://github.com/substack)