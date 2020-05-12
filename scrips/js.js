function check(form) {
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
    if (e.selectedIndex == "1") {
      document.getElementById("fyldningsHeight").value = "300";
      document.getElementById("fyldningsProcent").value = "70";
      document.getElementById("tilladtUdhæng").value = "0";
      document.getElementById("palleBredde").value = "800";
      document.getElementById("palleHeight").value = "144";
      document.getElementById("palleLength").value = "1200";
      document.getElementById("senorMaxPosMar").value = "0";
      document.getElementById("senorMaxNegMar").value = "0";
    } else if (e.selectedIndex == "2") {
      document.getElementById("fyldningsHeight").value = "300";
      document.getElementById("fyldningsProcent").value = "70";
      document.getElementById("tilladtUdhæng").value = "0";
      document.getElementById("palleBredde").value = "600";
      document.getElementById("palleHeight").value = "144";
      document.getElementById("palleLength").value = "800";
      document.getElementById("senorMaxPosMar").value = "0";
      document.getElementById("senorMaxNegMar").value = "0";
    } else if (e.selectedIndex == "3") {
      document.getElementById("fyldningsHeight").value = "300";
      document.getElementById("fyldningsProcent").value = "70";
      document.getElementById("tilladtUdhæng").value = "0";
      document.getElementById("palleBredde").value = "400";
      document.getElementById("palleHeight").value = "144";
      document.getElementById("palleLength").value = "600";
      document.getElementById("senorMaxPosMar").value = "0";
      document.getElementById("senorMaxNegMar").value = "0";
    } else if (e.selectedIndex == "4") {
      document.getElementById("fyldningsHeight").value = "";
      document.getElementById("fyldningsProcent").value = "";
      document.getElementById("tilladtUdhæng").value = "";
      document.getElementById("palleBredde").value = "";
      document.getElementById("palleHeight").value = "";
      document.getElementById("palleLength").value = "";
      document.getElementById("senorMaxPosMar").value = "";
      document.getElementById("senorMaxNegMar").value = "";
    }
  });
}
palleAutofill();
