window.dome = (function () {
  function Dome (els) {
    for(var i = 0; i < els.length; i++) {
      this[i] = els[i];
    }
    this.length = els.length
  };

  Dome.prototype.map = function (callback) {
    var results = [],
        i = 0;

    for (i; i < this.length; i++) {
      results.push(callback.call(this, this[i], i));
    }
    return results;
  };

  var dome = {
    get: function (selector) {
      var els;
      if (typeof selector === "string") {
        else = document.querySelectorAll(selector);
      } else if (selector.length) {
        els = selector;
      } else {
        els = [selector];
      }
      return new Dome(els)
    }

  };

  return dome;
}());