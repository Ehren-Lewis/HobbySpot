// require("dotenv").config();

$(document).ready( () => {

    const addButton = $(".add-button");
    const addForm = $(".add-discussion-form");
    const disucssionHandler = $(".discussion-handler");

    navigator.geolocation.watchPosition(
		(success) => {
			let lat = success.coords.latitude;
			let lon = success.coords.longitude;
			getLocation(lat, lon);
		},
		(error) => {
			if (storage.length > 0) {
				let city = storage[length - 1];
				getWeather(city);
			}
			getWeather("Chicago");
            $("#currentCity").addClass("d-none")
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
//     let id;
// let target;
// let options;
})
// 5f7d81a3e5e751b9ae47b0813dc64954
// dbd4b78b875c9f3d499f25008225a8e6
const getLocation = (lat, lon) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=dbd4b78b875c9f3d499f25008225a8e6`;
    $.ajax({
        url: url,
        method: "GET",
    }).then( (value) => {
        getWeather(value.name);
    });
}


const getWeather = (city)  => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=dbd4b78b875c9f3d499f25008225a8e6`;
    $.ajax({
        url: url,
        method: "GET",
    }).then( (value) => {
        displayOneDay(value);
    });
}

const displayOneDay = (value) => {
    const name = value.name;

    $("#currentCity").addClass("border")
    
    // gathering the needed data 
    const temp  = value.main.temp;
    const humidity = value.main.humidity;
    const windSpeed = value.wind.speed;
    const visibility = value.weather[0].main;
    const description = value.weather[0].description;
    const icon = value.weather[0].icon;
    const weatherImg = $(`<img src="https://openweathermap.org/img/wn/${icon}.png">`);

    $("#forecast").text(weatherImg);
    $(".cityName").text(name);

    // If there is any present information, remove anything that was appended 
    if ( $(".icon").children().length > 0) {
        $(".icon").empty();
        $(".UV").empty();
    }

    // Using .text overwrites, no need to remove the children 
    $(".icon").append(weatherImg);
    $(".temperature").text(`Temperature: ${temp}\u00B0F`);
    $(".windSpeed").text(`Wind speed: ${windSpeed} MPH`);
    $(".humidity").text(`Humidity: ${humidity} %`);
}