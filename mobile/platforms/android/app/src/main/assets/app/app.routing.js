"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var login_component_1 = require("./pages/login/login.component");
var map_component_1 = require("./pages/map/map.component");
var zone_component_1 = require("./pages/zone/zone.component");
var room_component_1 = require("./pages/room/room.component");
var inventory_component_1 = require("./pages/inventory/inventory.component");
exports.routes = [
    { path: "", component: login_component_1.LoginComponent },
    { path: "map", component: map_component_1.MapComponent },
    { path: "zone", component: zone_component_1.ZoneComponent },
    { path: "room/:id", component: room_component_1.RoomComponent },
    { path: "inventory", component: inventory_component_1.InventoryComponent }
];
exports.navigatableComponents = [
    login_component_1.LoginComponent,
    map_component_1.MapComponent,
    zone_component_1.ZoneComponent,
    room_component_1.RoomComponent,
    inventory_component_1.InventoryComponent
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlFQUErRDtBQUMvRCwyREFBeUQ7QUFDekQsOERBQTREO0FBQzVELDhEQUE0RDtBQUM1RCw2RUFBMkU7QUFFOUQsUUFBQSxNQUFNLEdBQUc7SUFDcEIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxnQ0FBYyxFQUFFO0lBQ3ZDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsNEJBQVksRUFBRTtJQUN4QyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLDhCQUFhLEVBQUU7SUFDMUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSw4QkFBYSxFQUFFO0lBQzlDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsd0NBQWtCLEVBQUM7Q0FDcEQsQ0FBQztBQUVXLFFBQUEscUJBQXFCLEdBQUc7SUFDbkMsZ0NBQWM7SUFDZCw0QkFBWTtJQUNaLDhCQUFhO0lBQ2IsOEJBQWE7SUFDYix3Q0FBa0I7Q0FDbkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL21hcC9tYXAuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFpvbmVDb21wb25lbnQgfSBmcm9tIFwiLi9wYWdlcy96b25lL3pvbmUuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFJvb21Db21wb25lbnQgfSBmcm9tIFwiLi9wYWdlcy9yb29tL3Jvb20uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEludmVudG9yeUNvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL2ludmVudG9yeS9pbnZlbnRvcnkuY29tcG9uZW50XCI7XHJcblxyXG5leHBvcnQgY29uc3Qgcm91dGVzID0gW1xyXG4gIHsgcGF0aDogXCJcIiwgY29tcG9uZW50OiBMb2dpbkNvbXBvbmVudCB9LFxyXG4gIHsgcGF0aDogXCJtYXBcIiwgY29tcG9uZW50OiBNYXBDb21wb25lbnQgfSxcclxuICB7IHBhdGg6IFwiem9uZVwiLCBjb21wb25lbnQ6IFpvbmVDb21wb25lbnQgfSxcclxuICB7IHBhdGg6IFwicm9vbS86aWRcIiwgY29tcG9uZW50OiBSb29tQ29tcG9uZW50IH0sXHJcbiAgeyBwYXRoOiBcImludmVudG9yeVwiLCBjb21wb25lbnQ6IEludmVudG9yeUNvbXBvbmVudH1cclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBuYXZpZ2F0YWJsZUNvbXBvbmVudHMgPSBbXHJcbiAgTG9naW5Db21wb25lbnQsXHJcbiAgTWFwQ29tcG9uZW50LFxyXG4gIFpvbmVDb21wb25lbnQsXHJcbiAgUm9vbUNvbXBvbmVudCxcclxuICBJbnZlbnRvcnlDb21wb25lbnRcclxuXTsiXX0=