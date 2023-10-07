function chbg(img) {
  document.getElementById("thisTest").src = "./static/assets/img/"+img+".png";
}

function showContent(selector) {
  var toggleClass = 'card-body-content-active';
  var location = document.getElementById(selector);
  var hasClass = location.classList.contains(toggleClass);

  if ( !hasClass ) {
    document.getElementById("btn_"+selector).innerHTML = "Show less";
    location.classList.add(toggleClass);
  } 
  else {
    location.classList.remove(toggleClass);
    document.getElementById("btn_"+selector).innerHTML = "Show more";
  }
}
