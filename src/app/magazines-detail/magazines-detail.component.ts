import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { Location } from '@angular/common';
import {MagazinesService} from "../magazines.service";
import {Magazine} from "../model/magazine";

@Component({
  selector: 'app-magazines-detail',
  templateUrl: './magazines-detail.component.html',
  styleUrls: ['./magazines-detail.component.css']
})
export class MagazinesDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private magazineService: MagazinesService,
              private location: Location) { }

  ngOnInit() {
    this.getMagazine();
  }

  magazine : Magazine;

  getMagazine():void{
    const uuid = this.route.snapshot.paramMap.get('uuid');
    console.log("uuid: " + uuid);
    this.magazineService.getById(uuid).subscribe(_ => this.magazine = _);
  }

  save():void{
    this.magazineService.update(this.magazine).subscribe(_ => this.goBack());
  }

  goBack():void{
    this.location.back();
  }

}
