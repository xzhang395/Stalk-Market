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
console.log(today.toISOString());
var test = new Date(today.toISOString());
console.log(test.toISOString());
var database = firebase.database();

var ref = database.ref("market/" + composeHashKey(today) + "/");
ref.on("value", gotData, errData);
var priceInput = $("#price");
var islandInput = $("#island");
var nameInput = $("#name");

// countdown timer
var countDownDate = nextExpiringDate();

var countdownStringDisplay = setInterval(function() {
  // Find the distance between now and the count down date
  var now = new Date();
  var distance = countDownDate - now;
  if (distance < 0) {
    countDownDate = nextExpiringDate();
  }

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

$("#myBtn").click(function() {
  var price = priceInput.val();
  var island = scrubInput(islandInput.val());
  var name = scrubInput(nameInput.val());
  // composing the current date as the hash key
  var createdTimestamp = new Date().toISOString();
  var expiringTimestamp = nextExpiringDate().toISOString();
  database.ref("market/" + composeHashKey(today) + "/").push({
    name: name,
    island: island,
    price: price,
    createdAtTimestamp: createdTimestamp,
    expiringAtTimestamp: expiringTimestamp
  });
});

function scrubInput(str) {
  return str.replace("[(;)]", "");
}
function gotData(data) {
  var dataset = data.val();
  var keys = Object.keys(dataset);
  var now = new Date();
  array = [];
  var dataEntry, expiringTimestamp;
  for (var i = 0; i < keys.length; i++) {
    k = keys[i];
    dataEntry = dataset[k];
    expiringTimestamp = new Date(dataEntry.expiringAtTimestamp);
    if (now.getTime() < expiringTimestamp.getTime()) {
      array.push(dataset[k]);
    }
  }
  array.sort(compareEntries); // this array is sorted from highest -> lowest, starting with 0

  //update price
  $("#max-price").text(scrubInput(array[0].price));
  //update island
  $("#best-island").text("at " + scrubInput(array[0].island));
  // update "global" countdown date variable
  countDownDate = new Date(array[0].expiringAtTimestamp);
  //update ranking
  $("table").empty();
  $("table").append(
    "<tr><th>Ranking</th><th>Price</th><th>Island</th><th>Owner</th></tr>)"
  );
  for (var i = 0; i < array.length; i++) {
    var markup =
      "<tr><td>" +
      (i + 1) +
      "</td><td>" +
      scrubInput(array[i].price) +
      "</td><td>" +
      scrubInput(array[i].island) +
      "</td><td>" +
      scrubInput(array[i].name) +
      "</td></tr>";
    $("table").append(markup);
  }
}

/**
 * Helper comparison function to aid in the sorting of user records for ranking list purposes.
 *
 * @param {Map}   a   a user record
 * @param {Map}   b   a separate user record
 */
function compareEntries(a, b) {
  if (Number(a.price) > Number(b.price)) return -1;
  if (Number(b.price) > Number(a.price)) return 1;
  return 0;
}

function errData(data) {
  // TODO: figure out what happens when data not present yet.
}

/**
 *
 * @param {Date}  date   the date to compose the key from
 */
function composeHashKey(date) {
  var fullDate = composeDateString(date);
  if (date.getHours() < 12) {
    return fullDate + "-0"; // morning price
  }
  return fullDate + "-1"; // afternoon price
}

/**
 * Parses a String representation of the date in a "YYYY-MM-DD" format.
 *
 * @param   {Date}  date    the date to parse the String from
 * @return  {String} String representing a date, no hours, mins, seconds
 */
function composeDateString(date) {
  var dd = String(date.getDate()).padStart(2, "0");
  var mm = String(date.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = date.getFullYear();
  return yyyy + "-" + mm + "-" + dd;
}

/**
 * Return the next expiration date relative to local time.
 *
 * @returns   {Date}  Date object equivalent of the expiration time.
 *                    Works for both morning and afternoon.
 */
function nextExpiringDate() {
  var expirationDate = new Date();
  if (expirationDate.getHours() < 12) {
    expirationDate.setHours(12);
  } else if (expirationDate.getHours() < 22) {
    expirationDate.setHours(22);
  } else {
    expirationDate = addDays(expirationDate, 1);
    expirationDate.setHours(12);
  }
  expirationDate.setMinutes(0, 0, 0);
  console.log("ISO date: " + expirationDate.toISOString());
  return expirationDate;
}

/**
 * Helper function to add a number of days to a Date object. Useful for transitioning months.
 *
 * @param {Date}    date  date to be modified
 * @param {Number}  days  number of days to add to the date param
 */
function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}
