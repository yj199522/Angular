import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ActiveTaskComponent } from './components/active-task/active-task.component';
import { CompleteTaskComponent } from './components/complete-task/complete-task.component';
import { WaitlistTaskComponent } from './components/waitlist-task/waitlist-task.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { EditTaskComponent } from './components/edit-task/edit-task.component';

const routes: Routes = [{
  path: '', component: AppComponent
}, {
  path: 'active', component: ActiveTaskComponent
}, {
  path: 'complete', component: CompleteTaskComponent
}, {
  path: 'waitlist', component: WaitlistTaskComponent
}, {
  path: 'add', component: AddTaskComponent
}, {
  path: 'edit', component: EditTaskComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
