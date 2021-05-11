window.onload = function () {

  var nextSlide = document.querySelector(".next");
  var prevSlide = document.querySelector(".prev");
  var slideImages = document.querySelector(".images-profile").children;
  var slideText = document.querySelector(".text-testimonial").children;
  var index = 0;


  nextSlide.onclick = function(){
    next("next");
  }

  prevSlide.onclick = function(){
    next("prev");
  }

  function next(direction) {

      if (direction == "next"){
        index++
        if (index == slideImages.length || index == slideText) {
          index = 0;
        } 
      }
      else{
        if(index == 0){
          index = slideImages.length -1
          index = slideText.length -1
        }
        else{
          index--
        }
      }
    
      for (let i = 0; i < slideImages.length; i++) {

        slideImages[i].classList.remove("active");
      }

      slideImages[index].classList.add("active")

      for (let i = 0; i < slideText.length; i++) {

        slideText[i].classList.remove("active");
      }

      slideText[index].classList.add("active")
    }
  }
