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
    var senorMaxPosMar =  document.getElementById("senorMaxPosMar");
    var senorMaxNegMar = document.getElementById("senorMaxNegMar");

    if (e.selectedIndex == "1") {
      fyldningsHeight.value = "300";
      fyldningsProcent.value = "70";
      tilladtUdhæng.value = "0";
      palleBredde.value = "600";
      palleHeight.value = "144";
      palleLength.value = "1200";
      senorMaxPosMar.value = "0";
      senorMaxNegMar.value = "0";
    } else if (e.selectedIndex == "2") {
      fyldningsHeight.value = "300";
      fyldningsProcent.value = "70";
      tilladtUdhæng.value = "0";
      palleBredde.value = "600";
      palleHeight.value = "144";
      palleLength.value = "800";
      senorMaxPosMar.value = "0";
      senorMaxNegMar.value = "0";
    } else if (e.selectedIndex == "3") {
      fyldningsHeight.value = "300";
      fyldningsProcent.value = "70";
      tilladtUdhæng.value = "0";
      palleBredde.value = "600";
      palleHeight.value = "144";
      palleLength.value = "600";
      senorMaxPosMar.value = "0";
      senorMaxNegMar.value = "0";
    } else if (e.selectedIndex == "4") {
      fyldningsHeight.value = "";
      fyldningsProcent.value = "";
      tilladtUdhæng.value = "";
      palleBredde.value = "";
      palleHeight.value = "";
      palleLength.value = "";
      senorMaxPosMar.value = "";
      senorMaxNegMar.value = "";
    }
  });
}
palleAutofill();
