// Your code goes here

var map = Array.prototype.map;

function isInt(n){
        return Number(n)===n && n%1===0;
}

function my_$(selector) {
  var self = document.querySelectorAll(selector);
  
  self.css = function(key, value, timeout) {
    // hash or key-values
    var values = key;
    
    if (typeof key === 'object') {
      values = key;
      timeout = value;
    } else
    {
      values = {}
      values[key] = value;
    }
    
    worker = function(){
      map.call(self, function(element) {
        for (var key in values) {
          element.style[key] = values[key];
        }
      });
    };
    
    if (timeout == null) {
      worker()
    } else {
      setTimeout(worker, timeout);
    }
    
    return self;
  }
  
  self.width = function(width) {
    if (width == null) {
      return map.call(self, function(element){
        return element.clientWidth + 'px';
      })
    } else {
      map.call(self, function(element) {
        if (isInt(width)) {
          element.style.width = width + 'px';
        } else {
          element.style.width = width;
        }
      });
      
      return self
    }
  }
  
  self.height = function(height) {
    if (height == null) {
      return map.call(self, function(element){
        return element.clientHeight + 'px';
      })
    } else {
      map.call(self, function(element) {
        if (isInt(height)) {
          element.style.height = height + 'px';
        } else {
          element.style.height = height;
        }
      });
      
      return self
    }
  }
  
  return self;
}
