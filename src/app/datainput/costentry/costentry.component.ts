import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CostEntry } from '../costentry/costentry.model';
import { CostEntryService } from '../costentry/costentry.service';


@Component({
  selector: 'app-costentry',
  templateUrl: './costentry.component.html',
  styleUrls: ['./costentry.component.css'],
  providers: [CostEntryService]
})

export class CostentryComponent implements OnInit {
  date;
  costEntry;
  incomeCat;
  keeper;
  newCost: CostEntry[];
  getObs;
  

  @ViewChild('costEnt') costEntryForm: NgForm;


  constructor(private costEntryService: CostEntryService) { }

  ngOnInit() {
    this.incomeCat = this.costEntryService.getIncomeCat();
    this.keeper = this.costEntryService.getKeeper();
    this.costEntry = this.costEntryService.getCostEntry();
    this.getObs = this.costEntryService.getObs().subscribe(newCost => this.newCost = newCost);
    
  }


  onSubmit(form: NgForm) {
    const value = form.value;
    const newCost = new CostEntry(value.id, value.date, value.summ, value.keeper_select, value.income_select);
    this.costEntryService.addCostEntry(newCost);
    form.reset();
    console.log(newCost);
    console.log(this.getObs);

  }

}

