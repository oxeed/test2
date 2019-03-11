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
<<<<<<< HEAD
  date: Date;
=======
  date;
>>>>>>> cb1bbd64982da3fea067d045fff438b1578a118c
  costEntry;
  incomeCat;
  keeper;


  @ViewChild('costEnt') costEntryForm: NgForm;


  constructor(private costEntryService: CostEntryService) { }

  ngOnInit() {
    this.incomeCat = this.costEntryService.getIncomeCat();
    this.keeper = this.costEntryService.getKeeper();
    this.costEntry = this.costEntryService.getCostEntry();
  
  


  }

<<<<<<< HEAD
  onSubmit() {
    const newCost = new CostEntry(
      this.costEntryForm.value.id,
      this.costEntryForm.value.date,
      this.costEntryForm.value.summ,
      this.costEntryForm.value.keeper_select,
      this.costEntryForm.value.incomeCat);
    this.costEntryForm.reset();
    console.log(newCost);
=======
  onSubmit(form: NgForm) {
    const value = form.value;
    const Entry = new CostEntry(value.id, value.date, value.summ, value.keeper_select, value.income_select);
    this.costEntryService.addCostEntry(Entry);
    form.reset();
    console.log(Entry);
    console.log(this.costEntryService.getCostEntry())
   
>>>>>>> cb1bbd64982da3fea067d045fff438b1578a118c





  }

  }

