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
var priceInput = $("#price");
var islandInput = $("#island");
var nameInput = $("#name");

// countdown timer
var countDownDate = new Date("Apr 1, 2020 22:00:00").getTime();

var countdownStringDisplay = setInterval(function () {

  // Find the distance between now and the count down date
  var now = new Date();
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  // var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result
  display = "Expires in " + hours + "h " + minutes + "mins ";
  $("#expiration").text(display);
  // console.log(display);
  return display;
}, 1000);



$("#myBtn").click(function () {
  var price = priceInput.val();
  var island = scrubInput(islandInput.val());
  var name = scrubInput(nameInput.val());
  // composing the current date as the hash key
  database.ref("market/" + composeHashKey(today) + "/").push({
    name: name,
    island: island,
    price: price
  });
});
var entry

function scrubInput(str) {
  return str.replace("[(;)]","")
  
}
function gotData(data) {
  var dataset = data.val();
  // console.log(dataset);
  var keys = Object.keys(dataset);
  array = [];
  for (var i = 0; i < keys.length; i++) {
    k = keys[i];
    array.push(dataset[k]);
  }
  array.sort(compareEntry); // this array is sorted from highest -> lowest, starting with 0
  
  //update price
  $("#max-price").text(scrubInput(array[0].price));
  //update island
  $("#best-island").text("at " + scrubInput(array[0].island));
  //update ranking
  $("table").empty();
  $("table").append("<tr><th>Ranking</th><th>Price</th><th>Island</th><th>Owner</th></tr>)");
  for (var i = 0; i < array.length; i++) {
    var markup = "<tr><td>" + (i + 1) + "</td><td>" + scrubInput(array[i].price) + "</td><td>" + scrubInput(array[i].island) + "</td><td>" + scrubInput(array[i].name) + "</td></tr>";
    $("table").append(markup);
  }
}

function compareEntry(a, b) {
  if (Number(a.price) > Number(b.price)) return -1;
  if (Number(b.price) > Number(a.price)) return 1;
  return 0;
}

// $( "#expiration" ).text( "Price expires in"+ time );

function errData(data) {
  // TODO: figure out what happens when data not present yet. 
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
