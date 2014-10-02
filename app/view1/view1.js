'use strict';

var app=angular.module('myApp.view1', ['ngRoute'])

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

app.controller('View1Ctrl', ['$scope',function($scope) {
	$scope.person={"day":"",
					"gender":""};
}]);


app.filter('changeName', function(){
		return function(input){
		return changeName(input.day,input.gender)};
		
});

	function changeName($d,$g){
	if($d=="monday" && $g=="male"){
	return "Kwadwo";
	}
	else if($d=="monday" && $g=="female"){
	return "Adwoa";
	}
	else if($d=="tuesday" && $g=="male"){
	return "Kwabena";
	}
	else if($d=="tuesday" && $g=="female"){
	return "Abena";
	}
	else if($d=="wednesday" && $g=="male"){
	return "Kwaku";
	}
	else if($d=="wednesday" && $g=="female"){
	return "Akua";
	}
	else if($d=="thursday" && $g=="male"){
	return "Yaw";
	}
	else if($d=="thursday" && $g=="female"){
	return "Yaa";
	}
	else if($d=="friday" && $g=="male"){
	return "Kofi";
	}
	else if($d=="friday" && $g=="female"){
	return "AAfua";
	}
	else if($d=="saturday" && $g=="male"){
	return "Kwame";
	}
	else if($d=="saturday" && $g=="female"){
	return "Ama";
	}
	else if($d=="sunday" && $g=="male"){
	return "Kwesi";
	}
	else if($d=="sunday" && $g=="female"){
	return "Akosua";
	}
};

  // This is called with the results from from FB.getLoginStatus().
  function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
      // Logged into your app and Facebook.
      testAPI();
    } else if (response.status === 'not_authorized') {
      // The person is logged into Facebook, but not your app.
      document.getElementById('status').innerHTML = 'Please log ' +
        'into this app.';
    } else {
      // The person is not logged into Facebook, so we're not sure if
      // they are logged into this app or not.
      document.getElementById('status').innerHTML = 'Please log ' +
        'into Facebook.';
    }
  }

  // This function is called when someone finishes with the Login
  // Button.  See the onlogin handler attached to it in the sample
  // code below.
  function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }

  window.fbAsyncInit = function() {
  FB.init({
    appId      : '727361934001435',
    cookie     : true,  // enable cookies to allow the server to access 
                        // the session
    xfbml      : true,  // parse social plugins on this page
    version    : 'v2.1' // use version 2.1
  });

  // Now that we've initialized the JavaScript SDK, we call 
  // FB.getLoginStatus().  This function gets the state of the
  // person visiting this page and can return one of three states to
  // the callback you provide.  They can be:
  //
  // 1. Logged into your app ('connected')
  // 2. Logged into Facebook, but not your app ('not_authorized')
  // 3. Not logged into Facebook and can't tell if they are logged into
  //    your app or not.
  //
  // These three cases are handled in the callback function.

  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });

  };

  // Load the SDK asynchronously
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

  // Here we run a very simple test of the Graph API after login is
  // successful.  See statusChangeCallback() for when this call is made.
  function testAPI() {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function(response) {
      console.log('Successful login for: ' + response.name);
      document.getElementById('status').innerHTML =
        'Thanks for logging in, ' + response.name + '!';
    });
  }