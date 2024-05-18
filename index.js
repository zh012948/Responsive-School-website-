var navLinks = document.getElementById("navLinks");
var show = document.getElementById("show");
var hide = document.getElementById('hide');

function hideMenu(){
    navLinks.style.right = "-200px";
    show.style.display = "block";
}


function showMenu(){

    navLinks.style.right = "0";
    show.style.display = "none";
    hide.style.display = "block";
}

window.addEventListener('beforeunload',function (e){
    e.preventDefault();
    let msg = 'Changes to the site may not saved';
    e.returnValue = msg;
})