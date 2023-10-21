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

//load when scroll to it?
window.onload = function() {
  populateBio();
  populateService();
  populateContact();
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
    
    // Detect stuff like '-' at start of sentence = bulletpoint
    lines.forEach(line => {
      if (line != "") {
        desc += '<p class="card-text">'
        desc += line;
        desc += '</p>'
      }
    });
    
    let s = `
      <div class="col">
        <div class="card">
          <img src="static/assets/img/`+services[i].img+`" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">`+services[i].title+`</h5>
            <div id="service`+i+`" class="card-body-content">`+desc+`</div>
          </div>
          <div class="card-footer">
            <button id="btn_service`+i+`" class="btn btn-link" onclick="showContent('service`+i+`')">See more</button>
          </div>
        </div>
      </div>
    `
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
