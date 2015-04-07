/**
 * Login view model
 */

var app = app || {};

app.Login = (function () {
    'use strict';

    var loginViewModel = (function () {

        var $loginUsername;
        var $loginPassword;

        var init = function () {
            $loginUsername = $('#loginUsername');
            $loginPassword = $('#loginPassword');
        };

        var show = function () {
            $loginUsername.val('');
            $loginPassword.val('');
        };

        var getYear = function () {
            var currentTime = new Date();
            return currentTime.getFullYear();
        };

        // Authenticate to use Backend Services as a particular user
        var login = function () {

            var username = $loginUsername.val();
            var password = $loginPassword.val();

            // Authenticate using the username and password
            /*
            app.everlive.Users.login(username, password)
            .then(function () {
                // EQATEC analytics monitor - track login type
                if (isAnalytics) {
                    analytics.Start();
                    analytics.TrackFeature('Login.Regular');
                }

                return app.Users.load();
            })
            .then(function () {

                app.mobileApp.navigate('views/activitiesView.html');
            })
            .then(null,
                  function (err) {
                      app.showError(err.message);
                  }
            );
            */
        };

        // Authenticate using Facebook credentials
        var loginWithFacebook = function() {

        };

        var loginWithGoogle = function () {

        };

        var loginWithLiveID = function () {

        };

        var loginWithADSF = function () {

        };

        return {
            init: init,
            show: show,
            getYear: app.getYear,
            login: login,
            loginWithFacebook: loginWithFacebook,
            loginWithGoogle: loginWithGoogle,
            loginWithLiveID: loginWithLiveID,
            loginWithADSF: loginWithADSF
        };

    }());

    return loginViewModel;

}());

