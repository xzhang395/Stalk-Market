// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAI2G1hIMEqkk9B7dAIVQfbJiDjdv-MHxI",
  authDomain: "stalk-market-4dc91.firebaseapp.com",
  databaseURL: "https://stalk-market-4dc91.firebaseio.com",
  projectId: "stalk-market-4dc91",
  storageBucket: "stalk-market-4dc91.appspot.com",
  messagingSenderId: "458780571277",
  appId: "1:458780571277:web:4cac1c4df036eb5a6054c4",
  measurementId: "G-2RG24TVT9X"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var today = new Date();
console.log("MXQ: " + today);
var database = firebase.database();

var ref = database.ref("market/" + composeHashKey(today) + "/");
ref.on('value', gotData, errData);
var input = $("#name");

$("#myBtn").click(function() {
  var str = input.val();
  console.log(str);
  // composing the current date as the hash key
  database.ref("market/" + composeHashKey(today) + "/").set({
    name: str,
    email: "mark's email",
    price: 42
  });
});

function gotData(data) {
  var entry = data.val();
  console.log(entry);
  console.log("Name: "+ entry.name);
  console.log("Email: "+ entry.email);
  console.log("Price: "+ entry.price);
}

function errData(data) {
  // TODO: figure out what happens when data not present yet. 
  console.log(data);
}

function composeHashKey(date) {
  fullDate = composeDateString(date);
  if (date.getHours() < 12) {
    return fullDate + "-0"; // morning price
  }
  return fullDate + "-1"; // afternoon price
}

function composeDateString(date) {
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();
  return mm + "-" + dd + "-" + yyyy;
}
