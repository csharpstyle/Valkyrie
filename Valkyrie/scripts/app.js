var app = (function (win) {
    'use strict';

    // Global error handling
    var showAlert = function(message) {
        alert(message);
    };

    var showError = function(message) {
        showAlert(message);
    };

    var isNullOrEmpty = function (value) {
        return typeof value === 'undefined' || value === null || value === '';
    };

    var isKeySet = function (key) {
        var regEx = /^\$[A-Z_]+\$$/;
        return !isNullOrEmpty(key) && !regEx.test(key);
    };

    var AppHelper = {
        // Date formatter. Return date in d.m.yyyy format
        formatDate: function (dateString) {

            var months = [
                'Jan', 'Feb', 'Mar',
                'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep',
                'Oct', 'Nov', 'Dec'
            ];
            var date = new Date(dateString);
            var year = date.getFullYear();
            var month = months[ date.getMonth() ];
            var day = date.getDate();

            return month + ' ' + day + ', ' + year;
        },

        // Current user logout
        logout: function () {

        },

        reload: function () {
            if (!window.location.origin) {
              window.location.origin = window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
            }
            window.location.replace(window.location.origin);
        }
    };

    // Initialize KendoUI mobile application
    var mobileApp = new kendo.mobile.Application(document.body, {
        transition: 'slide',
        layout: 'mobile-tabstrip',
        skin: 'flat',
        initial: 'views/loginView.html'
    });

    var getYear = (function () {
        var currentTime = new Date();
        return currentTime.getFullYear();
    }());

    return {
        showAlert: showAlert,
        showError: showError,
        isKeySet: isKeySet,
        mobileApp: mobileApp,
        helper: AppHelper,
        getYear: getYear
    };

}(window));
