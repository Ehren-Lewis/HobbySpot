
$(document).ready( () => {

    const signupButton = $(".signup-toggle");
    const loginButton = $(".login-toggle");
    
    const signupForm = $(".signup-form");
    const loginForm = $(".login-form");
    
    loginButton.on("click", () => {
        if(signupForm.is(":visible") ) {
        signupForm.toggle();
        loginForm.toggle();
        }
    });
    
    signupButton.on("click", () => {
        if(loginForm.is(":visible") ) {
        signupForm.toggle();
        loginForm.toggle();
        }
    });

    signupForm.submit( (e) => {
        e.preventDefault();
        console.log("signup hit");
    });

    loginForm.submit( (e) => {
        e.preventDefault();
        console.log("login hit");
    })

})


// const handleLogin = (info) => {

// }

// const handleSignup = (info) => {
//     $.ajax({
//         type: "POST",
//         url: "/api/users",

//     })
// }