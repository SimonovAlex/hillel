var filter= {
  EnablePagination: true
};


function BaseFilter(size) {
  this.PageSize = size;

  this.test = function(){
    console.log(this)
  }
}
BaseFilter.prototype = filter;

function extend(Child, Parent) {
  var F = function() { }
  F.prototype = Parent.prototype
  Child.prototype = new F() 
  Child.prototype.constructor = Child 
  Child.superclass = Parent.prototype 
};

function isInstanceOf(obj, constructor) {
  if (obj.__proto__ === constructor.prototype) {
      return true; 
  }
  else    if (obj.__proto__ !== null) {
          return isInstanceOf(obj.__proto__, constructor) 
      }
      else     {        
          return false 
      }
};