"use strict";
var core_1 = require("@angular/core");
var common = require("./shared");
var PushNotifications = require("nativescript-push-notifications");
var dialogs = require("ui/dialogs");
var HomeViewComponent = (function () {
    /// component additional properties
    function HomeViewComponent(_service) {
        var _this = this;
        this._service = _service;
        this.id = '';
        var settings = {
            senderID: '960612642914',
            badge: true,
            sound: true,
            alert: true,
            interactiveSettings: {
                actions: [{
                        identifier: 'READ_IDENTIFIER',
                        title: 'Read',
                        activationMode: 'foreground',
                        destructive: false,
                        authenticationRequired: true
                    }, {
                        identifier: 'CANCEL_IDENTIFIER',
                        title: 'Cancel',
                        activationMode: 'foreground',
                        destructive: true,
                        authenticationRequired: true
                    }],
                categories: [{
                        identifier: 'READ_CATEGORY',
                        actionsForDefaultContext: ['READ_IDENTIFIER', 'CANCEL_IDENTIFIER'],
                        actionsForMinimalContext: ['READ_IDENTIFIER', 'CANCEL_IDENTIFIER']
                    }]
            },
            notificationCallbackIOS: function (data) {
                console.log('DATA: ' + JSON.stringify(data));
            },
            notificationCallbackAndroid: function (message, data, notification) {
                console.log('MESSAGE: ' + JSON.stringify(message));
                console.log("data: " + data);
                console.log('NOTIFICATION: ' + JSON.stringify(notification));
                dialogs.alert(message).then(function () {
                    console.log("dialog closed");
                });
            }
        };
        PushNotifications.register(settings, function (data) {
            console.log('REGISTRATION ID: ' + JSON.stringify(data));
            _this.id = data;
            PushNotifications.onMessageReceived(settings.notificationCallbackAndroid);
        }, function (error) {
            console.log(error);
        });
    }
    Object.defineProperty(HomeViewComponent.prototype, "title", {
        get: function () {
            var result = "Home View";
            return result;
        },
        enumerable: true,
        configurable: true
    });
    HomeViewComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "ns-homeView",
            templateUrl: "homeView.component.html"
        }), 
        __metadata('design:paramtypes', [common.HomeViewService])
    ], HomeViewComponent);
    return HomeViewComponent;
}());
exports.HomeViewComponent = HomeViewComponent;
//# sourceMappingURL=homeView.component.js.map