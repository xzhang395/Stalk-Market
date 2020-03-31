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
var database = firebase.database();

var ref = database.ref("market/" + composeHashKey(today) + "/");
ref.on('value', gotData, errData);
var input = $("#name");

// countdown timer
var countDownDate = new Date("Mar 31, 2020 12:00:00").getTime();

var x = setInterval(function() {

  // Find the distance between now and the count down date
  var now = new Date();
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result
  display = hours + "h " + minutes + "mins " + seconds + "seconds ";
  console.log(display);
  return display;
}, 1000);

$("#myBtn").click(function() {
  var str = input.val();
  console.log(str);
  // composing the current date as the hash key
  database.ref("market/" + composeHashKey(today) + "/").push({
    name: str,
    email: "mark's email",
    price: 100
  });
});

function gotData(data) {
  var dataset = data.val();
  var keys = Object.keys(dataset);
  // console.log(keys);
  array=[];
  for (var i = 0; i< keys.length ; i++) {
    k = keys[i];
    array.push(dataset[k]);
  }
  array.sort(compareEntry); // this array is sorted from highest -> lowest, starting with 0
  console.log(array);
}

function compareEntry(a, b) {
  if (a.price > b.price) return -1;
  if (b.price > a.price) return 1;
  return 0;
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
  var dd = String(date.getDate()).padStart(2, "0");
  var mm = String(date.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = date.getFullYear();
  return mm + "-" + dd + "-" + yyyy;
}
