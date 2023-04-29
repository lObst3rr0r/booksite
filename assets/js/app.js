const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        } else{
            entry.target.classList.remove('show');
        }

    });
});
let mybutton = document.getElementById("btnup");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function cpyfunction(){

    var copyText = document.getElementById("cpyemail");
    navigator.clipboard.writeText("monteil.ph@free.fr");
    var cpymsg = document.getElementById("cpymsg");
    cpymsg.style.opacity = "1";

    cpymsg.classList.add("show");
    setTimeout(function() {
      cpymsg.classList.remove("show");
      cpymsg.style.opacity = "0";

    }, 2000);

  }

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  window.scrollTo({top: 0, behavior: 'smooth'});
} 
function toContact(){
    document.body.scrollTop = 600;
    window.scrollTo({top: 6000, behavior: 'smooth'});

}
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));