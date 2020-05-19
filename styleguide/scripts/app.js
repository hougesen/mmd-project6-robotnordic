const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".navi");
    const main = document.querySelector(".maini");

    burger.addEventListener("click", () => {
        burger.classList.toggle("toggle");
        if (nav.style.width) {
            nav.style.width = "";
            main.style.marginLeft= "";
            nav.style.borderRight = ""
        } else {
            nav.style.width = "250px";
            main.style.marginLeft = "250px"
            nav.style.borderRight = "5px solid #F15A22";
        }
    });
};
navSlide();
//vis skjul kode funktionen
 function showHide(){
        const click = document.getElementById("typokode");
        if (click.style.display === "none"){
            click.style.display ="block";
        }else {
            click.style.display ="none";
        };
    }