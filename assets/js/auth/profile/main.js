var myDate = new Date();
    var hrs = myDate.getHours();

    var greet;

    if (hrs < 12)
      greet = 'Selamat Pagi';
    else if (hrs >= 12 && hrs <= 14)
      greet = 'Selamat Siang';
    else if (hrs >= 13 && hrs <= 18)
      greet = 'Selamat Sore';
    else if (hrs >= 19 && hrs <= 24)
      greet = 'Selamat Malam';

    document.getElementById('welcome').innerHTML =
      '<b>' + greet + '</b> ';

    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyCjC-USwu7ZHeq6go-Ib7SeTO_smsThV74",
      authDomain: "blabz-app.firebaseapp.com",
      databaseURL: "https://blabz-app-default-rtdb.firebaseio.com",
      projectId: "blabz-app",
      storageBucket: "blabz-app.appspot.com",
      messagingSenderId: "187903251501",
      appId: "1:187903251501:web:c630f4a6ba9af865f2d4a4",
      measurementId: "G-KBG57QHP36",
    };
    firebase.initializeApp(firebaseConfig);

    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        document.getElementById("img").innerHTML = `
              <img src="${user.photoURL}" style="border-radius: 50px; width: 50px;">
          `;
        document.getElementById("username").innerHTML = `
              ${user.displayName}
          `;
        document.getElementById("email").innerHTML = `
              ${user.email}
          `;
        document.getElementById("verified").innerHTML = `
              ${user.emailVerified}
          `;
        document.getElementById("username-link").innerHTML = `${user.uid}
          `;
        const linkUsername = document.getElementById("username-link");
        const link = document.getElementById("link");
        link.href = link.textContent;

      } else {
        window.location = "../../index.html";
      }
    });

    function logout() {
      firebase
        .auth()
        .signOut()
        .then(function () {
          window.location = "../../index.html";
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    showData();