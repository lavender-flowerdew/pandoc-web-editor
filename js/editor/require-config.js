requirejs.config({
    baseUrl: '../js/lib',
    paths: {
        editor: '../editor',
        'admin': '../sb-admin',
        'easing': '../../vendor/jquery-easing/jquery.easing.min',
        jquery: 'jquery-1.11.2',
        underscore: 'underscore',
        backbone: 'backbone/backbone',
        templates: '../templates',
        content: '../content',
        tether: 'tether/tether',
        bootstrap: 'bootstrap/bootstrap',
        marionette: 'backbone/marionette',
        'bootstrap.select': 'bootstrap/bootstrap-select',
        'backbone.wreqr': 'backbone/wreqr',
        'backbone.babysitter': 'backbone/babysitter',
        'cookies': 'jquery/cookies',
        'bootstrap.tagsinput': 'bootstrap/bootstrap-tagsinput',
        'jquery.webshim': 'webshim/polyfiller',
        'cm': '../lib/cmirror'
    },
    shim: {
        'underscore': {
            exports: '_'
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'marionette': {
            deps: ['backbone', 'backbone.wreqr', 'backbone.babysitter'],
        },
        'markdown': {
            exports: 'markdown'
        },
        'bootstrap': {
            deps: ['jquery', 'tether']
        },
        'bootstrap.select': {
            deps: ['jquery', 'bootstrap']
        },
        'bootstrap.tagsinput': {
            deps: ['jquery', 'bootstrap']
        },
        'cookies': {
            deps: ['jquery']
        },
        'jquery.webshim': {
            deps: ['jquery']
        },
        'tether': {
          deps: ['jquery','easing','admin'],
          exports: 'Tether'
        }
    }
});
