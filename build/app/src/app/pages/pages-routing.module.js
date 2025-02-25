"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagesRoutingModule = void 0;
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const layout_component_1 = require("../@shared/layout/layout.component");
const dashboard_component_1 = require("./dashboard/dashboard.component");
const users_component_1 = require("./users/users.component");
const routes = [
    {
        path: "",
        component: layout_component_1.LayoutComponent,
        children: [
            {
                path: "dashboard",
                component: dashboard_component_1.DashboardComponent,
            },
            {
                path: "users",
                component: users_component_1.UsersComponent,
            },
        ],
    },
];
let PagesRoutingModule = class PagesRoutingModule {
};
PagesRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule],
    })
], PagesRoutingModule);
exports.PagesRoutingModule = PagesRoutingModule;
//# sourceMappingURL=pages-routing.module.js.map