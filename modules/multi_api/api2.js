// API methods 2

'use strict';

module.exports = {
  f21: function(d1) {
    console.log('f21: d1=', d1);
  },
  f22: () => {
    console.log('f22 is here');
  }
  , f23: (a1, a2) => {
    console.dir(a1);
    console.dir(a2);
  }
}
