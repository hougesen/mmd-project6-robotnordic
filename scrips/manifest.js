function manifest() {
    let manifestKnap = document.querySelector(".manifestButton");
    let manifestInhold = document.querySelector(".manifestContent");
  
    manifestKnap.addEventListener("click", () => {
      if(manifestInhold.style.width &&manifestKnap.style.right ){
        manifestInhold.style.width = "";
        manifestKnap.style.right = ""
      }else{
        manifestInhold.style.width = "355px";
        manifestKnap.style.right = "355px"
      }
    });
  };
  manifest();