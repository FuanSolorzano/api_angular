import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VistaComponent } from './components/vista/vista.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';
import { CloudinaryModule } from '@cloudinary/ng';

@NgModule({
  declarations: [
    AppComponent,
    VistaComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CloudinaryModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
