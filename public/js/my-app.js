// Initialize your app
var myApp = new Framework7({
    animateNavBackIcon:true
});

// Export selectors engine
var $$ = Dom7;

// Add main View
var mainView = myApp.addView('.view-main', {
    // Enable dynamic Navbar
    dynamicNavbar: true,
    // Enable Dom Cache so we can use all inline pages
    domCache: true
});

var nyslApp = angular.module('nyslApp', []);

nyslApp.controller('nyslController', function ($scope, $http){

    $scope.fillGameInfoData = function() {

        $http({
            method: 'GET',
            url: "js/nysl-sheet.json"
        }).then(function successCallback(response) {
            // this callback will be called asynchronously
            // when the response is available
            //console.log(response);
            var datos = response.data.Matches;
            $scope.datos = datos;

            $scope.message = datos[0].teams.field;



        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            console.error(response);
        });

       


    }


});


$.getJSON("js/nysl-sheet.json", function(result){

    var datos = result.Matches;




    dibujarTablaPartidos(datos)


});






function dibujarTablaPartidos(datos){



    datos.forEach(function(team){

        $("#partidos-a-crear")
            .append($("<li>")
                    .append($('<a>')
                            .attr("href", "#gameInfo")
                            .attr("data-view", ".view-main")
                            .addClass("item-link")
                            .append($("<div>")
                                    .addClass("item-content")
                                    .addClass("item-merged")
                                    .append($("<div>")
                                            .addClass("item-inner")
                                            .append($("<div>")
                                                    .addClass("item-title")
                                                    .append($("<div>")
                                                            .addClass("teamName")
                                                            .append("<img class='escudos' src='"+ team.teams.t1logo +"'/>")
                                                            .append($("<span>")
                                                                    .append(team.teams.t1name)))
                                                    .append($("<div>")
                                                            .addClass("teamName")
                                                            .append("<img class='escudos' src='"+ team.teams.t2logo +"'/>")
                                                            .append($("<span>")
                                                                    .append(team.teams.t2name))))))));

    });



};


$(".pre-splash").hide();

$("#show-log").click(function() {

    $(".pre-splash").toggle();

});

$("#show-hide").click(function(){

    $("#info-entrada").hide();

});
