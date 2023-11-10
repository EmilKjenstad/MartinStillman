window.onscroll = function() {navCheck()} ;

function navCheck() {
  const nav = document.querySelector("#scrollspy-nav");
  const mast_blur = document.querySelector("#mast-gradient");
  const mast_content = document.querySelector("#mast-content");
  const nav_title = document.querySelector("#nav-title");
  
  var h = nav.offsetHeight;

  var top = document.querySelector('#sectionLanding').offsetHeight;
  var bord = parseInt(getComputedStyle(document.querySelector('section')).borderTopWidth);

  // used to be top-h
  if(window.scrollY < 10) {
    // BG Color
    nav.classList.add("bg-transparent")
    nav.classList.remove("bg-primary")

    //TEXT color
    nav.classList.add("navbar-light")
    nav.classList.remove("navbar-dark")

    nav_title.classList.add("fs-3")

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
              <div class="col-lg-6 service-img skills" style="background-image: url('static/assets/img/`+services[i].img+`');"></div>
              <div class="service-item col-lg-6">
                <p class="fw-bolder" style="font-size: larger;">`+services[i].title+`</p>
                <p>`+desc+`</p>
                <a class="fs-1" role="button" data-bs-toggle="modal" service-id="`+i+`" data-bs-target="#exampleModal">Learn more</a>
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
  
  if (show_more) {
    const entry = document.createElement("div");
    entry.classList.add('bio_entry');

    const content = document.createElement("div");
    content.classList.add('bio_col');

    const textnode = document.createTextNode(lines[0]);

    content.appendChild(textnode);
    entry.appendChild(content);
    document.getElementById("bio_container").appendChild(entry);

  } else {

  }

  lines.forEach(line => {
    if (line != "") {
      const entry = document.createElement("div");
      entry.classList.add('bio_entry');

      const content = document.createElement("div");
      content.classList.add('bio_col');

      const textnode = document.createTextNode(line);

      content.appendChild(textnode);
      entry.appendChild(content);
      document.getElementById("bio_container").appendChild(entry);
    }
  });
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