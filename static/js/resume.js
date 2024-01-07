
const education_training = document.querySelector("#section-0");

education.forEach(e => {
    let data = "";
    data += "<div class='row'>"
    data += "<div class='col-3'>"+e.year+"</div>"
    data += "<div class='col'>"+e.location+"</div>"
    data += "</div>"

    education_training.innerHTML += data;
});

