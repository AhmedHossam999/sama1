
//  navigation menu bar
const menubtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");
menubtn.addEventListener("click", () => {
    menubtn.classList.toggle("active");
    navigation.classList.toggle("active");
});
window.onscroll = () => {
    menubtn.classList.remove("active");
    navigation.classList.remove('active');
}
document.onclick = function (e) {
    if (!menu - btn.contains(e.target) && !navigation.contains(e.target)) {
        menubtn.classList.remove("active");
        navigation.classList.remove('active');
    }
}

// navigation bar effects on scroll

window.addEventListener("scroll", function () {
    const header = this.document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});


 const btns =document.querySelectorAll(".nav-btn");
 const slide =document.querySelectorAll(".img-slide");
 const content =document.querySelectorAll(".home-content");

 let currentslide=1;

 var slidernav =function (manual){
     btns.forEach((btn)=>{
         btn.classList.remove("active");
     });
     slide.forEach((slide)=>{
         slide.classList.remove("active");
     });
     content.forEach((content)=>{
         content.classList.remove("active");
     });

     btns[manual].classList.add("active");
     slide[manual].classList.add("active");
     content[manual].classList.add("active");
 }
 btns.forEach((btn,i)=>{
     btn.addEventListener("click",()=>{
         slidernav(i)
         currentslide=i;
     });
 });

 var repeat = function (activeClasss){
     let active = document.getElementsByClassName("active");
     let i =1;
     var repeater=()=>{
         setTimeout(function(){
             [...active].forEach((activeSlide)=>{
                 activeSlide.classList.remove("active");
             });
             btns[i].classList.add("active");
             slide[i].classList.add("active");
             content[i].classList.add("active");
             i++;
             if(slide.length==i){
                 i=0;
             }if(i>=slide.length){
                 return;

             }
             repeater();
         },5500);
     }
     repeater();
 }
 repeat();







