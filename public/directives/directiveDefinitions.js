app.directive('basicInfo', function() {
    return {
        restrict: 'E',
        templateUrl: 'views/basicInfo.html',
        controller: 'basicInfoController'
    };
});

app.directive('abilityScores', function() {
    return {
        restrict: 'E',
        templateUrl: 'views/abilityScores.html',
        controller: 'abilityScoresController'
    };
});

app.directive('defenses', function() {
    return {
        restrict: 'E',
        templateUrl: 'views/defenses.html',
        controller: 'defensesController'
    };
});

app.directive('initiative', function() {
    return {
        restrict: 'E',
        templateUrl: 'views/initiative.html',
        controller: 'initiativeController'
    };
});

app.directive('movement', function() {
    return {
        restrict: 'E',
        templateUrl: 'views/movement.html',
        controller: 'movementController'
    };
});

app.directive('weaponProficiencies', function() {
    return {
        restrict: 'E',
        templateUrl: 'views/weaponProficiencies.html',
        controller: 'weaponProficienciesController'
    };
});

app.directive('powers', function() {
    return {
        restrict: 'E',
        templateUrl: 'views/powers.html',
        controller: 'powersController'
    };
});

app.directive('raceFeatures', function() {
    return {
        restrict: 'E',
        templateUrl: 'views/raceFeatures.html',
        controller: 'raceFeaturesController'
    };
});

app.directive('healthAndSavingThrows', function() {
    return {
        restrict: 'E',
        templateUrl: 'views/healthAndSavingThrows.html',
        controller: 'healthAndSavingThrowsController'
    };
});

app.directive('characterDetails', function() {
    return {
        restrict: 'E',
        templateUrl: 'views/characterDetails.html',
        controller: 'characterDetailsController'
    };
});