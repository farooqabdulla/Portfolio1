let body1 = document.getElementById('body1')
let Port = document.getElementById('Port')
let Hell = document.getElementById('Hell')
let Web = document.getElementById('Web')
let connect1 = document.getElementById('Connect1')
let navb = document.getElementsByTagName('nav')
let li1 = document.getElementById('li1')
let phn = document.getElementById('phn')
let emli = document.getElementById('emli')
let linkedin1 = document.getElementById('linkedin1')
let Contact12 = document.getElementById('Contact12')
let project1 = document.getElementById('project1')
let resume1 = document.getElementById('resume1')
let mecontact = document.getElementById('mecontact')
let aboutme = document.getElementById('aboutme')
let line1 = document.getElementById('line1')
let logo13 = document.getElementById('logo13')
let logo14 = document.getElementById('logo14')


let Dark = () => {
    if (body1.style.backgroundColor=="white") {
        
        phn.style.color="white"
        logo13.style.color="white"
        logo14.style.color="white"
        line1.style.color="white"
        aboutme.style.color="white"
        
        mecontact.style.color="white"
        resume1.style.color="white"
        project1.style.color="white"
        Contact12.style.color="white"
        linkedin1.style.color="white"
        emli.style.color="white"
        body1.style.backgroundColor="#19222d"
        connect1.style.color="white"
        body1.style.color="white"
        Port.style.color="white"
        Hell.style.color="white"
        Web.style.color="white"
        Web.style.borderColor="white"
        li1.style.color="white"
        nav1.style.color="white"
        darkmode1.style.color="white"
        
    } else {
        logo13.style.color="#3d3f3c"
        logo14.style.color="#3d3f3c"
        line1.style.color="#3d3f3c"
        aboutme.style.color="#3d3f3c"
        mecontact.style.color="#3d3f3c"
        resume1.style.color="#3d3f3c"
        phn.style.color="#3d3f3c"
        Contact12.style.color="#3d3f3c"
        project1.style.color="#3d3f3c"
        linkedin1.style.color="#3d3f3c"
        emli.style.color="#3d3f3c"
        li1.style.color="#3d3f3c"
        li2.style.color="#3d3f3c"
        connect1.style.color="#3d3f3c"
        body1.style.backgroundColor="white"
        body1.style.color="#19222d"
        Port.style.color="#3d3f3c"
        Hell.style.color="#3d3f3c"
        Web.style.color="#3d3f3c"
        Web.style.borderColor="#3d3f3c"
        darkmode1.style.color="#3d3f3c"
        
        
    }
}

var typed = new Typed(".multiple-text", {
    strings: ["Frontend Developer.","Web Developer.",
"Web Designer."],
typeSpeed: 100,
backSpeed: 100,
backDelay: 1000,
loop: true
})
