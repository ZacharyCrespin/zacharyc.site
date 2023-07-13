---
title: fluentui-emoji-js
id: fluentui-emoji-js
layout: default
highlightCode: true
article: true
---
### A JavaScript wrapper for Microsoft's [Fluent Emojis](https://github.com/microsoft/fluentui-emoji).

<a href="https://www.npmjs.com/package/fluentui-emoji-js" target="_blank" class="button">View on NPM</a>
<a href="https://fluentui-emoji-js-demo.netlify.app" target="_blank" class="button">Live Demo</a>

## Usage
### Install
```bash
npm install fluentui-emoji-js
```

### Import
```js
const emoji = require('fluentui-emoji-js')
// or
import * as emoji from 'fluentui-emoji-js'
```

### Examples
#### Common JS
```js
const emoji = require('fluentui-emoji-js')

emoji.fromGlyph('👋','3D').then((emojiFile) => {
  console.log(emojiFile)
})
```

#### ES Module
```js
import * as emoji from 'fluentui-emoji-js'

const emojiFile = await emoji.fromGlyph('👋','3D')
console.log(emojiFile)
```

### More Info
fluentui-emoji-js has 2 main functions `fromGlyph(glyph, style)` and `fromCode(code, style)`. Both return the location of the emoji image relative to the base emoji folder.

`fromGlyph(glyph, style)`
- `glyph`: string contaning an emoji
- `style`: string `'3D'`, `'Color'`, `'Flat'`, or `'High Contrast'`

`fromCode(code, style)`
- `code`: string contaning the unicode for an emoji
  - `code` should be just the hexcode. ex.`'1f44b'` not `'U+1F44B'`
- `style`: string `'3D'`, `'Color'`, `'Flat'`, or `'High Contrast'`