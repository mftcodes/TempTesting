function setVal(){
  return 'Boom! All set!';
}

document.addEventListener('DOMContentLoaded', function() {
    var el = document.getElementById('test-textarea');
    el.value = setVal();
}, false);
