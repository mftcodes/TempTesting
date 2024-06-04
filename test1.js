function setVal(){
  return 'Boom! All set!';
}

window.onload = function() {
    var el = document.getElementById('test_textarea');
    el.value = setVal();
}
