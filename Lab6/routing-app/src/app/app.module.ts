import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module'; // CLI imports AppRoutingModule
import { AppComponent } from './app.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { AboutComponent } from './about/about.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumPhotosComponent } from './album-photos/album-photos.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    AlbumDetailsComponent,
    AboutComponent,
    AlbumsComponent,
    AlbumPhotosComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        // CLI adds AppRoutingModule to the AppModule's imports array
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
