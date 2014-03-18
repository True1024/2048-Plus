/**
 * This class will be responsible for showing help to the user.
 */

// define angular module/app
var formApp = angular.module('formApp', []);

// create angular controller and pass in $scope and $http
function helpController($scope, $http) {

    // create a blank object to hold our form information
    // $scope will allow this to pass between controller and view
    $scope.formData = {};

    $scope.showHelp=function(){
        $scope.message="How to play game"
    }
    // process the form
    $scope.processForm = function($user) {

        var p=Math.log(parseInt($user.target))/Math.log(2)
        console.log(parseInt(p)+":"+parseFloat(p))
        if(parseInt(p)==parseFloat(p)){

            if(parseInt($user.width)<=1||parseInt($user.width)>4){
                $scope.wValid="Grid size must be between 2 and 4"
            }else{
               window.location.href="main.html?"+$user.target+":"+$user.width
            }
        }
        $scope.tValid="Value must be power of 2"


        console.log($user.target)



    };

}