/**
 * @license
 * pathfinding-visualiser <http://github.com/Tyriar/pathfinding-visualiser>
 * Copyright 2014 Daniel Imms <http://www.growingwiththeweb.com>
 * Released under the MIT license <http://github.com/Tyriar/pathfinding-visualiser/blob/master/LICENSE>
 */
var tests = require('../helpers/algorithm-tests');
var algorithm = require('../../src/algorithms/a-star-fibonacci-heap');

describe('a-star-fibonacci-heap', function () {
  'use strict';

  tests(algorithm);
});
