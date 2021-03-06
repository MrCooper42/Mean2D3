import { Component } from "@angular/core";
import { ErrorService } from "./error.service";
export var ErrorComponent = (function () {
    function ErrorComponent(errorService) {
        this.errorService = errorService;
        this.display = 'none';
    }
    ErrorComponent.prototype.onErrorHandled = function () {
        this.display = 'none';
    };
    ErrorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.errorService.errorOccured
            .subscribe(function (error) {
            _this.error = error;
            _this.display = 'block';
        });
    };
    ErrorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-error',
                    templateUrl: './error.component.html',
                    styles: ["\n      .backdrop {\n        background-color: rgba(0,0,0,0.6);\n        postition: fixed;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100vh;\n      }\n    "]
                },] },
    ];
    /** @nocollapse */
    ErrorComponent.ctorParameters = [
        { type: ErrorService, },
    ];
    return ErrorComponent;
}());
//# sourceMappingURL=error.component.js.map