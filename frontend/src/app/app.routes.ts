import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "",
        loadComponent: () => import("./pages/equipment-list-page/equipment-list-page").then(m => m.EquipmentListPage)
    }
];