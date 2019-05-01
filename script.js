window.onload = function(){

(function(){
  var countDown = 5;

  setInterval(function() {
    countDown--;
    if (countDown >= 0) {
      document.getElementById("count").innerHTML = countDown;
    }
    
    if (counter === 0) {
        clearInterval(counter);
    }

  }, 1000);

})();

}
