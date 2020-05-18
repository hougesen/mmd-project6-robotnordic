// When the user scrolls down 20px from the top of the document, show the button

function scrollFunction() {
  let mybutton = document.getElementById("myBtn");
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
window.onscroll = function () {
  scrollFunction()
};
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function loginCheck() {
  let form = document.getElementById("loginForm");
  if (form.username.value == "robotnordic" && form.password.value == "123") {
    window.open("dashboard.html");
  } else {
    alert("Forkert login information");
  };
}

function openProduktInfo(evt, produktInfo) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(produktInfo).style.display = "block";
  evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();

function palleAutofill() {
  let e = document.getElementById("palletype");
  e.addEventListener("change", function () {
    let val = e.options[e.selectedIndex].number;
    let fyldningsHeight = document.getElementById("fyldningsHeight");
    let fyldningsProcent = document.getElementById("fyldningsProcent");
    let tilladtUdhæng = document.getElementById("tilladtUdhæng");
    let palleBredde = document.getElementById("palleBredde");
    let palleHeight = document.getElementById("palleHeight");
    let palleLength = document.getElementById("palleLength");
    let senorMaxPosMar = document.getElementById("senorMaxPosMar");
    let senorMaxNegMar = document.getElementById("senorMaxNegMar");

    let fyldningsHeightgodkend = document.getElementById(
      "fyldningsHeightGodkend"
    );
    let fyldningsProcentgodkend = document.getElementById(
      "fyldningsProcentGodkend"
    );
    let tilladtUdhænggodkend = document.getElementById("tilladtUdhængGodkend");
    let palleBreddegodkend = document.getElementById("palleBreddeGodkend");
    let palleHeightgodkend = document.getElementById("palleHeightGodkend");
    let palleLengthgodkend = document.getElementById("palleLengthGodkend");
    let senorMaxPosMargodkend = document.getElementById(
      "senorMaxPosMarGodkend"
    );
    let senorMaxNegMargodkend = document.getElementById(
      "senorMaxNegMarGodkend"
    );

    if (e.selectedIndex == "1") {
      fyldningsHeight.value = fyldningsHeightgodkend.value = "300";
      fyldningsProcent.value = fyldningsProcentgodkend.value = "70";
      tilladtUdhæng.value = tilladtUdhænggodkend.value = "0";
      palleBredde.value = palleBreddegodkend.value = "600";
      palleHeight.value = palleHeightgodkend.value = "144";
      palleLength.value = palleLengthgodkend.value = "1200";
      senorMaxPosMar.value = senorMaxNegMargodkend.value = "0";
      senorMaxNegMar.value = senorMaxPosMargodkend.value = "0";
    } else if (e.selectedIndex == "2") {
      fyldningsHeight.value = fyldningsHeightgodkend.value = "300";
      fyldningsProcent.value = fyldningsProcentgodkend.value = "70";
      tilladtUdhæng.value = tilladtUdhænggodkend.value = "0";
      palleBredde.value = palleBreddegodkend.value = "600";
      palleHeight.value = palleHeightgodkend.value = "144";
      palleLength.value = palleLengthgodkend.value = "800";
      senorMaxPosMar.value = senorMaxNegMargodkend.value = "0";
      senorMaxNegMar.value = senorMaxPosMargodkend.value = "0";
    } else if (e.selectedIndex == "3") {
      fyldningsHeight.value = fyldningsHeightgodkend.value = "300";
      fyldningsProcent.value = fyldningsProcentgodkend.value = "70";
      tilladtUdhæng.value = tilladtUdhænggodkend.value = "0";
      palleBredde.value = palleBreddegodkend.value = "600";
      palleHeight.value = palleHeightgodkend.value = "144";
      palleLength.value = palleLengthgodkend.value = "600";
      senorMaxPosMar.value = senorMaxNegMargodkend.value = "0";
      senorMaxNegMar.value = senorMaxPosMargodkend.value = "0";
    } else if (e.selectedIndex == "4") {
      fyldningsHeight.value = fyldningsHeightgodkend.value = "0";
      fyldningsProcent.value = fyldningsProcentgodkend.value = "0";
      tilladtUdhæng.value = tilladtUdhænggodkend.value = "0";
      palleBredde.value = palleBreddegodkend.value = "0";
      palleHeight.value = palleHeightgodkend.value = "0";
      palleLength.value = palleLengthgodkend.value = "0";
      senorMaxPosMar.value = senorMaxNegMargodkend.value = "0";
      senorMaxNegMar.value = senorMaxPosMargodkend.value = "0";
    }
  });
}
palleAutofill();