$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault(); 
  
    var fullname = $("#fullname").val();
    var email = $("#email").val();
    var telephone = $("#telephone").val();
    var event = $("#event").val();

    if (!fullname || !email || !telephone || !event) {
      $("#error-message").text("Please fill in all fields.");
      return;
    }

    const firebaseConfig = {
      apiKey: "AIzaSyDQ_p8xVKDiR9XRdSDIOwx8mJjR_wKIW1Q",
      authDomain: "last-64d80.firebaseapp.com",
      projectId: "last-64d80",
      storageBucket: "last-64d80.appspot.com",
      messagingSenderId: "683184568596",
      appId: "1:683184568596:web:69e6f62c93daf32dd86a01",
      measurementId: "G-5LMCEZZL59"
    };
    firebase.initializeApp(firebaseConfig);
    const analytics = firebase.analytics(app);

    var database = firebase.database();
    var postData = {
      fullname: fullname,
      email: email,
      telephone: telephone,
      event: event
    };

    var newPostRef = database.ref('registrations').push();
    newPostRef.set(postData, function(error) {
      if (error) {
        $("#error-message").text("An error occurred. Please try again later.");
      } else {
        alert("Registration successful! Your data has been submitted."); 
        $("form")[0].reset(); 
        $("#error-message").text(""); 
      }
    });
  });
});
