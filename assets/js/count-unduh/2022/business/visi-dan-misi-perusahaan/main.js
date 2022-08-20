var firebaseConfig = {
  apiKey: "AIzaSyAaxSwGnQQ_R2QR_x_QR1a5Q-qqcfo583w",
  authDomain: "blabz-app-unduh.firebaseapp.com",
  databaseURL: "https://blabz-app-unduh-default-rtdb.firebaseio.com",
  projectId: "blabz-app-unduh",
  storageBucket: "blabz-app-unduh.appspot.com",
  messagingSenderId: "603084801690",
  appId: "1:603084801690:web:ce7828a948c36692bbc123",
  measurementId: "G-LDSH7X3T8Z"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Now let's listen to the value of the counter and write it
// to the counter DOM element
const counter = document.getElementsByClassName("count-view")[0];

const counterRef = firebase.database().ref("Canva Unduh Visi Dan Misi Perusahaan");

counterRef.on("value", count => {
counter.textContent = count.val().toLocaleString().replaceAll(',', '.');
});

const incrementButton = document.getElementsByClassName("download")[0];
incrementButton.addEventListener(
"click",
() => {
  counterRef.transaction(
    val => val + 1,
    err => {
      if (err) {
        alert(err);
      }
    }
  );
},
false
);