MicroModal.init();
//Declaring startLat and startLng as the lat/lng for Seattle. This will be default if we do not get geolocation.
var startLat = 47.6062;
var startLng = -122.3321;
//results Array is declared to store the lat/lng for restaurant results.
var resultsArray = [];
var restaurantResults = [];

//geolocation code. If geolocation is received, changes the startLat/Lng to the geolocation. If no geolocation, uses default location seattle. Gets list of cuisines based off the area.
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
        var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        };
        startLat = pos.lat
        startLng = pos.lng
        listCuisines();
    }, listCuisines());
}
//function that creates the map. This will place at most 5 markers on the map based on the restaurant results. Map will center on geolocation.
function initMap() {
    //creating variables for each of the markers.
    var geoLocation = { lat: startLat, lng: startLng };
    var marker1 = { lat: parseFloat(resultsArray[0]), lng: parseFloat(resultsArray[1]) };
    var marker2 = { lat: parseFloat(resultsArray[2]), lng: parseFloat(resultsArray[3]) };
    var marker3 = { lat: parseFloat(resultsArray[4]), lng: parseFloat(resultsArray[5]) };
    var marker4 = { lat: parseFloat(resultsArray[6]), lng: parseFloat(resultsArray[7]) };
    var marker5 = { lat: parseFloat(resultsArray[8]), lng: parseFloat(resultsArray[9]) };
    //placing markers on the map.
    var map = new google.maps.Map(
        document.getElementById('mapResults'), { zoom: 11, center: geoLocation });
    var mapMarker1 = new google.maps.Marker({ position: marker1, map: map });
    var mapMarker2 = new google.maps.Marker({ position: marker2, map: map });
    var mapMarker3 = new google.maps.Marker({ position: marker3, map: map });
    var mapMarker4 = new google.maps.Marker({ position: marker4, map: map });
    var mapMarker5 = new google.maps.Marker({ position: marker5, map: map });
    mapMarker1.addListener("click", function(){
        var i = $(this).attr('restaurantIndex') //get the attribute "restaurantIndex" of the button clicked, assigns it to var i.
        MicroModal.show('modal-2');//shows micromodal.
        //adds a bunch of information to the micromodal. thumbnail, address, phone, cost, etc.
        $('.card-img2').attr('src', restaurantResults[i].restaurant.thumb); //this code calling restaurantResults is actually calling the api for zomato. 
        $('#restAddress').html("Address: " + restaurantResults[i].restaurant.location.address)
        $('#restPhone').html("Phone: " + restaurantResults[i].restaurant.phone_numbers)
        $('#restCost').html("Average Cost For Two: $" + restaurantResults[i].restaurant.average_cost_for_two)
        $('#restMenu').html('<a target="_blank" href=' + restaurantResults[i].restaurant.menu_url + '>View the MENU</a>')
        $('#restUrl').html('<a target="_blank" href=' + restaurantResults[i].restaurant.url + '>Restaurant Website</a>')
        $('#modal-2-title').html(restaurantResults[i].restaurant.name)
    });
    mapMarker2.addListener("click", function(){
        var i = $(this).attr('restaurantIndex') //get the attribute "restaurantIndex" of the button clicked, assigns it to var i.
        MicroModal.show('modal-2');//shows micromodal.
        //adds a bunch of information to the micromodal. thumbnail, address, phone, cost, etc.
        $('.card-img2').attr('src', restaurantResults[i].restaurant.thumb); //this code calling restaurantResults is actually calling the api for zomato. 
        $('#restAddress').html("Address: " + restaurantResults[i].restaurant.location.address)
        $('#restPhone').html("Phone: " + restaurantResults[i].restaurant.phone_numbers)
        $('#restCost').html("Average Cost For Two: $" + restaurantResults[i].restaurant.average_cost_for_two)
        $('#restMenu').html('<a target="_blank" href=' + restaurantResults[i].restaurant.menu_url + '>View the MENU</a>')
        $('#restUrl').html('<a target="_blank" href=' + restaurantResults[i].restaurant.url + '>Restaurant Website</a>')
        $('#modal-2-title').html(restaurantResults[i].restaurant.name)
    });
    mapMarker3.addListener("click", function(){
        var i = $(this).attr('restaurantIndex') //get the attribute "restaurantIndex" of the button clicked, assigns it to var i.
        MicroModal.show('modal-2');//shows micromodal.
        //adds a bunch of information to the micromodal. thumbnail, address, phone, cost, etc.
        $('.card-img2').attr('src', restaurantResults[i].restaurant.thumb); //this code calling restaurantResults is actually calling the api for zomato. 
        $('#restAddress').html("Address: " + restaurantResults[i].restaurant.location.address)
        $('#restPhone').html("Phone: " + restaurantResults[i].restaurant.phone_numbers)
        $('#restCost').html("Average Cost For Two: $" + restaurantResults[i].restaurant.average_cost_for_two)
        $('#restMenu').html('<a target="_blank" href=' + restaurantResults[i].restaurant.menu_url + '>View the MENU</a>')
        $('#restUrl').html('<a target="_blank" href=' + restaurantResults[i].restaurant.url + '>Restaurant Website</a>')
        $('#modal-2-title').html(restaurantResults[i].restaurant.name)
    });
    mapMarker4.addListener("click", function(){
        var i = $(this).attr('restaurantIndex') //get the attribute "restaurantIndex" of the button clicked, assigns it to var i.
        MicroModal.show('modal-2');//shows micromodal.
        //adds a bunch of information to the micromodal. thumbnail, address, phone, cost, etc.
        $('.card-img2').attr('src', restaurantResults[i].restaurant.thumb); //this code calling restaurantResults is actually calling the api for zomato. 
        $('#restAddress').html("Address: " + restaurantResults[i].restaurant.location.address)
        $('#restPhone').html("Phone: " + restaurantResults[i].restaurant.phone_numbers)
        $('#restCost').html("Average Cost For Two: $" + restaurantResults[i].restaurant.average_cost_for_two)
        $('#restMenu').html('<a target="_blank" href=' + restaurantResults[i].restaurant.menu_url + '>View the MENU</a>')
        $('#restUrl').html('<a target="_blank" href=' + restaurantResults[i].restaurant.url + '>Restaurant Website</a>')
        $('#modal-2-title').html(restaurantResults[i].restaurant.name)
    });
    mapMarker5.addListener("click", function(){
        var i = $(this).attr('restaurantIndex') //get the attribute "restaurantIndex" of the button clicked, assigns it to var i.
        MicroModal.show('modal-2');//shows micromodal.
        //adds a bunch of information to the micromodal. thumbnail, address, phone, cost, etc.
        $('.card-img2').attr('src', restaurantResults[i].restaurant.thumb); //this code calling restaurantResults is actually calling the api for zomato. 
        $('#restAddress').html("Address: " + restaurantResults[i].restaurant.location.address)
        $('#restPhone').html("Phone: " + restaurantResults[i].restaurant.phone_numbers)
        $('#restCost').html("Average Cost For Two: $" + restaurantResults[i].restaurant.average_cost_for_two)
        $('#restMenu').html('<a target="_blank" href=' + restaurantResults[i].restaurant.menu_url + '>View the MENU</a>')
        $('#restUrl').html('<a target="_blank" href=' + restaurantResults[i].restaurant.url + '>Restaurant Website</a>')
        $('#modal-2-title').html(restaurantResults[i].restaurant.name)
    });
}
//I removed variables lat, lon, and cityID.
//variables that holds all cuisine types.
var cuisines = [];
//variable that holds all cuisine IDs.
var cuisineIDs = [];
//variable that holds the randomly selected cuisine type. Only for the "choose for me" button.
var cuisineType = '';
//variable that holds the randomly selected cuisine ID. Only for the "choose for me" button.
var cuisineID = 0;
//variable for ?

//function that hides #resultsPage and shows #homepage
function startPage() {
    $('#resultsPage').hide();
    $('#homepage').show();
}
// on page load, run the function startPage.
window.onload = startPage;

//function that hides the homepage and start restaurantQuery function
function newPage() {
    event.preventDefault();
    $('#homepage').hide();
    restaurantQuery();
};
//function that will gets a list of cuisines based off geolocation. Default location is Seattle.
function listCuisines() {
    //create array of available cuisines by locations
    var queryURL = 'https://developers.zomato.com/api/v2.1/cuisines?&lat=' + startLat + '&lon=' + startLng + '&count=5&apikey=77290d1b4dc1f21c65b6176dd07d56ed';
    // pushes all cuisine types into the cuisines array.
    $.ajax({
        url: queryURL,
        method: 'GET'
    })
        .then(function (response) {
            // console.log(response);
            var results = response.cuisines;
            //loops through the entire cuisines object and push to the array.
            for (var i = 0; i < results.length; i++) {
                cuisines.push(results[i].cuisine.cuisine_name)
                cuisineIDs.push(results[i].cuisine.cuisine_id)
            }
        })
}

//shows resultsPage, changes the results fields to 5 restaurants of a randomly selected cuisine. Runs the map function to display the map with markers.
function restaurantQuery() {
    $('#resultsPage').show();
    $('#zomResults').html('');
    // console.log(cuisines)
    //randomly generates a number from 0 to the number of cuisine types.
    var cuisineGenerator = Math.floor(Math.random() * cuisines.length);
    cuisineType = cuisines[cuisineGenerator]; //gets one cuisine (italian).
    cuisineID = parseInt(cuisineIDs[cuisineGenerator]);//gets the cuisine ID of the cuisine.
    // console.log(cuisineType);
    // console.log(cuisineID);
    //appends the random cuisine onto results page.
    $('#zomResults').append('<h3>' + "How about " + cuisineType + "?")
    $('#zomResults').append('<br>');

    //pull restaurant info based on cuisineID
    var queryURL = 'https://developers.zomato.com/api/v2.1/search?lat=' + startLat + '&lon=' + startLng + '&cuisines=' + cuisineID + '&count=5&radius=8045&sort=rating&apikey=77290d1b4dc1f21c65b6176dd07d56ed';

    $.ajax({
        url: queryURL,
        method: 'GET'
    })
        .then(function (response) {
            // console.log(response);
            restaurantResults = response.restaurants;
            var results = response.restaurants;
            console.log(results)
            console.log(restaurantResults)
            // console.log(results[0].restaurant.name);
            //loops through the first 5 restaurant results and appends it onto the results page.
            for (var i = 0; i < 5; i++) {
                // console.log(results[i].restaurant.location.latitude);
                // console.log(results[i].restaurant.location.longitude);

                var cardDiv1 = $('<div class=\'card mb-3\' style=\'max-width:540px\'>');
                var cardDiv2 = $('<div class=\'row no-gutters\'>');
                cardDiv1.append(cardDiv2);
                var cardDiv3 = $('<div class=\'col-md-4\'>');
                cardDiv2.append(cardDiv3);
                var restaurantImg = $('<img class=\'restaurantImg card-img\'>');
                restaurantImg.attr("src", results[i].restaurant.thumb);
                cardDiv3.append(restaurantImg);
                var cardDiv4 = $('<div class=\'col-md-8\'>');
                cardDiv2.append(cardDiv4);
                var cardDiv5 = $('<div class=\'card-body\'>');
                cardDiv5.append('<h5 class=\'card-title\'>' + results[i].restaurant.name + '</h5>');
                cardDiv5.append('<p class=\'card-text\'>' + 'Restaurant Rating: ' + results[i].restaurant.user_rating.aggregate_rating + '/5' + '</p>');
                cardDiv5.append("<button type='button' class='btn btn-secondary' id='buttonClicker'   restaurantIndex='" + i + "'>  More info  </button>");
                cardDiv4.append(cardDiv5);
                $('#zomResults').append(cardDiv1);
                if (i === 0) {
                    resultsArray = [];
                    resultsArray.push(results[i].restaurant.location.latitude);
                    resultsArray.push(results[i].restaurant.location.longitude);
                } else {
                    resultsArray.push(results[i].restaurant.location.latitude);
                    resultsArray.push(results[i].restaurant.location.longitude);
                }
                restaurantResults = response.restaurants;
                initMap();
            }
        });
};

//function that runs when the search button is clicked from the home screen. Takes user input, searches for restaurants based off location, displays the results in the results field and the map with markers. 
function searchQueryHome() {
    event.preventDefault();
    $('#homepage').hide();
    $('#resultsPage').show();
    $('#zomResults').html('');
    var userSearch = $("#searchHome").val();
    //appends the user search:
    $('#zomResults').append('<h3>' + "You searched for " + userSearch)
    $('#zomResults').append('<br>');

    var queryURL = "https://developers.zomato.com/api/v2.1/search?q=" + userSearch + "&lat=" + startLat + "&lon=" + startLng + "&radius=8045&sort=rating&apikey=77290d1b4dc1f21c65b6176dd07d56ed"

    $.ajax({
        url: queryURL,
        method: 'GET'
    })
        .then(function (response) {
            restaurantResults = response.restaurants;
            var results = response.restaurants;
            //loops through the first 5 restaurant results and appends it onto the results page.
            for (var i = 0; i < 5; i++) {
                // console.log(results[i].restaurant.location.latitude);
                // console.log(results[i].restaurant.location.longitude);

                var cardDiv1 = $('<div class=\'card mb-3\' style=\'max-width:540px\'>');
                var cardDiv2 = $('<div class=\'row no-gutters\'>');
                cardDiv1.append(cardDiv2);
                var cardDiv3 = $('<div class=\'col-md-4\'>');
                cardDiv2.append(cardDiv3);
                var restaurantImg = $('<img class=\'restaurantImg card-img\'>');
                restaurantImg.attr("src", results[i].restaurant.thumb);
                cardDiv3.append(restaurantImg);
                var cardDiv4 = $('<div class=\'col-md-8\'>');
                cardDiv2.append(cardDiv4);
                var cardDiv5 = $('<div class=\'card-body\'>');
                cardDiv5.append('<h5 class=\'card-title\'>' + results[i].restaurant.name + '</h5>');
                cardDiv5.append('<p class=\'card-text\'>' + 'Restaurant Rating: ' + results[i].restaurant.user_rating.aggregate_rating + '/5' + '</p>');
                cardDiv5.append("<button type='button' class='btn btn-secondary' id='buttonClicker'   restaurantIndex='" + i + "'>  More info  </button>");
                cardDiv4.append(cardDiv5);
                $('#zomResults').append(cardDiv1);
                if (i === 0) {
                    resultsArray = [];
                    resultsArray.push(results[i].restaurant.location.latitude);
                    resultsArray.push(results[i].restaurant.location.longitude);
                } else {
                    resultsArray.push(results[i].restaurant.location.latitude);
                    resultsArray.push(results[i].restaurant.location.longitude);
                }
                initMap();
            }
        });
};
//function that runs when the search button is clicked from the results screen. Takes user input, searches for restaurants based off location, displays the results in the results field and the map with markers. 
function searchQueryResults() {
    event.preventDefault();
    $('#homepage').hide();
    $('#resultsPage').show();
    $('#zomResults').html('');
    var userSearch = $("#searchResults").val();
    //appends the user search:
    $('#zomResults').append('<h3>' + "You searched for " + userSearch)
    $('#zomResults').append('<br>');

    var queryURL = "https://developers.zomato.com/api/v2.1/search?q=" + userSearch + "&lat=" + startLat + "&lon=" + startLng + "&radius=8045&sort=rating&apikey=77290d1b4dc1f21c65b6176dd07d56ed"

    $.ajax({
        url: queryURL,
        method: 'GET'
    })
        .then(function (response) {
            restaurantResults = response.restaurants;
            var results = response.restaurants;
            //loops through the first 5 restaurant results and appends it onto the results page.
            for (var i = 0; i < 5; i++) {
                // console.log(results[i].restaurant.location.latitude);
                // console.log(results[i].restaurant.location.longitude);

                var cardDiv1 = $('<div class=\'card mb-3\' style=\'max-width:540px\'>');
                var cardDiv2 = $('<div class=\'row no-gutters\'>');
                cardDiv1.append(cardDiv2);
                var cardDiv3 = $('<div class=\'col-md-4\'>');
                cardDiv2.append(cardDiv3);
                var restaurantImg = $('<img class=\'restaurantImg card-img\'>');
                restaurantImg.attr("src", results[i].restaurant.thumb);
                cardDiv3.append(restaurantImg);
                var cardDiv4 = $('<div class=\'col-md-8\'>');
                cardDiv2.append(cardDiv4);
                var cardDiv5 = $('<div class=\'card-body\'>');
                cardDiv5.append('<h5 class=\'card-title\'>' + results[i].restaurant.name + '</h5>');
                cardDiv5.append('<p class=\'card-text\'>' + 'Restaurant Rating: ' + results[i].restaurant.user_rating.aggregate_rating + '/5' + '</p>');
                cardDiv5.append("<button type='button' class='btn btn-secondary' id='buttonClicker'   restaurantIndex='" + i + "'>  More info  </button>");
                cardDiv4.append(cardDiv5);
                $('#zomResults').append(cardDiv1);
                if (i === 0) {
                    resultsArray = [];
                    resultsArray.push(results[i].restaurant.location.latitude);
                    resultsArray.push(results[i].restaurant.location.longitude);
                } else {
                    resultsArray.push(results[i].restaurant.location.latitude);
                    resultsArray.push(results[i].restaurant.location.longitude);
                }
                initMap();
            }
        });
};

//Micromodal function:
//when a "more info" button is clicked
$('#zomResults').on('click', '#buttonClicker', function () {//run this function.
    var i = $(this).attr('restaurantIndex') //get the attribute "restaurantIndex" of the button clicked, assigns it to var i.
    MicroModal.show('modal-2');//shows micromodal.
    //adds a bunch of information to the micromodal. thumbnail, address, phone, cost, etc.
    $('.card-img2').attr('src', restaurantResults[i].restaurant.thumb); //this code calling restaurantResults is actually calling the api for zomato. 
    $('#restAddress').html("Address: " + restaurantResults[i].restaurant.location.address)
    $('#restPhone').html("Phone: " + restaurantResults[i].restaurant.phone_numbers)
    $('#restCost').html("Average Cost For Two: $" + restaurantResults[i].restaurant.average_cost_for_two)
    $('#restMenu').html('<a target="_blank" href=' + restaurantResults[i].restaurant.menu_url + '>View the MENU</a>')
    $('#restUrl').html('<a target="_blank" href=' + restaurantResults[i].restaurant.url + '>Restaurant Website</a>')
    $('#modal-2-title').html(restaurantResults[i].restaurant.name)
});

// $('#mapResults').on('click', '', function () {//run this function.
//     var i = $(this).attr('restaurantIndex') //get the attribute "restaurantIndex" of the button clicked, assigns it to var i.
//     MicroModal.show('modal-2');//shows micromodal.
//     //adds a bunch of information to the micromodal. thumbnail, address, phone, cost, etc.
//     $('.card-img2').attr('src', restaurantResults[i].restaurant.thumb); //this code calling restaurantResults is actually calling the api for zomato. 
//     $('#restAddress').html("Address: " + restaurantResults[i].restaurant.location.address)
//     $('#restPhone').html("Phone: " + restaurantResults[i].restaurant.phone_numbers)
//     $('#restCost').html("Average Cost For Two: $" + restaurantResults[i].restaurant.average_cost_for_two)
//     $('#restMenu').html('<a target="_blank" href=' + restaurantResults[i].restaurant.menu_url + '>View the MENU</a>')
//     $('#restUrl').html('<a target="_blank" href=' + restaurantResults[i].restaurant.url + '>Restaurant Website</a>')
//     $('#modal-2-title').html(restaurantResults[i].restaurant.name)
// });




//when "Choose for me" is clicked from the results screen, run restaurantQuery()
$('.chooseBtnResults').on('click', restaurantQuery);
//when the "choose for me" on home screen is clicked, run newPage().
$('#chooseBtnID').on('click', newPage);
//when search button is clicked from home screen, run function.
$("#userSearchHome").on("click", searchQueryHome);
//when search button is clicked from the results screen, run function.
$("#userSearchResults").on("click", searchQueryResults);



//user validation that checks the user input to the cuisine types.
// for (var i = 0; i < cuisines.length; i++) {
//     if (userSearch === cuisines[i]) {
//         console.log("its a cuisine");
//     } else{}
// }