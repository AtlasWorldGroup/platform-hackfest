import {Component}from "@angular/core";

import * as common from "./shared";
import * as shared from "../../shared";

import * as PushNotifications from "nativescript-push-notifications";
import { Label } from "ui/label";
import { Button } from "ui/button";
import {EventData} from "data/observable";
const dialogs = require("ui/dialogs");

@
    Component({
        moduleId: module.id,
        selector: "ns-homeView",
        templateUrl: "homeView.component.html"
        /// component definitions
    })

export class HomeViewComponent {
    id: string = '';

    get title() {
        let result: string = "Home View";
        return result;
    }

    /// component additional properties
    constructor(private _service: common.HomeViewService) {

        let settings = {
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
            notificationCallbackIOS: data => {
                console.log('DATA: ' + JSON.stringify(data));
            },
            notificationCallbackAndroid: (message, data, notification) => {
                console.log('MESSAGE: ' + JSON.stringify(message));
                console.log(`data: ${data}`);
                console.log('NOTIFICATION: ' + JSON.stringify(notification));
                dialogs.alert(message).then(() => {
                    console.log(`dialog closed`);
                });
            }
        };
        PushNotifications.register(settings, data => {
            console.log('REGISTRATION ID: ' + JSON.stringify(data));
            this.id = data;
            PushNotifications.onMessageReceived(settings.notificationCallbackAndroid);
        }, error => {
            console.log(error);
        });
    }

}