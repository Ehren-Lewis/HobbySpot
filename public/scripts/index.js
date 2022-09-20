require("dotenv").config();

$(document).ready( () => {

    const addButton = $(".add-button");
    const addForm = $(".add-discussion-form");
    const disucssionHandler = $(".discussion-handler");

    navigator.geolocation.watchPosition(
		(success) => {
			let lat = success.coords.latitude;
			let lon = success.coords.longitude;
			//getUVIndex(lat, lon);
			getLocation(lat, lon);
		},
		(error) => {
			if (storage.length > 0) {
				let city = storage[length - 1];
				getWeather(city);
			}
			getWeather("Chicago");
		}
	);


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
                    // "UserId": 
                }
            }).then( (val ) => {
                location.reload();      
            });
        }

    })

    // addForm.


})

const getLocation = (lat, lon) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.API_KEY}`;
    $.ajax({
        url: url,
        method: "GET",
    }).then( (value) => {
        getWeather(value.name);
    });
}


const getWeather = (city)  => {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${process.env.API_KEY}`;
    $.ajax({
        url: url,
        method: "GET",
    }).then( (value) => {
        todayDiv.html("");
        console.log(response);
        displayOneDay(response);
    });
}
