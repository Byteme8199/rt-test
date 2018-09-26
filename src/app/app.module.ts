import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DiagramEditorComponent } from './diagram-editor/diagram-editor.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';

import { ApiService } from './api.service';   // our custom service, see below

@NgModule({
  declarations: [
    AppComponent,
    DiagramEditorComponent,
    NavBarComponent,
    SidebarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ ApiService ],
  bootstrap: [AppComponent]
})

export class AppModule { }
