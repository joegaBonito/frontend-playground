import { Component, OnInit } from '@angular/core';
import { FilterPipeModule } from 'ngx-filter-pipe';
@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {
  title = 'app works!';
  games = [
     {
       "id":"1",
       "name": "DOTA 2",
       "genre": "Strategy"
     },
     {
       "id":"2",
       "name": "AOE 3",
       "genre": "Strategy"
     },
     {
       "id":"3",
       "name": "GTA 5",
       "genre": "RPG"
     },
     {
       "id":"4",
       "name": "Far Cry 3",
       "genre": "Action"
     },
     {
       "id":"5",
       "name": "GTA San Andreas",
       "genre": "RPG"
     },
     {
       "id":"6",
       "name": "Hitman",
       "genre": "Action"
     },
     {
       "id":"7",
       "name": "NFS MW",
       "genre": "Sport"
     },{
       "id":"8",
       "name": "Fifa 16",
       "genre": "Sport"
     },{
       "id":"9",
       "name": "NFS Sen 2",
       "genre": "Sport"
     },{
       "id":"10",
       "name": "Witcher Assasins on King",
       "genre": "Adventure"
     }
   ];
   gameFilter:any = {id:'',name:'',genre''};
   order:any;
   p: number = 1;
  collection: any[] = this.games;  

  constructor() { }

  ngOnInit() {
  }

  onClickName() {
    this.order = 'name';
  }

  onClickGenre() {
    this.order = 'genre';
  }

}
