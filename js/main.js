// Initialize Firebase
  var config = {
    apiKey: "AIzaSyAs1NSzCyZeNJi25jz5J9DcL1U0eWtZp0I",
    authDomain: "acmecontact-f887c.firebaseapp.com",
    databaseURL: "https://acmecontact-f887c.firebaseio.com",
    projectId: "acmecontact-f887c",
    storageBucket: "acmecontact-f887c.appspot.com",
    messagingSenderId: "662460980818"
  };
  firebase.initializeApp(config);


// Reference messages collection
var messagesRef = firebase.database().ref('messages');


// Listen for form submit
document.getElementById('newsletterSubrscibeForm').addEventListener('submit', submitForm);

function submitForm(e){
	e.preventDefault(); //don't submit to calling html page

	// Get values
	var email = getInputVal('email');

	// Save message
	saveMessage(email);

	// Show alert
	document.querySelector('.alert').style.display = 'block';

	// Hide alert after 3 seconds
	setTimeout(function(){
		document.querySelector('.alert').style.display = 'none';
	}, 3000);

	// Clear email form input field
	document.getElementById('newsletterSubrscibeForm').reset();

}

// Function to get form values
function getInputVal(id){
	return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(email){
	var newMessageRef = messagesRef.push();
	newMessageRef.set({
		email: email 
	});
}