function callme(){
  return 'return success';
}

window.onload = function() {
    var el = document.getElementById('privacy_text');
    el.value = callme();
}
