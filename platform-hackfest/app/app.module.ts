import {
    NgModule
}
from "@angular/core";

import {
    NativeScriptModule
}
from "nativescript-angular/platform";
import {
    NativeScriptRouterModule
}
from "nativescript-angular/router";
/// additional imports

import {
    appRoutes
}
from "./app.routes";
import {
    AppComponent
}
from "./app.component";

/// additional required modules

import {
    TabstripMenuModule as NavigationModule
}
from "./navigation/tabstrip/tabstrip.module";

@
NgModule({
    imports: [
        NativeScriptModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(appRoutes),
        NavigationModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}