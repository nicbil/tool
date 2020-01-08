import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CoreModule} from '../core/core.module';
import {RouterModule} from '@angular/router';
import {HeaderModule} from "./header/header.module";
import {FooterModule} from "./footer/footer.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot([{
      path: '',
      pathMatch: 'full',
      redirectTo: '/'
    }]),
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    HeaderModule,
    FooterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
