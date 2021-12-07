import { NgModule } from '@angular/core';
import {
  INITIAL_CONFIG,
  ServerModule,
  ServerTransferStateModule,
} from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [AppModule, ServerModule, ServerTransferStateModule],
  providers: [
    {
      provide: INITIAL_CONFIG,
      useValue: { useAbsoluteUrl: true, baseUrl: 'http://localhost:3001' },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
