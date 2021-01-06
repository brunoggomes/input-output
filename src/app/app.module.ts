import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { InsereNotaComponent } from './insere-nota/insere-nota.component';
import { ExibeNotaComponent } from './exibe-nota/exibe-nota.component';

@NgModule({
  declarations: [
    AppComponent,
    InsereNotaComponent,
    ExibeNotaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
