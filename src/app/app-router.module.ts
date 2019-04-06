import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

// component
import { TableComponent } from './pages/table/table.component';
import { ItemComponent } from './pages/item/item.component';

const routes: Routes = [
	{ path: '', component: TableComponent },
	{ path: 'item', component: ItemComponent },
];

@NgModule({
	imports: [ RouterModule.forRoot(routes, { enableTracing: false, useHash: false }) ],
	exports: [ RouterModule ]
})
export class AppRouterModule {}
