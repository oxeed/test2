import { IncomeCategories } from './../../category/incomecat/income-categories.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CostEntry } from '../costentry/costentry.model';
import { CostEntryService } from '../costentry/costentry.service';



@Component({
  selector: 'app-costentry',
  templateUrl: './costentry.component.html',
  styleUrls: ['./costentry.component.css'],
  providers:[CostEntryService]
})
export class CostentryComponent implements OnInit {
  model;
  costEntry: CostEntry[];
  incomeCat: IncomeCategories[];

  @ViewChild('costEnt') costEntryForm: NgForm;


  constructor(private costEntryService: CostEntryService ) { }

  ngOnInit() {
    this.incomeCat = this.costEntryService.getIncomeCat();

  }

  onSubmit() {
    const newCost = new CostEntry(
      this.costEntryForm.value.id,
      this.costEntryForm.value.date,
      this.costEntryForm.value.cat,
      this.costEntryForm.value.summ);
    this.costEntryForm.reset();
    console.log(newCost);
  }

}

