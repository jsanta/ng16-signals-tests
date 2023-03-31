import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { GlobalSignalService, GLOBAL_SIGNAL_SERVICE } from './services/global-signal.service';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [
    CommonModule,
    BrowserModule,
    provideHttpClient(),
    // {
    //   provide: GLOBAL_SIGNAL_SERVICE,
    //   useClass: GlobalSignalService
    // }
  ],
  bootstrap: [ AppComponent ],
})
export class AppModule {}
