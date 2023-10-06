function chbg(img) {
  document.getElementById("thisTest").src = "./static/assets/img/"+img+".png";
}

function showContent(selector) {
  document.getElementById(selector).classList.remove('hidden');
  setTimeout(function () {
      document.getElementById(selector).classList.remove('visuallyhidden');
    }, 20);
}
