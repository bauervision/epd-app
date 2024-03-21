import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridAngular } from 'ag-grid-angular'; // AG Grid Component
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DataTableComponent } from './data-table/data-table.component';
import { EmbeddedVideoComponent } from './embedded-video/embedded-video.component';
import { InteractiveMapComponent } from './interactive-map/interactive-map.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    DataTableComponent,
    EmbeddedVideoComponent,
    InteractiveMapComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, AgGridAngular],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
