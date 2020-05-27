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
  let users = [{
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

  for (let i = 0; i < users.length; i++) {
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


//Auto fyld palle med de korrekte EU-PALLE størrelser
function palleAutofill() {
  //variable der gør det muligt at vælge input select attribute 
  let e = document.getElementById("palletype");
  //EveneListener for palle dropdown
  e.addEventListener("change", function () {
    //Variable der styre hvilken index, man klikker på i select atribute
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
document.getElementById("videre").addEventListener("click", function () {
  let mønsterNavn = document.getElementById("patternName");
  let mønsterNavnGodkend = document.getElementById("patternNameGodkend");
  let blandedeLag = document.getElementById("blandedeLag");
  let spredPakker = document.getElementById("spredPakker");
  let kunFuldeLag = document.getElementById("kunFuldeLag");
  let centerLoad = document.getElementById("centerLoad");
  let pakkerVedKant = document.getElementById("pakkerVedKant");
  let bindLag = document.getElementById("bindLag");
  //GODKEND
  let blandedeLagGodkend = document.getElementById("blandedeLagGodkend");
  let spredPakkerGodkend = document.getElementById("spredPakkerGodkend");
  let kunFuldeLagGodkend = document.getElementById("kunFuldeLagGodkend");
  let centerLoadGodkend = document.getElementById("centerLoadGodkend");
  let pakkerVedKantGodkend = document.getElementById("pakkerVedKantGodkend");
  let bindLagGodkend = document.getElementById("bindLagGodkend");

  if (mønsterNavn.value) {
    mønsterNavnGodkend.value = mønsterNavn.value;
  }
  if (blandedeLag.checked) {
    blandedeLagGodkend.checked = blandedeLag.checked;
    localStorage.setItem("blandedeLag", blandedeLag.checked);
  }
  if (spredPakker.checked) {
    spredPakkerGodkend.checked = spredPakker.checked;
  }
  if (kunFuldeLag.checked) {
    kunFuldeLagGodkend.checked = kunFuldeLag.checked;
  }
  if (centerLoad.checked) {
    centerLoadGodkend.checked = centerLoad.checked;
  }
  if (pakkerVedKant.checked) {
    pakkerVedKantGodkend.checked = pakkerVedKant.checked;
  }
  if (bindLag.checked) {
    bindLagGodkend.checked = bindLag.checked;
  }
});


document.getElementById("videre2").addEventListener("click", function () {
  let produktNavn = document.getElementById("produktNavn");
  let antalProdukter = document.getElementById("antalProdukter");
  let fyldPalleProdukt = document.getElementById("fyldPalleProdukt");
  let pakkeFrom = document.getElementById("pakkeFrom");
  let pakkeBredde = document.getElementById("pakkeBredde");
  let pakkeHøjde = document.getElementById("pakkeHøjde");
  let pakkeLængde = document.getElementById("pakkeLængde");
  let vægt = document.getElementById("vægt");
  let sideUd = document.getElementById("sideUd");
  let kunTopPlacering = document.getElementById("kunTopPlacering");
  let kunBundPlacering = document.getElementById("kunBundPlacering");
  let forsigtig = document.getElementById("forsigtig");
  //GODKEND
  let produktNavnGodkend = document.getElementById("produktNavnGodkend");
  let antalProdukterGodkend = document.getElementById("antalProdukterGodkend");
  let fyldPalleProduktGodkend = document.getElementById("fyldPalleProduktGodkend");
  let pakkeFromGodkend = document.getElementById("pakkeFromGodkend");
  let pakkeBreddeGodkend = document.getElementById("pakkeBreddeGodkend");
  let pakkeHøjdeGodkend = document.getElementById("pakkeHøjdeGodkend");
  let pakkeLængdeGodkend = document.getElementById("pakkeLængdeGodkend");
  let vægtGodkend = document.getElementById("vægtGodkend");
  let sideUdGodkend = document.getElementById("sideUdGodkend");
  let kunTopPlaceringGodkend = document.getElementById("kunTopPlaceringGodkend");
  let kunBundPlaceringGodkend = document.getElementById("kunBundPlaceringGodkend");
  let forsigtigGodkend = document.getElementById("forsigtigGodkend");


  if (produktNavn.value) {
    produktNavnGodkend.value = produktNavn.value;
  }
  if (antalProdukter) {
    antalProdukterGodkend.value = antalProdukter.value;
  }
  if (fyldPalleProdukt.checked) {
    fyldPalleProduktGodkend.checked = fyldPalleProdukt.checked;
    antalProdukterGodkend.value = "300";
  }
  if (pakkeFrom.value) {
    pakkeFromGodkend.value = pakkeFrom.value;
  }
  if (pakkeBredde.value) {
    pakkeBreddeGodkend.value = pakkeBredde.value;
  }
  if (pakkeHøjde.value) {
    pakkeHøjdeGodkend.value = pakkeHøjde.value;
  }
  if (pakkeLængde.value) {
    pakkeLængdeGodkend.value = pakkeLængde.value;
  }
  if (vægt.value) {
    vægtGodkend.value = vægt.value;
  }
  if (sideUd.value) {
    sideUdGodkend.value = sideUd.value;
  }
  if (kunTopPlacering.checked) {
    kunTopPlaceringGodkend.checked = kunTopPlacering.checked;
  }
  if (kunBundPlacering.checked) {
    kunBundPlaceringGodkend.checked = kunBundPlacering.checked;
  }
  if (forsigtig.checked) {
    forsigtigGodkend.checked = forsigtig.checked;
  }
});