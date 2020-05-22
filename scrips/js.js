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
    if (
      username == users[i].username &&
      password == users[i].password
    ) {
      window.open("dashboard.html");
      // stop the function if this is found to be true
      return;
    }
  }
  if(username.value = ""){
    alert("need password");
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
      fyldningsHeight.value = fyldningsHeightgodkend.value = "300";
      fyldningsProcent.value = fyldningsProcentgodkend.value = "70";
      tilladtUdhæng.value = tilladtUdhænggodkend.value = "0";
      palleBredde.value = palleBreddegodkend.value = "600";
      palleHeight.value = palleHeightgodkend.value = "144";
      palleLength.value = palleLengthgodkend.value = "1200";
      senorMaxPosMar.value = senorMaxNegMargodkend.value = "0";
      senorMaxNegMar.value = senorMaxPosMargodkend.value = "0";

      localStorage.setItem("fyldningsHeight", fyldningsHeight.value);
      localStorage.setItem("fyldningsProcent", fyldningsProcent.value);
      localStorage.setItem("tilladtUdhæng", tilladtUdhæng.value);
      localStorage.setItem("palleBredde", palleBredde.value);
      localStorage.setItem("palleHeight", palleHeight.value);
      localStorage.setItem("palleLength", palleLength.value);
      localStorage.setItem("senorMaxPosMar", senorMaxPosMar.value);
      localStorage.setItem("senorMaxNegMar", senorMaxNegMar.value);

      fyldningsProcent;
      tilladtUdhæng;
      palleBredde;
      palleHeight;
      palleLength;
      senorMaxPosMar;
      senorMaxNegMar;
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
