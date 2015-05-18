/** Safe Firebase keys as it doesn't like ., $, #, [, ], or /. in it's keys
 *
 *  @copyright  Copyright (C) 2015 by Yieme
 *  @module     firebase-safekey
 */
 (function() {
'use strict';
var _          = require('lodash')
var S          = require('underscore.string')
var replaceAll = S.replaceAll
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
}


function applyMap(obj, map) {
  if ('string' == typeof obj) {
    _.forEach(map, function(replace, find) {
      obj = replaceAll(obj, find, replace)
    })
    return obj
  }
  var result = {}
  for (var i in obj) {
    var key = applyMap(obj, map)
    result[key] = obj[i]
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
