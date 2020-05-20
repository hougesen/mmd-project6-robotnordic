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
//vis-skjul kode funktionen for knapper
    let x = document.getElementById("visskjul");
        x.addEventListener("click", myFunction);


        function myFunction() {
        let click = document.getElementById("displaykode");
        if (click.style.display === "none"){
            click.style.display ="block";
        }else {
            click.style.display ="none";
        };
        }

//vis-skjul kode funktionen for typografi
   let y = document.getElementById("visskjul2");
        y.addEventListener("click", showHide);


        function showHide() {
        let click = document.getElementById("displaytypo");
        if (click.style.display === "none"){
            click.style.display ="block";
        }else {
            click.style.display ="none";
        };
        }

