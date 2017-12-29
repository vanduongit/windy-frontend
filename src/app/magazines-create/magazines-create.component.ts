import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MagazinesService} from "../magazines.service";
import {Magazine} from "../model/magazine";

@Component({
  selector: 'app-magazines-create',
  templateUrl: './magazines-create.component.html',
  styleUrls: ['./magazines-create.component.css']
})
export class MagazinesCreateComponent implements OnInit {

  constructor(private magazinesService : MagazinesService) { }

  ngOnInit() {
    this.magazine = new Magazine();
  }

  magazine : Magazine;

  save():void {
    this.magazinesService.create(this.magazine).subscribe(_ => {
      this.sendMessage();
      this.magazine = new Magazine();
    });
  }

  @Output() messageEvent:EventEmitter<String> = new EventEmitter<String>();

  sendMessage(){
    console.log("send event");
    this.messageEvent.emit("reload");
  }

}
