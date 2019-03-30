function register(){

    const app = firebase.app();
    
    let email=document.getElementById("inputEmail").value;
    let password=document.getElementById("inputPassword").value;
    
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(res => {
        const user = res;
        console.log("a ver");
        console.log("a ver");
        console.log("a ver");
        console.log(user);
        console.log("a ver");
        console.log("a ver");
        console.log("a ver");
    })
    .catch(function(error) {
        // Handle Errors here.
        console.log("app:", app);
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorCode)
        console.log(errorMessage)
      });
    
}