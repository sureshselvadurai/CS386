var app = angular.module('spa', ['ngRoute']);
const htmlHome = '<h2>Home</h2><p>This is the Home Page</p>';
const htmlAbout =  '<h2>About</h2><p>This is the About Page</p>';
const htmlServices = '<h2>Services</h2><p>This is the Services Page</p>';
const htmlProjects = '<h2>Projects</h2><p>This is the Projects Page</p>';

app.config(function($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');

    $routeProvider
        .when('/', { template: htmlHome })
        .when('/about', { template: htmlAbout })
        .when('/services', { template: htmlServices })
        .when('/projects', { template: htmlProjects })
        .otherwise({ redirectTo: '/' });
});