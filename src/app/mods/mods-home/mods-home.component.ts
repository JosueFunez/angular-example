import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {
  modalOpen = false;
  items = [
    {title: 'Whys the sky blue?', content: 'Beacuse it is'},
    {title: 'What dooes an oragne', content: 'Taste lie ikt'},
    {title: 'Color of cat', content:'hehe lol'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.modalOpen = !this.modalOpen
  }

}
