$(document).ready( () => {

    const signupButton = $(".signup-toggle");
    const loginButton = $(".login-toggle");
    
    const signupForm = $(".signup-form");
    const loginForm = $(".login-form");

    const responseCol = $(".response");
    
    loginButton.on("click", () => {
        if(signupForm.is(":visible") ) {
        signupForm.toggle();
        loginForm.toggle();
        }
    });

    $(".home").on('click', (e) => {
        e.preventDefault();
        window.location.replace("/home")
    })
    
    signupButton.on("click", () => {
        if(loginForm.is(":visible") ) {
        signupForm.toggle();
        loginForm.toggle();
        }
    });

    signupForm.submit( (e) => {
        e.preventDefault();
        if ( $("#password-signup").val().length < 6) {
            responseCol.empty();
            responseCol.append(`<p class='text-center text-danger'>The password must be at least 6 characters long</p>'`);
            return;
        }  else {
        // console.log("signup hit");
        // console.log($("#email-signup").val(), $("#password-signup").val(), $("#password-signup").val())

        $.ajax({
            url:"/api/users/",
            method: "POST",
            data: {
                username: $("#username-signup").val(),
                email: $("#email-signup").val(),
                password: $("#password-signup").val()
            }
        }).then( val => {
            if (val.status == 200) {
            console.log('SIGNED IN', val.status);
            window.location.replace("/home");
            } else if ( val.status == 500 ) {
                responseCol.empty()
                responseCol.append(`<p class='text-center text-danger'>There was an issue in registering, please try again</p>'`);
            }
        })
    }
    });


    loginForm.submit( (e) => {
        e.preventDefault();
        console.log("login hit");

        $.ajax({
            url:"/api/users/login",
            method: "POST",
            data: {
                email: $("#email-login").val(),
                password: $("#password-login").val()
            }
        }).then( val => {
            if (val.status == 200) {
            console.log('SIGNED IN', val.status);
            window.location.replace("/home");
            } else if ( val.status == 400 ) {
                responseCo.empty();
                responseCol.append(`<p class='text-center text-danger'>There was an issue in signing up, please try again</p>'`);
            }
        })
    })
    })



