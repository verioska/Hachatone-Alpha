function enter(){

    const app = firebase.app();
    
    let email=document.getElementById("inputEmail").value;
    let password=document.getElementById("inputPassword").value;
    
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(res => {
        const user = res;
           
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

document.getElementById("loginBtn").addEventListener("click", function(){

    document.getElementById("start").style.display="none";
    document.getElementById("login").style.display="none";
    document.getElementById("job").style.display="block";

})
document.getElementById("womanBtn").addEventListener("click", function(){
    document.getElementById("start").style.display="none";
    document.getElementById("login").style.display="block";
    document.getElementById("job").style.display="none"
})

