function loginCheck() {
  var form = document.getElementById("loginForm");
  if (form.username.value == "robotnordic" && form.password.value == "123") {
    window.open("dashboard.html");
  } else {
  }
}

function openProduktInfo(evt, produktInfo) {
  var i, tabcontent, tablinks;
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
  var e = document.getElementById("palletype");
  e.addEventListener("change", function () {
    var val = e.options[e.selectedIndex].number;
    var fyldningsHeight = document.getElementById("fyldningsHeight");
    var fyldningsProcent = document.getElementById("fyldningsProcent");
    var tilladtUdhæng = document.getElementById("tilladtUdhæng");
    var palleBredde = document.getElementById("palleBredde");
    var palleHeight = document.getElementById("palleHeight");
    var palleLength = document.getElementById("palleLength");
    var senorMaxPosMar = document.getElementById("senorMaxPosMar");
    var senorMaxNegMar = document.getElementById("senorMaxNegMar");

    var fyldningsHeightgodkend = document.getElementById(
      "fyldningsHeightGodkend"
    );
    var fyldningsProcentgodkend = document.getElementById(
      "fyldningsProcentGodkend"
    );
    var tilladtUdhænggodkend = document.getElementById("tilladtUdhængGodkend");
    var palleBreddegodkend = document.getElementById("palleBreddeGodkend");
    var palleHeightgodkend = document.getElementById("palleHeightGodkend");
    var palleLengthgodkend = document.getElementById("palleLengthGodkend");
    var senorMaxPosMargodkend = document.getElementById(
      "senorMaxPosMarGodkend"
    );
    var senorMaxNegMargodkend = document.getElementById(
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
