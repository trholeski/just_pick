var startLat = 47.6062;
var startLng = -122.3321;
var resultsArray = [];

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
        var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        };
        console.log(position);
        startLat = pos.lat
        startLng = pos.lng
        console.log(startLat);

    }, function () {
    });
} else {

}

function initMap() {
    console.log(startLat);
    var geoLocation = { lat: startLat, lng: startLng };
    var marker1 = { lat: parseFloat(resultsArray[0]), lng: parseFloat(resultsArray[1]) };
    var marker2 = { lat: parseFloat(resultsArray[2]), lng: parseFloat(resultsArray[3]) };
    var marker3 = { lat: parseFloat(resultsArray[4]), lng: parseFloat(resultsArray[5]) };
    var marker4 = { lat: parseFloat(resultsArray[6]), lng: parseFloat(resultsArray[7]) };
    var marker5 = { lat: parseFloat(resultsArray[8]), lng: parseFloat(resultsArray[9]) };
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('mapResults'), { zoom: 11, center: geoLocation });
    // The marker, positioned at Uluru
    var mapMarker1 = new google.maps.Marker({ position: marker1, map: map });
    var mapMarker2 = new google.maps.Marker({ position: marker2, map: map });
    var mapMarker3 = new google.maps.Marker({ position: marker3, map: map });
    var mapMarker4 = new google.maps.Marker({ position: marker4, map: map });
    var mapMarker5 = new google.maps.Marker({ position: marker5, map: map });
}

var cuisines = [];
var cuisineIDs = [];
var lat = 47.6062;
var lon = 122.3321;
var cityID = 279;
var cuisineType = '';
var cuisineID = 0;
var restaurantList = [];

function startPage() {
    $('#resultsPage').hide();
    $('#homepage').show();
    console.log('working');
}

window.onload = startPage;


function newPage(event) {
    event.preventDefault();
    $('#homepage').hide();
    restaurantQuery();
};

function restaurantQuery() {
    $('#resultsPage').show();
    $('#zomResults').html('');
    //create array of available cuisines by locations
    var queryURL = 'https://developers.zomato.com/api/v2.1/cuisines?city_id=' + cityID + '&lat=' + startLat + '&lon=' + startLng + '&count=5&apikey=77290d1b4dc1f21c65b6176dd07d56ed';
    // code to push all cuisine types into the cuisines array.
    $.ajax({
        url: queryURL,
        method: 'GET'
    })
        .then(function (response) {
            console.log(response);
            var results = response.cuisines;
            for (var i = 0; i < results.length; i++) {
                cuisines.push(results[i].cuisine.cuisine_name)
                cuisineIDs.push(results[i].cuisine.cuisine_id)
            }
            console.log(cuisines)

            var cuisineGenerator = Math.floor(Math.random() * cuisines.length) + 1;
            cuisineType = cuisines[cuisineGenerator];
            cuisineID = parseInt(cuisineIDs[cuisineGenerator]);
            console.log(cuisineType);
            console.log(cuisineID);
            $('#zomResults').append('<h3>' + "How about " + cuisineType + "?")
            $('#zomResults').append('<br>');

            //pull restaurant info based on cuisineID
            var queryURL = 'https://developers.zomato.com/api/v2.1/search?entity_type=zone&lat=' + startLat + '&lon=' + startLng + '&cuisines=' + cuisineID + '&count=5&radius=8045&apikey=77290d1b4dc1f21c65b6176dd07d56ed';

            $.ajax({
                url: queryURL,
                method: 'GET'
            })
                .then(function (response) {
                    console.log(response);
                    var results2 = response.restaurants;
                    console.log(results2[0].restaurant.name);
                    for (var i = 0; i < 5; i++) {
                        console.log(results2[i].restaurant.location.latitude);
                        console.log(results2[i].restaurant.location.longitude);

                        var cardDiv1 = $('<div class=\'card mb-3\' style=\'max-width:540px\'>');
                        var cardDiv2 = $('<div class=\'row no-gutters\'>');
                        cardDiv1.append(cardDiv2);
                        var cardDiv3 = $('<div class=\'col-md-4\'>');
                        cardDiv2.append(cardDiv3);
                        var restaurantImg = $('<img class=\'restaurantImg card-img\'>');
                        restaurantImg.attr("src", results2[i].restaurant.thumb);
                        cardDiv3.append(restaurantImg);
                        var cardDiv4 = $('<div class=\'col-md-8\'>');
                        cardDiv2.append(cardDiv4);
                        var cardDiv5 = $('<div class=\'card-body\'>');

                        cardDiv5.append('<h5 class=\'card-title\'>' + results2[i].restaurant.name + '</h5>');
                        cardDiv5.append('<p class=\'card-text\'>' + 'Restaurant Rating: ' + results2[i].restaurant.user_rating.aggregate_rating + '/5' + '</p>');
                        cardDiv5.append('<p class=\'card-text\'>' + results2[i].restaurant.location.address + '</p>');
                        cardDiv5.append('<button type=\'button\' class=\'btn btn-light modalBtn\'>' + 'More info' + '</button>');
                        cardDiv4.append(cardDiv5);
                        $('#zomResults').append(cardDiv1);
                        resultsArray.push(results2[i].restaurant.location.latitude);
                        resultsArray.push(results2[i].restaurant.location.longitude);
                        console.log(resultsArray);
                        initMap();
                    }
                });
        });
};

function searchQuery(event){
    event.preventDefault();
    var userSearch = $("#searchBar").val();
    console.log(userSearch);
}
$('.chooseBtnResults').on('click', restaurantQuery);
$('#chooseBtnID').on('click', newPage);
$("#userSearch").on("click", searchQuery);
//need to restrict certain cuisine
//add session storage for results?
//do we need to pull/stor lat/long results for google api?
//add alt for images
//remove 'undefined' type
