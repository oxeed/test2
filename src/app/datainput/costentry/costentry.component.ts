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
<<<<<<< HEAD
    console.log(this.incomeCat)
=======
    const newCost = new CostEntry(
      this.costEntryForm.value.id,
      this.costEntryForm.value.date,
      this.costEntryForm.value.cat,
      this.costEntryForm.value.summ);
    this.costEntryForm.reset();
    console.log(newCost);
>>>>>>> 0b1ef951db675004669419cf6aa57f1f43d48bba
  }

}
