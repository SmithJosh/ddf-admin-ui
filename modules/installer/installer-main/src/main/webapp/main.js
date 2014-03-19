/*global console, require, window */
/*jslint nomen:false, -W064 */

(function () {
    'use strict';

    require(['config'], function () {
        require([
            'jquery',
            'backbone',
            'marionette',
            'icanhaz',
            'js/application',
            'js/modules/app.module',
            'js/HandlebarsHelpers',
            'modelbinder',
            'bootstrap'

        ], function ($, Backbone, Marionette, ich, Application) {

            var app = Application.App;

            Marionette.Renderer.render = function (template, data) {
                if(!template){return '';}
                return ich[template](data);
            };

            // Start up the main Application Router
            app.addInitializer(function() {
                app.router = new Application.Router();
            });

            // Once the application has been initialized (i.e. all initializers have completed), start up
            // Backbone.history.
            app.on('initialize:after', function() {
                Backbone.history.start();
                console.log('application running');
            });

            if(window){
                // make ddf object available on window.  Makes debugging in chrome console much easier
                window.app = app;
            }

            // Actually start up the application.
            app.start();
        });
    });
}());