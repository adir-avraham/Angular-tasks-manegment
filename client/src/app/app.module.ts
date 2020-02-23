import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TasksPageComponent } from './components/tasks-page/tasks-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TasksPageComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
