import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import {AlbumsComponent} from "./albums/albums.component";
import {AlbumDetailsComponent} from "./album-details/album-details.component";
import {AboutComponent} from "./about/about.component";
import {AlbumPhotosComponent} from "./album-photos/album-photos.component";

let album_id = '1';
const routes: Routes = [
  {
    path: 'first-component',
    title: 'First component',
    component: FirstComponent,
  },
  {
    path: 'albums',
    title: 'albums',
    component: AlbumsComponent,
  },
  {
    path: 'albums/:id',
    component: AlbumDetailsComponent,
  },
  {
    path: 'albums/:id/photos',
    component: AlbumPhotosComponent,
  },
  {
    path: 'about',
    title: 'About',
    component: AboutComponent,
  },
];


// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
