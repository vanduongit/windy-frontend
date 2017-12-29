import { Component, OnInit } from '@angular/core';
import {Magazine} from "../model/magazine";
import {MagazinesService} from "../magazines.service";

@Component({
  selector: 'app-magazines',
  templateUrl: './magazines.component.html',
  styleUrls: ['./magazines.component.css']
})
export class MagazinesComponent implements OnInit {

  constructor(private magazinesService : MagazinesService) { }

  ngOnInit() {
    this.getMagazines();
  }

  magazines : Magazine[]

  getMagazines(){
    this.magazinesService.get().subscribe(data => {
      this.magazines = data;
    })
  }

  delete(uuid:String):void{
    this.magazinesService.delete(uuid).subscribe(_ => {
      this.magazines = this.magazines.filter(b => b.uuid != uuid);
    });
  }

  receiveMessage($event){
    if($event == "reload"){
      this.getMagazines();
    }
  }


}
