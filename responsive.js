
 burger=document.querySelector('.burger')
 navbar=document.querySelector('.nav-list')
 rightnav=document.querySelector('.right-nav')
 backsec=document.querySelector('.first-section')


 burger.addEventListener('click',()=>{
     navbar.classList.toggle('h-navbar');
     rightnav.classList.toggle('h-right-nav');
     backsec.classList.toggle('h-section-background');
    //  function myFunction() {
    //     var element = document.getElementById("rightnav");
    //     element.classList.add("h-right-nav");
    //   }
    //  function myFunction() {
    //     var element1 = document.getElementById("background first-section");
    //     element1.classList.add("");
    //   }
 })

 