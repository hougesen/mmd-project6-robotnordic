// When the user scrolls down 20px from the top of the document, show the button

function scrollFunction() {
  let mybutton = document.getElementById("myBtn");
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
window.onscroll = function () {
  scrollFunction();
};
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function loginCheck() {
  let users = [
    {
      // Object @ 0 index
      username: "robotnordic",
      password: "so you think you can dance",
    },
    {
      // Object @ 1 index
      username: "abdul",
      password: "123",
    },
    {
      // Object @ 2 index
      username: "mads",
      password: "123",
    },
    {
      // Object @ 3 index
      username: "khalid",
      password: "123",
    },
    {
      // Object @ 4 index
      username: "sebastian",
      password: "123",
    },
  ];

  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  for (var i = 0; i < users.length; i++) {
    // check is user input matches username and password of a current index of the objPeople array
    // hvis user
    if (username == users[i].username && password == users[i].password) {
      window.open("dashboard.html");
      // stop the function if this is found to be true
      return;
    }
  }
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
      localStorage.setItem("fyldningsHeight", (fyldningsHeight.value = "300"));
      localStorage.setItem("fyldningsProcent", (fyldningsProcent.value = "70"));
      localStorage.setItem("tilladtUdhæng", (tilladtUdhæng.value = "0"));
      localStorage.setItem("palleBredde", (palleBredde.value = "600"));
      localStorage.setItem("palleHeight", (palleHeight.value = "144"));
      localStorage.setItem("palleLength", (palleLength.value = "1200"));
      localStorage.setItem("senorMaxPosMar", (senorMaxPosMar.value = "0"));
      localStorage.setItem("senorMaxNegMar", (senorMaxNegMar.value = "0"));
      fyldningsHeightgodkend.value = localStorage.getItem("fyldningsHeight");
      fyldningsProcentgodkend.value = localStorage.getItem("fyldningsProcent");
      tilladtUdhænggodkend.value = localStorage.getItem("tilladtUdhæng");
      palleBreddegodkend.value = localStorage.getItem("palleBredde");
      palleHeightgodkend.value = localStorage.getItem("palleHeight");
      palleLengthgodkend.value = localStorage.getItem("palleLength");
      senorMaxNegMargodkend.value = localStorage.getItem("senorMaxPosMar");
      senorMaxPosMargodkend.value = localStorage.getItem("senorMaxNegMar");
    } else if (e.selectedIndex == "2") {
      localStorage.setItem("fyldningsHeight", (fyldningsHeight.value = "300"));
      localStorage.setItem("fyldningsProcent", (fyldningsProcent.value = "70"));
      localStorage.setItem("tilladtUdhæng", (tilladtUdhæng.value = "0"));
      localStorage.setItem("palleBredde", (palleBredde.value = "600"));
      localStorage.setItem("palleHeight", (palleHeight.value = "144"));
      localStorage.setItem("palleLength", (palleLength.value = "800"));
      localStorage.setItem("senorMaxPosMar", (senorMaxPosMar.value = "0"));
      localStorage.setItem("senorMaxNegMar", (senorMaxNegMar.value = "0"));
      fyldningsHeightgodkend.value = localStorage.getItem("fyldningsHeight");
      fyldningsProcentgodkend.value = localStorage.getItem("fyldningsProcent");
      tilladtUdhænggodkend.value = localStorage.getItem("tilladtUdhæng");
      palleBreddegodkend.value = localStorage.getItem("palleBredde");
      palleHeightgodkend.value = localStorage.getItem("palleHeight");
      palleLengthgodkend.value = localStorage.getItem("palleLength");
      senorMaxNegMargodkend.value = localStorage.getItem("senorMaxPosMar");
      senorMaxPosMargodkend.value = localStorage.getItem("senorMaxNegMar");
    } else if (e.selectedIndex == "3") {
      localStorage.setItem("fyldningsHeight", (fyldningsHeight.value = "300"));
      localStorage.setItem("fyldningsProcent", (fyldningsProcent.value = "70"));
      localStorage.setItem("tilladtUdhæng", (tilladtUdhæng.value = "0"));
      localStorage.setItem("palleBredde", (palleBredde.value = "600"));
      localStorage.setItem("palleHeight", (palleHeight.value = "144"));
      localStorage.setItem("palleLength", (palleLength.value = "600"));
      localStorage.setItem("senorMaxPosMar", (senorMaxPosMar.value = "0"));
      localStorage.setItem("senorMaxNegMar", (senorMaxNegMar.value = "0"));
      fyldningsHeightgodkend.value = localStorage.getItem("fyldningsHeight");
      fyldningsProcentgodkend.value = localStorage.getItem("fyldningsProcent");
      tilladtUdhænggodkend.value = localStorage.getItem("tilladtUdhæng");
      palleBreddegodkend.value = localStorage.getItem("palleBredde");
      palleHeightgodkend.value = localStorage.getItem("palleHeight");
      palleLengthgodkend.value = localStorage.getItem("palleLength");
      senorMaxNegMargodkend.value = localStorage.getItem("senorMaxPosMar");
      senorMaxPosMargodkend.value = localStorage.getItem("senorMaxNegMar");
    } else if (e.selectedIndex == "4") {
      localStorage.setItem("fyldningsHeight", (fyldningsHeight.value = ""));
      localStorage.setItem("fyldningsProcent", (fyldningsProcent.value = ""));
      localStorage.setItem("tilladtUdhæng", (tilladtUdhæng.value = ""));
      localStorage.setItem("palleBredde", (palleBredde.value = ""));
      localStorage.setItem("palleHeight", (palleHeight.value = ""));
      localStorage.setItem("palleLength", (palleLength.value = ""));
      localStorage.setItem("senorMaxPosMar", (senorMaxPosMar.value = ""));
      localStorage.setItem("senorMaxNegMar", (senorMaxNegMar.value = ""));
      fyldningsHeightgodkend.value = localStorage.getItem("fyldningsHeight");
      fyldningsProcentgodkend.value = localStorage.getItem("fyldningsProcent");
      tilladtUdhænggodkend.value = localStorage.getItem("tilladtUdhæng");
      palleBreddegodkend.value = localStorage.getItem("palleBredde");
      palleHeightgodkend.value = localStorage.getItem("palleHeight");
      palleLengthgodkend.value = localStorage.getItem("palleLength");
      senorMaxNegMargodkend.value = localStorage.getItem("senorMaxPosMar");
      senorMaxPosMargodkend.value = localStorage.getItem("senorMaxNegMar");
    }
  });
}
palleAutofill();
