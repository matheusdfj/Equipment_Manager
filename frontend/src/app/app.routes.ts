import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "",
        loadComponent: () => import("./pages/equipment-list-page/equipment-list-page").then(m => m.EquipmentListPage)
    },
    {
        path:"equipment/:id",
        loadComponent: () => import("./pages/equipment-view-page/equipment-view-page").then(m => m.EquipmentViewPage)
        
    }
];