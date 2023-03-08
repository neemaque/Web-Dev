import {Component, OnInit} from '@angular/core';
import {Album, albums} from "../albums";
import {photos} from "../photos";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit{
  album: Album | undefined;
  photos = [...photos];
  constructor(
    private route: ActivatedRoute
  ) { }
  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const albumIdFromRoute = Number(routeParams.get('id'));

    // Find the product that correspond with the id provided in route.
    this.album = albums.find(album => album.id === albumIdFromRoute);
    this.photos = [...photos].filter(x => x.albumId == albumIdFromRoute);
  }
}
