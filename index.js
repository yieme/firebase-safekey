/** Safe Firebase keys as it doesn't like ., $, #, [, ], or /. in it's keys
 *
 *  @copyright  Copyright (C) 2015 by Yieme
 *  @module     firebase-safekey
 */
 (function() {
  'use strict';
  var FirebaseSafekeyError = require('make-error')('FirebaseSafekeyError')

  /** Firebase safekey
   *  @class
   *  @param      {object} options - The options
   *  @return     {object}
   */
  function firebaseSafekeyClass(options) {
    /*jshint validthis: true */
    var self = this
    options = options || {}
    self.value = options
    return self
  }



  /** Firebase safekey
   *  @constructor
   *  @param      {object} options - The options
   *  @return     {object}
   */
  function firebaseSafekey(options) {
    return new firebaseSafekeyClass(options).value
  }


  module.exports = firebaseSafekey
})();
