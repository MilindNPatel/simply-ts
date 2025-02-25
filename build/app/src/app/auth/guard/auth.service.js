"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const core_1 = require("@angular/core");
const rxjs_1 = require("rxjs");
let AuthService = class AuthService {
    constructor() {
        this.currentUserSubject = new rxjs_1.BehaviorSubject(JSON.parse(localStorage.getItem("loginDetail")));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    get currentUserValue() {
        return this.currentUserSubject.value;
    }
    logout() {
        localStorage.removeItem("currentUser");
        this.currentUserSubject.next(null);
    }
};
AuthService = __decorate([
    core_1.Injectable({
        providedIn: "root",
    })
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map