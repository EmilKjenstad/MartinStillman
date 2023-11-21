const test_bio = document.querySelector("#bio_content");

//test_bio.onscroll = function() {updateProg()}

function updateProg() {
  const test_prog = document.querySelector("#prog-bio .progress-bar");
  
  var y = test_bio.scrollTop
  var h = test_bio.scrollHeight - test_bio.offsetHeight 

  var percent = y/h*100

  test_prog.style.width = percent + "%";
}

window.onscroll = function() {navCheck()} ;

function navCheck() {



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
  if(window.scrollY < 10 && screen.width > 1200) {
    // BG Color
    nav.classList.add("bg-transparent")
    nav.classList.remove("bg-primary")

    //TEXT color
    nav.classList.add("navbar-light")
    nav.classList.remove("navbar-dark")

    nav_title.classList.add("fs-3")

    //prog.classList.add("visually-hidden")
//    mast_blur.classList.add("bg-gradient")
//    mast_content.classList.remove("visually-hidden")

  }
  else {
  
    // BG Color
    nav.classList.add("bg-primary")
    nav.classList.remove("bg-transparent")

    //TEXT color
    nav.classList.add("navbar-dark")
    nav.classList.remove("navbar-light")

    nav_title.classList.remove("fs-3")

    //prog.classList.remove("visually-hidden")
//    mast_blur.classList.remove("bg-gradient")
//    mast_content.classList.add("visually-hidden")

  }
}


//load when scroll to it?
window.onload = function() {

  try {
    navCheck();
  } catch (error) {
    console.log("ERROR NAV");
  }

  try {
    populateBio();
  } catch (error) {
    console.log("ERROR BIO");
  }

  try {
    populateService();
  } catch (error) {
    console.log("ERROR SERVICE");
  }

  try {
    populateContact();
  } catch (error) {
    console.log("ERROR CONTACT");
  }

  try {
    populateTestimonials();
  } catch (error) {
    console.log("ERROR CONTACT");
  }
}

function populateTestimonials() {
  var first = true;
  
  for (let i = 0; i<testimonials.length; i++ ) {
    var testimonial = testimonials[i];
    
    let first_item = "";
    if (first) first_item = "active";

    let t = `
      <div class="carousel-item `+first_item+`">

        <h3>`+ testimonial.extra +`</h3>
        <blockquote class="blockquote text-center">
          <span class="shrink">`+ testimonial.quote +`</span>
          <footer class="blockquote-footer">`+ testimonial.name +`, <cite title="Source Title">`+ testimonial.title +`</cite></footer>
        </blockquote>

      </div>
    `
    document.querySelector("#testimonialsCarusel .carousel-inner").innerHTML += t;
    
    var btn =  '<button type="button" data-bs-target="#testimonialsCarusel" data-bs-slide-to="'+i+'" aria-label="Slide '+(i+1)+'" class="'+first_item+'" aria-current="'+first+'"></button>';
    document.querySelector("#testimonialsCarusel .carousel-indicators").innerHTML += btn;
    
    first = false;
  }

}

function populateContact() {
  document.querySelector("#contact_phone").innerHTML = contact_info.phone;
  document.querySelector("#contact_email").innerHTML = contact_info.email;
  document.querySelector("#contact_address").innerHTML = contact_info.address;
  
}

function populateService() {
  document.getElementById("sectionService"). innerHTML = "";

  for (var i = 0; i<services.length; i++) {
    let lines = services[i].description.split("\n");
    let desc = "";

    desc += '<p class="card-text">'
    desc += lines[1];
    desc += '</p>'

    // Detect stuff like '-' at start of sentence = bulletpoint
    /*
    lines.forEach(line => {
      if (line != "") {
        desc += '<p class="card-text">'
        desc += line;
        desc += '</p>'
      }
    });
    */

    let s = `
            <div id="service`+i+`" class="row fs-2">
              <div class="col-xl-6 service-img" style="background-image: url('static/assets/img/`+services[i].img+`');"></div>
              <div class="col-xl-6 service-item">
                <p class="fw-bolder" style="font-size: larger;">`+services[i].title+`</p>
                <p>`+desc+`</p>
                <a class="fs-1" role="button" data-bs-toggle="modal" service-id="`+i+`" data-bs-target="#exampleModal">
                <img style="width: 5%;" src="static/assets/icons/`+services[i].icon+`">
                Learn more
                </a>
              </div>
            </div>
      `
            //<button id="btn_service`+i+`" class="btn btn-link" onclick="showContent('service`+i+`')">See more</button>
    document.getElementById("sectionService"). innerHTML += s;
  }
}

let show_more = false;

function populateBio() {
  
  let lines = bio.split("\n");
  
  lines.forEach(line => {
    if (line != "") {

      let desc = "";

      desc += '<p class="card-text">'
      desc += line;
      desc += '</p>'
  
      document.getElementById("bio_content").innerHTML += desc;
      
    }
  });
  
  document.getElementById("bio_content").innerHTML += ``;
}

function showContent() {
  var toggleClass = 'bio-content-active';
  var location = document.getElementById('bio_content');
  var hasClass = location.classList.contains(toggleClass);

  if ( !hasClass ) {
    document.getElementById("btn-bio").innerHTML = "<i class='bi bi-arrows-collapse'></i>";
    location.classList.add(toggleClass);
  } 
  else {
    location.classList.remove(toggleClass);
    document.getElementById("btn-bio").innerHTML = "<i class='bi bi-arrows-expand'></i>";
  }
}


var exampleModal = document.getElementById('exampleModal')
exampleModal.addEventListener('show.bs.modal', function (event) {
  var button = event.relatedTarget // Button that triggered the modal
  var c = button.getAttribute('class')
  var id = button.getAttribute('service-id') // Extract info from data-bs-* attributes

  if (c.includes("dropdown-item")) {
    var pos = document.querySelector('#service'+id).getBoundingClientRect();
    window.scrollTo(0, window.scrollY+pos.top);
  }

  var service = services[id];
  
  // Update the modal's content.
  var modalTitle = exampleModal.querySelector('.modal-title')
  var modalBodyInput = exampleModal.querySelector('.modal-body')

  let lines = service.description.split("\n");
  var content = "";

  lines.forEach(line => {
    content += '<p>'
    content += line;
    content += '</p>'
  });
  var title = service.title;

  modalTitle.innerHTML = title;
  modalBodyInput.innerHTML = content;
})


document.getElementById('btn-contact').onclick = function () {
  var pos = document.querySelector('#sectionContact').getBoundingClientRect();
  window.scrollTo(0, window.scrollY+pos.top);
}