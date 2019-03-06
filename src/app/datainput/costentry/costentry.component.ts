import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CostEntry } from '../costentry/costentry.model';
import { CostEntryService } from '../costentry/costentry.service';
<<<<<<< HEAD

=======
>>>>>>> 59ac190971ef6929f99b04ab747e43d18e808524




@Component({
  selector: 'app-costentry',
  templateUrl: './costentry.component.html',
  styleUrls: ['./costentry.component.css'],
  providers: [CostEntryService]
})
export class CostentryComponent implements OnInit {
  date: {year: number, month: number, day: number};
  costEntry;
  incomeCat;
  keeper;


  @ViewChild('costEnt') costEntryForm: NgForm;


<<<<<<< HEAD
  constructor(private costEntryService: CostEntryService) { }
=======
  constructor(private costEntryService: CostEntryService,) { }
>>>>>>> 59ac190971ef6929f99b04ab747e43d18e808524

  ngOnInit() {
    this.incomeCat = this.costEntryService.getIncomeCat();
    this.keeper = this.costEntryService.getKeeper();
<<<<<<< HEAD
    console.log(this.costEntryService.getCostEntry())
=======
    this.costEntry = this.costEntryService.getCostEntry();

    console.log(this.costEntry);
>>>>>>> 59ac190971ef6929f99b04ab747e43d18e808524


  }

  onSubmit() {
    const newCost = new CostEntry(
      this.costEntryForm.value.id,
      this.costEntryForm.value.date,
      this.costEntryForm.value.summ,
      this.costEntryForm.value.keeper_select,
      this.costEntryForm.value.income_select);
    this.costEntryForm.reset();
    console.log(newCost);





  }

  }

