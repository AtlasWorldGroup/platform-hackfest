"use strict";
var core_1 = require("@angular/core");
var platform_1 = require("nativescript-angular/platform");
var shared_module_1 = require("../../shared/shared.module");
var pushView_component_1 = require("./pushView.component");
var forms_1 = require("nativescript-angular/forms");
var router_1 = require("nativescript-angular/router");
// START_CUSTOM_CODE_pushViewModelModuleImports
// END_CUSTOM_CODE_pushViewModelModuleImports
/// module additional imports
var common = require("./shared");
var PushViewModule = (function () {
    function PushViewModule() {
    }
    PushViewModule = __decorate([
        core_1.NgModule({
            imports: [
                // START_CUSTOM_CODE_pushViewModelModuleImportDeclarations
                // END_CUSTOM_CODE_pushViewModelModuleImportDeclarations
                router_1.NativeScriptRouterModule,
                forms_1.NativeScriptFormsModule,
                /// module imports declaration
                platform_1.NativeScriptModule,
                shared_module_1.SharedModule
            ],
            declarations: [
                /// module declarations
                pushView_component_1.PushViewComponent
            ],
            exports: [
                /// module exports
                pushView_component_1.PushViewComponent
            ],
            providers: [
                // START_CUSTOM_CODE_pushViewModelModuleProviders
                // END_CUSTOM_CODE_pushViewModelModuleProviders
                /// module providers
                common.PushViewService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], PushViewModule);
    return PushViewModule;
}());
exports.PushViewModule = PushViewModule;
//# sourceMappingURL=pushView.module.js.map