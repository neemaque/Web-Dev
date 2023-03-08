import {Component, OnInit} from '@angular/core';
import {Album, albums, change_title, delete_album, ids} from "../albums";
import {ActivatedRoute, Router} from "@angular/router";
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit{

  album: Album | undefined;
  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
  ) {}
  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const albumIdFromRoute = Number(routeParams.get('id'));

    this.album = albums.find(album => album.id === albumIdFromRoute);
  }
  changeTitle = this.formBuilder.group({
    name: ''
  });
  deleteAlbum = this.formBuilder.group({

  })
  onSubmit(): void
  {
    let new_title = this.changeTitle.value.name;
    if(this.album && new_title)
    {
      change_title(this.album, new_title);
    }
  }
  onDelete(): void
  {
    if(this.album)
    {
      delete_album(this.album.title);
    }
    this.router.navigate(["/albums"], {});
  }
}
