var app = angular.module('myApp', []);


app.controller('mainController', ['$scope', function($scope) {
  $scope.names = ['Harry', 'Ron', 'Hermione', 'Sirius', 'Hedwig', 'Tonks'];
}]);

app.controller('secondController', ['$scope', function($scope) {
  $scope.symbols = ['http://www.wpclipart.com/recreation/games/card_icons/card_icon_spade.png', 'http://www.capitalcitycribbagecardsclub.com/Club_Picture.png', 'https://pixabay.com/static/uploads/photo/2012/04/13/20/38/hearts-33564_640.png', 'http://www.cliparthut.com/clip-arts/444/card-diamond-symbol-444406.png'];
}]);

app.controller('threeController', ['$scope', function($scope) {
  $scope.duplicates = [1,1,2,5,6,9,9,9];
}]);

app.controller('fourController', ['$scope', function($scope) {
  $scope.movies = [
    {
      'title': 'Hamlet',
      'lead actor': 'Brad Pitt',
      'genre': 'Drama'
    },
    {
      'title': 'Forest Gump',
      'lead actor': 'Tom Hanks',
      'genre': 'Drama'
    }
  ];
}]);

app.controller('fiveController', ['$scope', function($scope) {
  $scope.cameras = [
    {
      title: "Nikon D3100 DSLR",
      image: "http://ecx.images-amazon.com/images/I/713u2gDQqML._SX522_.jpg",
      rating: 3.4,
      price: 369.99,
      onSale: true
    },
    {
      title: "Canon EOS 70D",
      image: "http://ecx.images-amazon.com/images/I/81U00AkAUWL._SX522_.jpg",
      rating: 2.0,
      price: 1099.0,
      onSale: false
    },
    {
      title: "Nikon D810A",
      image:"http://ecx.images-amazon.com/images/I/91wtXIfLl2L._SX522_.jpg",
      rating: 4.2,
      price: 3796.95,
      onSale: true
    }
  ];
}]);

app.controller("MyFirstController", function($scope) {
  $scope.name = "Severus Snape";
});

app.controller("ExercisesController", function($scope) {
  $scope.favColor = "Orange",
  $scope.secondsInACentury = (((100 * 365) * 24) * 60) * 60,
  $scope.rightNow = "2015-09-11",
  $scope.pickRandomNumber = function() {
    $scope.number = Math.floor(Math.random() * 10) + 1;
  };
});

app.controller('MadLibs', ['$scope', function($scope) {
  $scope.boyName = 'John',
  $scope.adjective = 'cute',
  $scope.pluralNoun = 'shoes',
  $scope.insect = 'mosquitos',
  $scope.pNoun = 'chairs',
  $scope.verb = 'hops'
}]);

app.controller("reverseWords", function($scope) {
  $scope.reverseTheWords = function(word) {
    $scope.reverse = word.split("").reverse().join("");
  };
});

app.controller("contactApp", function($scope){

  var harry = {
    'name': 'Harry Potter',
    'email': 'harry@hogwarts.com',
    'phone': '(232) 383-5647'
  };
  var edward = {
    'name': 'Edward Scissorhands',
    'email': 'ed@hotmail.com',
    'phone': '(413) 987-5739'
  };
  var willy = {
    'name': 'Willy Wonka',
    'email': 'willy@gmail.com',
    'phone': '(221) 938-4525'
  };
  var arya = {
    'name': 'Arya Stark',
    'email': 'arya@yahoo.com',
    'phone': '(165) 437-0826'
  };

  $scope.people = [harry, edward, willy, arya];

  $scope.addContact = function() {
    var contact = {
      'name': $scope.name,
      'email': $scope.email,
      'phone': $scope.phone,
    };

  $scope.people.push(contact);
  };

});
