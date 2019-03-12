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

  onSubmit(form:NgForm){
    const value = form.value;
    const keeCat = new KeeperModel(value.id, value.name, value.summ);
    this.keeperService.addKeeperModel(keeCat);
    form.reset();
    console.log(this.keeperCat)
  	

  }
}
