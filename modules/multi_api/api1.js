// API methods 1

'use strict';

module.exports = {
  f1: function(d1) {
    console.log('f1: d1=', d1);
  },
  f2: () => {
    console.log('f2 is here');
  }
  , f3: (a1, a2) => {
    console.dir(a1);
    console.dir(a2);
  }
}
