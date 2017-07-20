import {
    Component

    , ViewChild, OnInit
    /// component core modules

}
from "@angular/core";

import {
    Observable
}
from "rxjs/Observable";
// START_CUSTOM_CODE_pushViewModelComponentImports

// END_CUSTOM_CODE_pushViewModelComponentImports
/// component additional imports

import * as common from "./shared";
import * as shared from "../../shared";

@
Component({
    moduleId: module.id,
    selector: "ns-pushView",
    templateUrl: "pushView.component.html"
        /// component definitions
})

export class PushViewComponent

implements OnInit
/// component inheritance

{
    get title() {
        let result: string = "Enable Push";

        /// component custom title

        return result;
    }

    // START_CUSTOM_CODE_pushViewModelComponentProperties

    // END_CUSTOM_CODE_pushViewModelComponentProperties

    get service() {
            return this._service;
        }
        /// Add fields instance
@ViewChild("name") nameInst;
        /// placeholder for field
        /// component additional properties

    constructor(

        // START_CUSTOM_CODE_pushViewModelComponentConstructorDependencies

        // END_CUSTOM_CODE_pushViewModelComponentConstructorDependencies

        /// component constructor dependencies

        private _service: common.PushViewService
    ) {

        // START_CUSTOM_CODE_pushViewModelComponentConstructorMethod

        // END_CUSTOM_CODE_pushViewModelComponentConstructorMethod

        /// placeholder for component constructor
        /// component constructor method

    }

    ngOnInit() {

        /// placeholder for component init
        // START_CUSTOM_CODE_pushViewModelComponentOnInit

        // END_CUSTOM_CODE_pushViewModelComponentOnInit
    }

    onConfirm() {

        // START_CUSTOM_CODE_pushViewModelComponentOnConfirm

        // END_CUSTOM_CODE_pushViewModelComponentOnConfirm
    }

    onCancel() {
        // START_CUSTOM_CODE_pushViewModelComponentOnCancel

        // END_CUSTOM_CODE_pushViewModelComponentOnCancel
    }

    /// partial additional methods
    // START_CUSTOM_CODE_pushViewModelComponentAdditionalMethods

    // END_CUSTOM_CODE_pushViewModelComponentAdditionalMethods
    /// component additional methods

}