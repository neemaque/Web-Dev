import { Component } from '@angular/core';
import {albums, change_title, create_album, delete_album, ids} from "../albums";
import { FormBuilder } from '@angular/forms';
import {ActivatedRoute, provideRouter, Router} from "@angular/router";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent {
  albums = [...albums];
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) {}
  createAlbum = this.formBuilder.group({
    name: ''
  });
  onCreateAlbum(): void
  {
    let title = this.createAlbum.value.name;
    if(title)
    {
      create_album(title);
    }
    this.router.navigate(["/albums", ids], {});
  }
}
