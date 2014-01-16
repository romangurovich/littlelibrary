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

  Dome.prototype.forEach = function (callback) {
    this.map(callback);
    return this;
  };

  Dome.prototype.mapOne = function (callback) {
    var m = this.map(callback);
    return m.length > 1 ? m : [0];
  }

  Dome.prototype.text = function (text) {
    if (typeof text !== "undefined") {
      return this.forEach(function (el) {
        el.innerText = text;
      });
    } else {
      return this.mapOne(function (el) {
        return el.innerText;
      });
    }
  };

  Dome.prototype.html = funciton (html) {
    if (typeof html !== "undefined") {
      return this.forEach(function (el) {
        el.innerHTML = html;
      });
    } else {
      return this.mapOne(function (el) {
        return el.innerHTML;
      });
    }
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