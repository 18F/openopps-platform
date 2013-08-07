// Globals and Constants
window.app          = {};
app.events          = {};
window.UserLoggedIn = false;

// Require setup and config
require.config({
    paths: {
        'jquery': '../vendor/jquery',
        'underscore': '../vendor/underscore',
        'backbone': '../vendor/backbone',
        'router': 'router'
    }
});

// Require injection and beginning of backbone
define([
    'jquery',
    'underscore',
    'backbone',
    'router'
], function ($, _, Backbone, Router) {

    // Commonly used 'global' methods and jQuery addons 

    // Extend the backbone.events object and mixin our own for customization
    _.extend(app.events, Backbone.Events);

    // Backbone entry point
    Router.initialize();
});