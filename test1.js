function setVal(){
  return 'Boom! All set!';
}

window.onload = function() {
    var el = document.getElementById('privacy_text');
    el.value = setVal();
}
