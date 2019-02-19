import { KeeperModel } from '../keeper/keeper.model';
import { KeeperService } from './keeper.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';



@Component({
  selector: 'app-keeper',
  templateUrl: './keeper.component.html',
  styleUrls: ['./keeper.component.css'],
  providers: [ KeeperService ]
})
export class KeeperComponent implements OnInit {

  @ViewChild('keepform') keeperForm: NgForm;

  keeperCat: KeeperModel[];
  lastId: 0;
  constructor(private keeperService: KeeperService) { }

  ngOnInit() {
    this.keeperCat = this.keeperService.getKeeperModel();

  }

  onSubmit(){
  	const newKeeper = new KeeperModel(
  		this.keeperForm.value.id,
  		this.keeperForm.value.keeper_name,
      this.keeperForm.value.keeper_summ,

  		);
  	this.keeperService.addKeeperModel(newKeeper);
  	this.keeperForm.reset();
  	console.log(newKeeper);
  }


}
