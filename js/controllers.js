'use strict';

/* Controllers */

var mnemo = angular.module('mnemo', []);

mnemo.controller('MainController', function($scope) {
    $scope.localDecks = [{
        "name": "Shoes",
        "icon": "fa-pause",
        "cards": [{
            "id": 1,
            "question": "Who let the dogs out?",
            "answer": "The dogs let themselves out",
            "delay": -10
        }, {
            "id": 2,
            "question": "Who is Papa Smurf?",
            "answer": "A smurfin' smurf.",
            "delay": -10
        }, {
            "id": 3,
            "question": "Why is the reverse?",
            "answer": "Because of the ulterior.",
            "delay": -10
        }]
    }, {
        "name": "Random",
        "icon": "fa-eject",
        "cards": [{
            "id": 1,
            "question": "What the what?",
            "answer": "So says he.",
            "delay": -10
        }, {
            "id": 2,
            "question": "How are who?",
            "answer": "Why not.",
            "delay": -10
        }, {
            "id": 3,
            "question": "Really?",
            "answer": "Not really.",
            "delay": -10
        }]
    }];

    $scope.activeDecks = [];

    $scope.remoteDecks = [];
});