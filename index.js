/** Safe Firebase keys as it doesn't like ., $, #, [, ], or /. in it's keys
 *
 *  @copyright  Copyright (C) 2015 by Yieme
 *  @module     firebase-safekey
 */
 (function() {
'use strict';
var _          = require('lodash')
var mapping   = {
  '.': '<>d',
  '$': '<>s',
  '#': '<>p',
  '[': '<>o',
  ']': '<>c',
  '/': '<>S'
}
var reverse = {}
function reverseMap() {
  reverse = {}
  _.forEach(mapping, function(n, key) {
    reverse[n] = key
  })
}
reverseMap()



function config(map) {
  map = map || {}
  mapping = _.extend(map)
  reverseMap()
}


function applyMap(obj, map) {
  if ('string' == typeof obj) {
    _.forEach(map, function(replace, find) {
      obj = obj.replace(find, replace).replace(find, replace).replace(find, replace).replace(find, replace).replace(find, replace).replace(find, replace).replace(find, replace)
    })
    return obj
  }
  var result    = {}
  for (var i in obj) {
    var key     = applyMap(i, map)
    var value   = obj[i]
    if (_.isObject(value) value = applyMap(value) // apply to child keys
    result[key] = value
  }
  return result
}


function safeKey(obj, map) {
  map = map || mapping
  return applyMap(obj, map)
}


function restoreKey(obj, map) {
  map = map || reverse
  return applyMap(obj, map)
}


module.exports = {
  config:   config,
  safe:     safeKey,
  restore:  restoreKey
}

})();
