import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "equipment",
        loadComponent: () => import("./pages/equipment-list-page/equipment-list-page").then(m => m.EquipmentListPage)
    }
];