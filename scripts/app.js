//variablen navSlide går ind og tildelder værdien af de classes som står i parentesen til constanterne. Der gøres brug af arrow function, samt HTML DOM.
const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".navi");
    const main = document.querySelector(".maini");
//addEventlistener går ind og tildelder et event så snart der " clickes" og executer vha af if-else statementet herunder. 
    burger.addEventListener("click", () => {
        burger.classList.toggle("toggle");
        if (nav.style.width) {
            nav.style.width = "";
            main.style.marginLeft= "";
            nav.style.borderRight = "";
        } else {
            nav.style.width = "250px";
            main.style.marginLeft = "250px";
            nav.style.borderRight = "5px solid #F15A22";
        }
    });
};
navSlide();
//vis-skjul kode funktionen for knapper
    let x = document.getElementById("visskjul");
        x.addEventListener("click", myFunction);

//her bliver der brugt " myFunction" for at vise en anden metode at deklarere og kalde en function på, fremfor metoden vist på kodelinje 7. 
        function myFunction() {
        let click = document.getElementById("displaykode");
        if (click.style.display === "none"){
            click.style.display ="block";
        }else {
            click.style.display ="none";
        }
        }
// vis-skjul kode for Forms
   let z = document.getElementById("visform");
        z.addEventListener("click", showHide);


        function showHide() {
        let click = document.getElementById("form-1");
        if (click.style.display === "none"){
            click.style.display ="block";
        }else {
            click.style.display ="none";
        }
        }

   let zz = document.getElementById("visform2");
        zz.addEventListener("click", showHidef2);


        function showHidef2() {
        let click = document.getElementById("form-2");
        if (click.style.display === "none"){
            click.style.display ="block";
        }else {
            click.style.display ="none";
        }
        }

   let zzz = document.getElementById("visform3");
        zzz.addEventListener("click", showHidef3);


        function showHidef3() {
        let click = document.getElementById("form-3");
        if (click.style.display === "none"){
            click.style.display ="block";
        }else {
            click.style.display ="none";
        }
        }

  let zzzz = document.getElementById("visform4");
        zzzz.addEventListener("click", showHidef4);


        function showHidef4() {
        let click = document.getElementById("form-4");
        if (click.style.display === "none"){
            click.style.display ="block";
        }else {
            click.style.display ="none";
        }
        }

  let zzzzz = document.getElementById("visform5");
        zzzzz.addEventListener("click", showHidef5);


        function showHidef5() {
        let click = document.getElementById("form-5");
        if (click.style.display === "none"){
            click.style.display ="block";
        }else {
            click.style.display ="none";
        }
        }

//vis-skjul kode funktionen for typografi
   let y = document.getElementById("visskjul2");
        y.addEventListener("click", showHideTypo);


        function showHideTypo() {
        let click = document.getElementById("displaytypo");
        if (click.style.display === "none"){
            click.style.display ="block";
        }else {
            click.style.display ="none";
        }
        }
  let yy = document.getElementById("visskjul3");
        yy.addEventListener("click", showHideTypo2);


        function showHideTypo2() {
        let click = document.getElementById("displaytypo2");
        if (click.style.display === "none"){
            click.style.display ="block";
        }else {
            click.style.display ="none";
        }
        }

