import { LOCALE_ID, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { PrimeNgModule } from "./prime-ng/prime-ng.module";
import { SharedModule } from "./shared/shared.module";

// Change locale of app globally ---> providing the locale makes it global
import localEs from "@angular/common/locales/es";
import { registerLocaleData } from "@angular/common";
registerLocaleData(localEs);

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, PrimeNgModule, SharedModule],
  providers: [
    // providing the global locale
    { provide: LOCALE_ID, useValue: "es" },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
