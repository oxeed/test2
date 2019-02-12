import { KeeperService } from './keeper.service';
import { KeeperModel } from './keeper.model';
import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';



@Component({
  selector: 'app-keeper',
  templateUrl: './keeper.component.html',
  styleUrls: ['./keeper.component.css']
})
export class KeeperComponent implements OnInit {

  KeeperCat: KeeperModel[];
  lastId: 0;
  constructor(private keeperService: KeeperService) { }

  ngOnInit() {
    this.KeeperCat = this.keeperService.getKeeperModel();
  }


}
