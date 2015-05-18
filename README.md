# firebase-safekey

Safe Firebase keys as it doesn't like ., $, #, [, ], or /. in it's keys

## Installation

This module is installed via npm:

```sh
npm i firebase-safekey --save
```

## Example Usage

```js
var fkey     = require('firebase-safekey')
var safekey  = fkey.safe('hello.world') // hello<>dworld
var restored = fkey.restore(safekey)    // hello.world
```

Safe key an object

```js
var obj      = { 'key#1': 'value1', 'key[2]': 'value2' }
var safekeys = fkey.safe(obj)         // { 'key<>p1': 'value1', 'key<>o2<>c': 'value2' }
var restored = fkey.restore(safekeys) // { 'key#1': 'value1', 'key[2]': 'value2' }
```

Configure key mapping

```js
fkey.config({ // default mapping
  '.': '<>d',
  '$': '<>s',
  '#': '<>p',
  '[': '<>o',
  ']': '<>c',
  '/': '<>S'
})
```

Or apply your mapping during safe, restore operations

```js
var safekey   = fkey.safe('1.1.2',   { '.': ':' }) // 1:1:2
var restored = fkey.restore(safekey, { ':': '.' }) // 1.1.2
```

## Rights

Copyright (C) 2015 by yieme, License: MIT
