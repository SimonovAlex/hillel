var makeCounter = function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  }
};
var counter = makeCounter();
alert(counter.value());  // 0.
counter.increment();
counter.increment();
alert(counter.value()); // 2.
counter.decrement();
alert(counter.value()); // 1.