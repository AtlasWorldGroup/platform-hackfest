"use strict";
var core_1 = require("@angular/core");
// START_CUSTOM_CODE_pushViewModelComponentImports
// END_CUSTOM_CODE_pushViewModelComponentImports
/// component additional imports
var common = require("./shared");
var PushViewComponent = (function () {
    /// placeholder for field
    /// component additional properties
    function PushViewComponent(
        // START_CUSTOM_CODE_pushViewModelComponentConstructorDependencies
        // END_CUSTOM_CODE_pushViewModelComponentConstructorDependencies
        /// component constructor dependencies
        _service) {
        // START_CUSTOM_CODE_pushViewModelComponentConstructorMethod
        this._service = _service;
        // END_CUSTOM_CODE_pushViewModelComponentConstructorMethod
        /// placeholder for component constructor
        /// component constructor method
    }
    Object.defineProperty(PushViewComponent.prototype, "title", {
        get: function () {
            var result = "Enable Push";
            /// component custom title
            return result;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PushViewComponent.prototype, "service", {
        // START_CUSTOM_CODE_pushViewModelComponentProperties
        // END_CUSTOM_CODE_pushViewModelComponentProperties
        get: function () {
            return this._service;
        },
        enumerable: true,
        configurable: true
    });
    PushViewComponent.prototype.ngOnInit = function () {
        /// placeholder for component init
        // START_CUSTOM_CODE_pushViewModelComponentOnInit
        // END_CUSTOM_CODE_pushViewModelComponentOnInit
    };
    PushViewComponent.prototype.onConfirm = function () {
        // START_CUSTOM_CODE_pushViewModelComponentOnConfirm
        // END_CUSTOM_CODE_pushViewModelComponentOnConfirm
    };
    PushViewComponent.prototype.onCancel = function () {
        // START_CUSTOM_CODE_pushViewModelComponentOnCancel
        // END_CUSTOM_CODE_pushViewModelComponentOnCancel
    };
    __decorate([
        core_1.ViewChild("name"), 
        __metadata('design:type', Object)
    ], PushViewComponent.prototype, "nameInst", void 0);
    PushViewComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "ns-pushView",
            templateUrl: "pushView.component.html"
        }), 
        __metadata('design:paramtypes', [common.PushViewService])
    ], PushViewComponent);
    return PushViewComponent;
}());
exports.PushViewComponent = PushViewComponent;
//# sourceMappingURL=pushView.component.js.map