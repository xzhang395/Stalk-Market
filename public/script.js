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

var database = firebase.database();

var input = $("#name")

$("#myBtn").click(function(){
  var str = input.val();
  console.log(str);
  database.ref('market').push(
    {
      name: str,
      price: "$$"
    }
  );
});
