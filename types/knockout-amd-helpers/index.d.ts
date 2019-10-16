// Type definitions for knockout-amd-helpers
// Project: https://github.com/rniemeyer/knockout-amd-helpers
// Definitions by: David Sichau <https://github.com/DavidSichau>
//                 Michael Kriese <https://github.com/viceice>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.2

/// <reference types="knockout" />

interface KnockoutAMDModule extends ko.BindingHandler {
    baseDir: string;
    initializer: string;
    disposeMethod: string;
    templateProperty: string;
}

interface KnockoutAMDTemplate {
    defaultPath: string;
    defaultSuffix: string;
    defaultRequireTextPluginName: string;
}


declare namespace ko {
    interface BindingHandlers {
        module: KnockoutAMDModule;
    }
    const amdTemplateEngine: KnockoutAMDTemplate;
}


declare module 'knockout-amd-helpers' {
    export = ko;
}
