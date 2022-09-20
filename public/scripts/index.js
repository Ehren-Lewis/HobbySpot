
$(document).ready( () => {

    const addButton = $(".add-button");
    const addForm = $(".add-discussion-form");
    const disucssionHandler = $(".discussion-handler");

    const handler = $(".status-control");

    handler.click( (e) => {
        e.preventDefault();
        if (handler.text() == "Log In") {
            window.location.replace("/");
        } else {
            $.ajax({
                url: "/api/users/logout",
                method: "POST"
            }).then( val => {
                window.location.replace("/")
            })
        }
    })

    addButton.click( () => {
        addButton.text("Cancel");
        // I don't know if this is desired functionality
        //This cannot really be added onto unil we establish cookies
        //
        if (addForm.is(":visible")) {
            addButton.text("Add Discussion")
            $("#hobby").val("");
            $("#title").val("");
            $("#discussion").val("");
        }
        addForm.toggle();
    })

    // title
    // category
    //username from cookies
    // text info


    addForm.submit( (e) => {
        e.preventDefault();
        if ( $("#hobby").val() == "" || $("#title").val() == "" || $("#discussion").val() == "") {
        disucssionHandler.empty();
        disucssionHandler.append(`<p class='text-center text-danger'>No field can be blank</p>'`);
        } else {

            $.ajax({
                url: "/api/discussions",
                method: "POST",
                data: {
                    "hobby_topic": $("#hobby").val(),
                    "discussion_title": $("#title").val(),
                    "text_field": $("#discussion").val(),
                    "UserId":6
                }
            }).then( (val ) => {
                location.reload();      
            });
        }

    })

    // addForm.


})