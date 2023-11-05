window.onscroll = function() {navCheck()} ;

function navCheck() {
  const nav = document.querySelector("#scrollspy-nav");
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
  }
  else {
    // BG Color
    nav.classList.add("bg-primary")
    nav.classList.remove("bg-transparent")

    //TEXT color
    nav.classList.add("navbar-dark")
    nav.classList.remove("navbar-light")
  }
}


//load when scroll to it?
window.onload = function() {
  navCheck();
  //populateBio();
  //populateService();
  //populateContact();
}

function populateContact() {
  document.querySelector("#contact_phone").innerHTML = contact_info.phone;
  document.querySelector("#contact_email").innerHTML = contact_info.email;
  document.querySelector("#contact_address").innerHTML = contact_info.address;
  
}

function populateService() {

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
      <div class="col">
        <div class="card">
          <img src="static/assets/img/`+services[i].img+`" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">`+services[i].title+`</h5>
            <div id="service`+i+`" class="card-body-content">`+desc+`</div>
          </div>
          
          <div class="card-footer bg-transparent">
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
              See more
            </button>
          </div>
        </div>
      </div>
      `
            //<button id="btn_service`+i+`" class="btn btn-link" onclick="showContent('service`+i+`')">See more</button>
    document.getElementById("injectServices"). innerHTML += s;
  }
}

function populateBio() {
  let lines = bio.split("\n");
  
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
  var id = button.getAttribute('data-id') // Extract info from data-bs-* attributes
  var project = projects[id];
  
  // Update the modal's content.
  var modalTitle = exampleModal.querySelector('#exampleModalLabel')
  var modalBodyInput = exampleModal.querySelector('#modal_content')
  var modalImage = exampleModal.querySelector('#model_image')

  let lines = project.text.split("\n");
  var content = "";

  lines.forEach(line => {
    content += '<p>'
    content += line;
    content += '</p>'
  });
  var title = "";
  title += '<h5 class="modal-title">'+project.title+'</h5>';
  title += '<small class="text-muted">'+project.from+' - '+project.to+'</small>';
  //modalImage.src = "static/assets/img/"+project.img;
  modalTitle.innerHTML = title;
  modalBodyInput.innerHTML = content;
})