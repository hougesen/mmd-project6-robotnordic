// Funktion som gør at en knap bliver synlig når man scroller 500px + ned fra toppen af siden.
function scrollFunction() {
  // Definerer hvilken knap der er tale om.
  let mybutton = document.getElementById("myBtn");
  // If statement som checker hvor langt der er til toppen af siden.
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    // Hvis der er scrollet over 500px fra toppen får knappen display: block; hvilket samtidig gør den synlig.
    mybutton.style.display = "block";
  } else {
    // Hvis der er scrollet under 500px fra toppen beholder knappen display: none; hvilket gør den ikke bliver vist
    mybutton.style.display = "none";
  }
}
// Hver gang der bliver scrollet caller dette event den tidligere funktion scrollFunction for at tjekke om der er scrollet over/under 500px fra toppen.
window.onscroll = function () {
  scrollFunction();
};

// Funktion som gør at brugeren scroller til toppen hvis der klikkes på knappen
function topFunction() {
  // document.body.scrollTop bruges til Safari
  document.body.scrollTop = 0;
  // document.documentElement.scrollTop bruges til Chrome, Firefox, IE og Opera
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

  for (let i = 0; i < users.length; i++) {
    // Checker i loginCheck om nogle af array objects passer
    if (username == users[i].username && password == users[i].password) {
      window.open("dashboard.html");
      // Funktionen bliver stoppet hvis condition passer
      return;
    }
  }
  alert("forkert kode");
}
