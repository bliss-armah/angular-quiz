import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import { importProvidersFrom } from "@angular/core";
import { AppRoutingModule } from "./app/app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import {NgxPaginationModule} from "ngx-pagination"

bootstrapApplication(AppComponent,{
  providers: [
    importProvidersFrom(AppRoutingModule,HttpClientModule,RouterModule,NgxPaginationModule )
  ],
});