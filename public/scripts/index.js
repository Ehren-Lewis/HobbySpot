$(document).ready( () => {

    const addButton = $(".add-button");
    const addForm = $(".add-discussion-form");
    const disucssionHandler = $(".discussion-handler")

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


    addForm.submit( (e) => {
        e.preventDefault();
        if ( $("#hobby").val() == "" || $("#title").val() == "" || $("#discussion").val() == "") {
        disucssionHandler.empty();
        disucssionHandler.append(`<p class='text-center text-danger'>No field can be blank</p>'`);
        } else {

        }

    })

    // addForm.


})