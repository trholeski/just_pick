MicroModal.init();

var cuisines = [];
var cuisineIDs = [];
var lat = 47.6062;
var lon = 122.3321;
var cityID = 279;
var cuisineType = '';
var cuisineID = 0;
var restaurantList = [];
var restaurantResults = [];

function startPage (){
    $('#resultsPage').hide();
    $('#homepage').show();
    console.log('working');
}

window.onload = startPage;


function newPage(event){
    event.preventDefault();
    $('#homepage').hide();
    restaurantQuery();
};

function restaurantQuery(){
    $('#resultsPage').show();
    $('#zomResults').html(''); 
    //create array of available cuisines by locations
    var queryURL = 'https://developers.zomato.com/api/v2.1/cuisines?city_id=' + cityID + '&lat=' + lat +'&lon=' + lon + '&count=5&apikey=77290d1b4dc1f21c65b6176dd07d56ed';

    $.ajax({
        url: queryURL,
        method: 'GET'
    })
    .then(function(response){
        console.log(response);
        var results = response.cuisines;
        for (var i=0;i<results.length; i++) {
            cuisines.push(results[i].cuisine.cuisine_name)
            cuisineIDs.push(results[i].cuisine.cuisine_id)
        }
        console.log(cuisines)

        var cuisineGenerator = Math.floor(Math.random()*cuisines.length)+1;
        cuisineType = cuisines[cuisineGenerator];
        cuisineID = parseInt(cuisineIDs[cuisineGenerator]);
        console.log(cuisineType);
        console.log(cuisineID);
        $('#zomResults').append('<h3>' + "How about " + cuisineType + "?")
        $('#zomResults').append('<br>');

        //pull restaurant info based on cuisineID
        var queryURL = 'https://developers.zomato.com/api/v2.1/search?entity_type=zone&lat=47.6062&lon=-122.3321&cuisines=' + cuisineID + '&count=5&apikey=77290d1b4dc1f21c65b6176dd07d56ed';

        $.ajax({
            url: queryURL,
            method: 'GET'
        })
        .then(function(response){

            console.log(response);
            var restaurantResults = response.restaurants;
            console.log(restaurantResults[0].restaurant.name);
            for (var i = 0; i <5; i++) {
                console.log(restaurantResults[i].restaurant.location.latitude);
                console.log(restaurantResults[i].restaurant.location.longitude);

                var cardDiv1 = $('<div class=\'card mb-3\' style=\'max-width:540px\'>');
                var cardDiv2 = $('<div class=\'row no-gutters\'>');
                cardDiv1.append(cardDiv2);
                var cardDiv3 = $('<div class=\'col-md-4\'>');
                cardDiv2.append(cardDiv3);
                var restaurantImg = $('<img class=\'restaurantImg card-img\'>');
                restaurantImg.attr("src", restaurantResults[i].restaurant.thumb);
                cardDiv3.append(restaurantImg);
                var cardDiv4 = $('<div class=\'col-md-8\'>');
                cardDiv2.append(cardDiv4);
                var cardDiv5 = $('<div class=\'card-body\'>');

                cardDiv5.append('<h5 class=\'card-title\'>' + restaurantResults[i].restaurant.name + '</h5>');
                cardDiv5.append('<p class=\'card-text\'>' + 'Restaurant Rating: ' + restaurantResults[i].restaurant.user_rating.aggregate_rating + '/5' + '</p>');
                cardDiv5.append("<button type='button' class='btn btn-secondary' id='buttonClicker'   restaurantIndex='"+ i +"'>  More info  </button>");
                cardDiv4.append(cardDiv5);
                $('#zomResults').append(cardDiv1);
            }
        });
    });
};

$('#zomResults').on('click', '#buttonClicker', function(restaurantResults){
    var i = $(this).attr('restaurantIndex')
    console.log('restaurant results=', restaurantResults[i]);
    console.log('button says hi');
    MicroModal.show('modal-2');
    $('#modal-2-title').html(restaurantResults[i].restaurant.name);
});



$('.chooseBtnResults').on('click', restaurantQuery);
$('#chooseBtnID').on('click', newPage);
console.log('the is restaurant results array', restaurantResults);


//need to restrict certain cuisine
//add session storage for results?
//do we need to pull/stor lat/long results for google api?
//add alt for images
//remove 'undefined' type
