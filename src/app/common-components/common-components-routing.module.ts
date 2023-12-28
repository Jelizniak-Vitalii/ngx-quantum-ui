import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonComponentsComponent } from './common-components.component';

const routes: Route[] = [
  {
    path: '',
    component: CommonComponentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommonComponentsRoutingModule {}
