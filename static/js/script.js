const LARGE_WINDOW = 1199;
const test_bio = document.querySelector("#bio_content");

//test_bio.onscroll = function() {updateProg()}
function updateProg() {
  const test_prog = document.querySelector("#prog-bio .progress-bar");
  
  var y = test_bio.scrollTop
  var h = test_bio.scrollHeight - test_bio.offsetHeight 

  var percent = y/h*100

  test_prog.style.width = percent + "%";
}

var navCheck = function() {



  const nav = document.querySelector("#scrollspy-nav");
  const prog = document.querySelector("#prog");
  const mast_blur = document.querySelector("#mast-gradient");
  const mast_content = document.querySelector("#mast-content");
  const nav_title = document.querySelector("#nav-title");
  
  var h = nav.offsetHeight;

  var top = document.querySelector('#sectionLanding').offsetHeight;
  var bord = parseInt(getComputedStyle(document.querySelector('section')).borderTopWidth);

  var body = document.body, html = document.documentElement;

  var height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
  var windowY0 = window.scrollY;
  var percentage = ( windowY0 / (height-window.innerHeight) );
  document.querySelector("#prog .progress-bar").style.width = (percentage*100) + "%"

  // used to be top-h
  if(window.scrollY < 10 ) {
    // BG Color
    nav.classList.remove("bg-primary")

    //TEXT color
    nav.classList.add("navbar-light")
    nav.classList.remove("navbar-dark")

//    nav_title.classList.add("fs-3")

    //prog.classList.add("visually-hidden")
//    mast_blur.classList.add("bg-gradient")
//    mast_content.classList.remove("visually-hidden")

  }
  else {
  
    // BG Color
    nav.classList.add("bg-primary")

    //TEXT color
    nav.classList.add("navbar-dark")
    nav.classList.remove("navbar-light")

//    nav_title.classList.remove("fs-3")

    //prog.classList.remove("visually-hidden")
//    mast_blur.classList.remove("bg-gradient")
//    mast_content.classList.add("visually-hidden")

  }
}

document.addEventListener('scroll', navCheck);

//load content when scroll to it?
window.onload = function() {

  try {
    navCheck();
  } catch (error) {
    console.log("ERROR NAV");
  }

}

function resizeFont(e) {
  const shrink_element = e.querySelector(".shrink")
  

  var shrink_size = parseInt(getComputedStyle(shrink_element).getPropertyValue('font-size'));
  var shrink_parent = shrink_element.parentElement;
  const parent_width = parseInt(getComputedStyle(shrink_parent).getPropertyValue('width'))
  const parent_height = parseInt(getComputedStyle(shrink_parent).getPropertyValue('height'))
  

  while( shrink_element.offsetWidth > parent_width || shrink_element.offsetHeight > parent_height )
  {
    shrink_element.style.fontSize = shrink_size + "px"
    shrink_element.style.lineHeight = shrink_size + "px"
    shrink_size -= 1
  }

}

document.getElementById('landing-next-section').onclick = function () {
  var top = document.querySelector('#sectionLanding').offsetHeight;
  window.scrollTo(0, window.scrollY+top);
}