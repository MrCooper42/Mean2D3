/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './authentication.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from './auth.service';
import * as import9 from '@angular/core/src/metadata/view';
import * as import10 from '@angular/core/src/linker/component_factory';
import * as import11 from '@angular/router/src/directives/router_link_active';
import * as import12 from '@angular/core/src/linker/query_list';
import * as import13 from '@angular/router/src/directives/router_link';
import * as import14 from '@angular/common/src/directives/ng_if';
import * as import15 from '@angular/router/src/directives/router_outlet';
import * as import16 from '@angular/router/src/router';
import * as import17 from '@angular/core/src/linker/element_ref';
import * as import18 from '@angular/router/src/router_state';
import * as import19 from '@angular/common/src/location/location_strategy';
import * as import20 from '@angular/core/src/linker/template_ref';
import * as import21 from '@angular/router/src/router_outlet_map';
import * as import22 from '@angular/core/src/linker/component_factory_resolver';
import * as import23 from '@angular/core/src/security';
var renderType_AuthenticationComponent_Host = null;
var _View_AuthenticationComponent_Host0 = (function (_super) {
    __extends(_View_AuthenticationComponent_Host0, _super);
    function _View_AuthenticationComponent_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_AuthenticationComponent_Host0, renderType_AuthenticationComponent_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_AuthenticationComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('app-authentication', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_AuthenticationComponent0(this.viewUtils, this.injector(0), this._appEl_0);
        this._AuthenticationComponent_0_4 = new import3.AuthenticationComponent(this.parentInjector.get(import8.AuthService));
        this._appEl_0.initComponent(this._AuthenticationComponent_0_4, [], compView_0);
        compView_0.create(this._AuthenticationComponent_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_AuthenticationComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.AuthenticationComponent) && (0 === requestNodeIndex))) {
            return this._AuthenticationComponent_0_4;
        }
        return notFoundResult;
    };
    return _View_AuthenticationComponent_Host0;
}(import1.AppView));
function viewFactory_AuthenticationComponent_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_AuthenticationComponent_Host === null)) {
        (renderType_AuthenticationComponent_Host = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.None, [], {}));
    }
    return new _View_AuthenticationComponent_Host0(viewUtils, parentInjector, declarationEl);
}
export var AuthenticationComponentNgFactory = new import10.ComponentFactory('app-authentication', viewFactory_AuthenticationComponent_Host0, import3.AuthenticationComponent);
var styles_AuthenticationComponent = [];
var renderType_AuthenticationComponent = null;
var _View_AuthenticationComponent0 = (function (_super) {
    __extends(_View_AuthenticationComponent0, _super);
    function _View_AuthenticationComponent0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_AuthenticationComponent0, renderType_AuthenticationComponent, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_AuthenticationComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._text_0 = this.renderer.createText(parentRenderNode, '\n    ', null);
        this._el_1 = this.renderer.createElement(parentRenderNode, 'header', null);
        this.renderer.setElementAttribute(this._el_1, 'class', 'row spacing');
        this._text_2 = this.renderer.createText(this._el_1, '\n      ', null);
        this._el_3 = this.renderer.createElement(this._el_1, 'nav', null);
        this.renderer.setElementAttribute(this._el_3, 'class', 'col-md-8 col-md-offset-2');
        this._text_4 = this.renderer.createText(this._el_3, '\n        ', null);
        this._el_5 = this.renderer.createElement(this._el_3, 'ul', null);
        this.renderer.setElementAttribute(this._el_5, 'class', 'nav nav-tabs');
        this._text_6 = this.renderer.createText(this._el_5, '\n          ', null);
        this._el_7 = this.renderer.createElement(this._el_5, 'li', null);
        this.renderer.setElementAttribute(this._el_7, 'routerLinkActive', 'active');
        this._RouterLinkActive_7_3 = new import11.RouterLinkActive(this.parentInjector.get(import16.Router), new import17.ElementRef(this._el_7), this.renderer);
        this._query_RouterLink_7_0 = new import12.QueryList();
        this._query_RouterLinkWithHref_7_1 = new import12.QueryList();
        this._el_8 = this.renderer.createElement(this._el_7, 'a', null);
        this._RouterLinkWithHref_8_3 = new import13.RouterLinkWithHref(this.parentInjector.get(import16.Router), this.parentInjector.get(import18.ActivatedRoute), this.parentInjector.get(import19.LocationStrategy));
        this._text_9 = this.renderer.createText(this._el_8, 'Signup', null);
        this._text_10 = this.renderer.createText(this._el_5, '\n          ', null);
        this._anchor_11 = this.renderer.createTemplateAnchor(this._el_5, null);
        this._appEl_11 = new import2.AppElement(11, 5, this, this._anchor_11);
        this._TemplateRef_11_5 = new import20.TemplateRef_(this._appEl_11, viewFactory_AuthenticationComponent1);
        this._NgIf_11_6 = new import14.NgIf(this._appEl_11.vcRef, this._TemplateRef_11_5);
        this._text_12 = this.renderer.createText(this._el_5, '\n          ', null);
        this._anchor_13 = this.renderer.createTemplateAnchor(this._el_5, null);
        this._appEl_13 = new import2.AppElement(13, 5, this, this._anchor_13);
        this._TemplateRef_13_5 = new import20.TemplateRef_(this._appEl_13, viewFactory_AuthenticationComponent2);
        this._NgIf_13_6 = new import14.NgIf(this._appEl_13.vcRef, this._TemplateRef_13_5);
        this._text_14 = this.renderer.createText(this._el_5, '\n        ', null);
        this._text_15 = this.renderer.createText(this._el_3, '\n      ', null);
        this._text_16 = this.renderer.createText(this._el_1, '\n    ', null);
        this._text_17 = this.renderer.createText(parentRenderNode, '\n    ', null);
        this._el_18 = this.renderer.createElement(parentRenderNode, 'div', null);
        this.renderer.setElementAttribute(this._el_18, 'class', 'row spacing');
        this._text_19 = this.renderer.createText(this._el_18, '\n      ', null);
        this._el_20 = this.renderer.createElement(this._el_18, 'router-outlet', null);
        this._appEl_20 = new import2.AppElement(20, 18, this, this._el_20);
        this._RouterOutlet_20_5 = new import15.RouterOutlet(this.parentInjector.get(import21.RouterOutletMap), this._appEl_20.vcRef, this.parentInjector.get(import22.ComponentFactoryResolver), null);
        this._text_21 = this.renderer.createText(this._el_18, '\n    ', null);
        this._text_22 = this.renderer.createText(parentRenderNode, '\n  ', null);
        this._expr_0 = import7.UNINITIALIZED;
        var disposable_0 = this.renderer.listen(this._el_8, 'click', this.eventHandler(this._handle_click_8_0.bind(this)));
        this._arr_0 = import4.pureProxy1(function (p0) {
            return [p0];
        });
        this._expr_2 = import7.UNINITIALIZED;
        this._expr_3 = import7.UNINITIALIZED;
        this._expr_4 = import7.UNINITIALIZED;
        this._expr_5 = import7.UNINITIALIZED;
        this.init([], [
            this._text_0,
            this._el_1,
            this._text_2,
            this._el_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._el_7,
            this._el_8,
            this._text_9,
            this._text_10,
            this._anchor_11,
            this._text_12,
            this._anchor_13,
            this._text_14,
            this._text_15,
            this._text_16,
            this._text_17,
            this._el_18,
            this._text_19,
            this._el_20,
            this._text_21,
            this._text_22
        ], [disposable_0], []);
        return null;
    };
    _View_AuthenticationComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import13.RouterLinkWithHref) && ((8 <= requestNodeIndex) && (requestNodeIndex <= 9)))) {
            return this._RouterLinkWithHref_8_3;
        }
        if (((token === import11.RouterLinkActive) && ((7 <= requestNodeIndex) && (requestNodeIndex <= 9)))) {
            return this._RouterLinkActive_7_3;
        }
        if (((token === import20.TemplateRef) && (11 === requestNodeIndex))) {
            return this._TemplateRef_11_5;
        }
        if (((token === import14.NgIf) && (11 === requestNodeIndex))) {
            return this._NgIf_11_6;
        }
        if (((token === import20.TemplateRef) && (13 === requestNodeIndex))) {
            return this._TemplateRef_13_5;
        }
        if (((token === import14.NgIf) && (13 === requestNodeIndex))) {
            return this._NgIf_13_6;
        }
        if (((token === import15.RouterOutlet) && (20 === requestNodeIndex))) {
            return this._RouterOutlet_20_5;
        }
        return notFoundResult;
    };
    _View_AuthenticationComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var changes = null;
        changes = null;
        var currVal_0 = 'active';
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this._RouterLinkActive_7_3.routerLinkActive = currVal_0;
            if ((changes === null)) {
                (changes = {});
            }
            changes['routerLinkActive'] = new import7.SimpleChange(this._expr_0, currVal_0);
            this._expr_0 = currVal_0;
        }
        if ((changes !== null)) {
            this._RouterLinkActive_7_3.ngOnChanges(changes);
        }
        changes = null;
        var currVal_2 = this._arr_0('signup');
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this._RouterLinkWithHref_8_3.routerLink = currVal_2;
            if ((changes === null)) {
                (changes = {});
            }
            changes['routerLink'] = new import7.SimpleChange(this._expr_2, currVal_2);
            this._expr_2 = currVal_2;
        }
        if ((changes !== null)) {
            this._RouterLinkWithHref_8_3.ngOnChanges(changes);
        }
        var currVal_4 = !this.context.isLoggedIn();
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this._NgIf_11_6.ngIf = currVal_4;
            this._expr_4 = currVal_4;
        }
        var currVal_5 = this.context.isLoggedIn();
        if (import4.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            this._NgIf_13_6.ngIf = currVal_5;
            this._expr_5 = currVal_5;
        }
        this.detectContentChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if (this._query_RouterLink_7_0.dirty) {
                this._query_RouterLink_7_0.reset([]);
                this._RouterLinkActive_7_3.links = this._query_RouterLink_7_0;
                this._query_RouterLink_7_0.notifyOnChanges();
            }
            if (this._query_RouterLinkWithHref_7_1.dirty) {
                this._query_RouterLinkWithHref_7_1.reset([this._RouterLinkWithHref_8_3]);
                this._RouterLinkActive_7_3.linksWithHrefs = this._query_RouterLinkWithHref_7_1;
                this._query_RouterLinkWithHref_7_1.notifyOnChanges();
            }
            if ((this.numberOfChecks === 0)) {
                this._RouterLinkActive_7_3.ngAfterContentInit();
            }
        }
        var currVal_3 = this._RouterLinkWithHref_8_3.href;
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this.renderer.setElementProperty(this._el_8, 'href', this.viewUtils.sanitizer.sanitize(import23.SecurityContext.URL, currVal_3));
            this._expr_3 = currVal_3;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_AuthenticationComponent0.prototype.destroyInternal = function () {
        this._RouterLinkWithHref_8_3.ngOnDestroy();
        this._RouterLinkActive_7_3.ngOnDestroy();
        this._RouterOutlet_20_5.ngOnDestroy();
    };
    _View_AuthenticationComponent0.prototype._handle_click_8_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._RouterLinkWithHref_8_3.onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
        return (true && pd_0);
    };
    return _View_AuthenticationComponent0;
}(import1.AppView));
export function viewFactory_AuthenticationComponent0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_AuthenticationComponent === null)) {
        (renderType_AuthenticationComponent = viewUtils.createRenderComponentType('C:/Users/Tippy/Desktop/Projects/MEAN2D3/assets/app/auth/authentication.component.ts class AuthenticationComponent - inline template', 0, import9.ViewEncapsulation.None, styles_AuthenticationComponent, {}));
    }
    return new _View_AuthenticationComponent0(viewUtils, parentInjector, declarationEl);
}
var _View_AuthenticationComponent1 = (function (_super) {
    __extends(_View_AuthenticationComponent1, _super);
    function _View_AuthenticationComponent1(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_AuthenticationComponent1, renderType_AuthenticationComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_AuthenticationComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'li', null);
        this.renderer.setElementAttribute(this._el_0, 'routerLinkActive', 'active');
        this._RouterLinkActive_0_3 = new import11.RouterLinkActive(this.parent.parentInjector.get(import16.Router), new import17.ElementRef(this._el_0), this.renderer);
        this._query_RouterLink_0_0 = new import12.QueryList();
        this._query_RouterLinkWithHref_0_1 = new import12.QueryList();
        this._el_1 = this.renderer.createElement(this._el_0, 'a', null);
        this._RouterLinkWithHref_1_3 = new import13.RouterLinkWithHref(this.parent.parentInjector.get(import16.Router), this.parent.parentInjector.get(import18.ActivatedRoute), this.parent.parentInjector.get(import19.LocationStrategy));
        this._text_2 = this.renderer.createText(this._el_1, 'Signin', null);
        this._expr_0 = import7.UNINITIALIZED;
        var disposable_0 = this.renderer.listen(this._el_1, 'click', this.eventHandler(this._handle_click_1_0.bind(this)));
        this._arr_0 = import4.pureProxy1(function (p0) {
            return [p0];
        });
        this._expr_2 = import7.UNINITIALIZED;
        this._expr_3 = import7.UNINITIALIZED;
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._el_1,
            this._text_2
        ], [disposable_0], []);
        return null;
    };
    _View_AuthenticationComponent1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import13.RouterLinkWithHref) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 2)))) {
            return this._RouterLinkWithHref_1_3;
        }
        if (((token === import11.RouterLinkActive) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 2)))) {
            return this._RouterLinkActive_0_3;
        }
        return notFoundResult;
    };
    _View_AuthenticationComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        var changes = null;
        changes = null;
        var currVal_0 = 'active';
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this._RouterLinkActive_0_3.routerLinkActive = currVal_0;
            if ((changes === null)) {
                (changes = {});
            }
            changes['routerLinkActive'] = new import7.SimpleChange(this._expr_0, currVal_0);
            this._expr_0 = currVal_0;
        }
        if ((changes !== null)) {
            this._RouterLinkActive_0_3.ngOnChanges(changes);
        }
        changes = null;
        var currVal_2 = this._arr_0('signin');
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this._RouterLinkWithHref_1_3.routerLink = currVal_2;
            if ((changes === null)) {
                (changes = {});
            }
            changes['routerLink'] = new import7.SimpleChange(this._expr_2, currVal_2);
            this._expr_2 = currVal_2;
        }
        if ((changes !== null)) {
            this._RouterLinkWithHref_1_3.ngOnChanges(changes);
        }
        this.detectContentChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if (this._query_RouterLink_0_0.dirty) {
                this._query_RouterLink_0_0.reset([]);
                this._RouterLinkActive_0_3.links = this._query_RouterLink_0_0;
                this._query_RouterLink_0_0.notifyOnChanges();
            }
            if (this._query_RouterLinkWithHref_0_1.dirty) {
                this._query_RouterLinkWithHref_0_1.reset([this._RouterLinkWithHref_1_3]);
                this._RouterLinkActive_0_3.linksWithHrefs = this._query_RouterLinkWithHref_0_1;
                this._query_RouterLinkWithHref_0_1.notifyOnChanges();
            }
            if ((this.numberOfChecks === 0)) {
                this._RouterLinkActive_0_3.ngAfterContentInit();
            }
        }
        var currVal_3 = this._RouterLinkWithHref_1_3.href;
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this.renderer.setElementProperty(this._el_1, 'href', this.viewUtils.sanitizer.sanitize(import23.SecurityContext.URL, currVal_3));
            this._expr_3 = currVal_3;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_AuthenticationComponent1.prototype.destroyInternal = function () {
        this._RouterLinkWithHref_1_3.ngOnDestroy();
        this._RouterLinkActive_0_3.ngOnDestroy();
    };
    _View_AuthenticationComponent1.prototype._handle_click_1_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._RouterLinkWithHref_1_3.onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
        return (true && pd_0);
    };
    return _View_AuthenticationComponent1;
}(import1.AppView));
function viewFactory_AuthenticationComponent1(viewUtils, parentInjector, declarationEl) {
    return new _View_AuthenticationComponent1(viewUtils, parentInjector, declarationEl);
}
var _View_AuthenticationComponent2 = (function (_super) {
    __extends(_View_AuthenticationComponent2, _super);
    function _View_AuthenticationComponent2(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_AuthenticationComponent2, renderType_AuthenticationComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_AuthenticationComponent2.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'li', null);
        this.renderer.setElementAttribute(this._el_0, 'routerLinkActive', 'active');
        this._RouterLinkActive_0_3 = new import11.RouterLinkActive(this.parent.parentInjector.get(import16.Router), new import17.ElementRef(this._el_0), this.renderer);
        this._query_RouterLink_0_0 = new import12.QueryList();
        this._query_RouterLinkWithHref_0_1 = new import12.QueryList();
        this._el_1 = this.renderer.createElement(this._el_0, 'a', null);
        this._RouterLinkWithHref_1_3 = new import13.RouterLinkWithHref(this.parent.parentInjector.get(import16.Router), this.parent.parentInjector.get(import18.ActivatedRoute), this.parent.parentInjector.get(import19.LocationStrategy));
        this._text_2 = this.renderer.createText(this._el_1, 'Logout', null);
        this._expr_0 = import7.UNINITIALIZED;
        var disposable_0 = this.renderer.listen(this._el_1, 'click', this.eventHandler(this._handle_click_1_0.bind(this)));
        this._arr_0 = import4.pureProxy1(function (p0) {
            return [p0];
        });
        this._expr_2 = import7.UNINITIALIZED;
        this._expr_3 = import7.UNINITIALIZED;
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._el_1,
            this._text_2
        ], [disposable_0], []);
        return null;
    };
    _View_AuthenticationComponent2.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import13.RouterLinkWithHref) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 2)))) {
            return this._RouterLinkWithHref_1_3;
        }
        if (((token === import11.RouterLinkActive) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 2)))) {
            return this._RouterLinkActive_0_3;
        }
        return notFoundResult;
    };
    _View_AuthenticationComponent2.prototype.detectChangesInternal = function (throwOnChange) {
        var changes = null;
        changes = null;
        var currVal_0 = 'active';
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this._RouterLinkActive_0_3.routerLinkActive = currVal_0;
            if ((changes === null)) {
                (changes = {});
            }
            changes['routerLinkActive'] = new import7.SimpleChange(this._expr_0, currVal_0);
            this._expr_0 = currVal_0;
        }
        if ((changes !== null)) {
            this._RouterLinkActive_0_3.ngOnChanges(changes);
        }
        changes = null;
        var currVal_2 = this._arr_0('logout');
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this._RouterLinkWithHref_1_3.routerLink = currVal_2;
            if ((changes === null)) {
                (changes = {});
            }
            changes['routerLink'] = new import7.SimpleChange(this._expr_2, currVal_2);
            this._expr_2 = currVal_2;
        }
        if ((changes !== null)) {
            this._RouterLinkWithHref_1_3.ngOnChanges(changes);
        }
        this.detectContentChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if (this._query_RouterLink_0_0.dirty) {
                this._query_RouterLink_0_0.reset([]);
                this._RouterLinkActive_0_3.links = this._query_RouterLink_0_0;
                this._query_RouterLink_0_0.notifyOnChanges();
            }
            if (this._query_RouterLinkWithHref_0_1.dirty) {
                this._query_RouterLinkWithHref_0_1.reset([this._RouterLinkWithHref_1_3]);
                this._RouterLinkActive_0_3.linksWithHrefs = this._query_RouterLinkWithHref_0_1;
                this._query_RouterLinkWithHref_0_1.notifyOnChanges();
            }
            if ((this.numberOfChecks === 0)) {
                this._RouterLinkActive_0_3.ngAfterContentInit();
            }
        }
        var currVal_3 = this._RouterLinkWithHref_1_3.href;
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this.renderer.setElementProperty(this._el_1, 'href', this.viewUtils.sanitizer.sanitize(import23.SecurityContext.URL, currVal_3));
            this._expr_3 = currVal_3;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_AuthenticationComponent2.prototype.destroyInternal = function () {
        this._RouterLinkWithHref_1_3.ngOnDestroy();
        this._RouterLinkActive_0_3.ngOnDestroy();
    };
    _View_AuthenticationComponent2.prototype._handle_click_1_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._RouterLinkWithHref_1_3.onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
        return (true && pd_0);
    };
    return _View_AuthenticationComponent2;
}(import1.AppView));
function viewFactory_AuthenticationComponent2(viewUtils, parentInjector, declarationEl) {
    return new _View_AuthenticationComponent2(viewUtils, parentInjector, declarationEl);
}
//# sourceMappingURL=authentication.component.ngfactory.js.map