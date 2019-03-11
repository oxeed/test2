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


  @ViewChild('costEnt') costEntryForm: NgForm;


  constructor(private costEntryService: CostEntryService,) { }

  ngOnInit() {
    this.incomeCat = this.costEntryService.getIncomeCat();
    this.keeper = this.costEntryService.getKeeper();
    console.log(this.date)
  


  }

  onSubmit() {
     new CostEntry(
      this.costEntryForm.value.id,
      this.costEntryForm.value.date,
      this.costEntryForm.value.summ,
      this.costEntryForm.value.keeper_select,
      this.costEntryForm.value.income_select);
    this.costEntryForm.reset();
    console.log(CostEntry);





  }

  }

