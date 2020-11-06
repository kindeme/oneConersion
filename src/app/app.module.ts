import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TodoModule} from './todo/todo.module';
import { HoverEffectPipe } from './hover-effect.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HoverEffectPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TodoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
