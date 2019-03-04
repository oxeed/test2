import { IncomeCategories } from './../../category/incomecat/income-categories.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CostEntry } from '../costentry/costentry.model';
import { CostEntryService } from '../costentry/costentry.service';
import { KeeperModel } from '../../keeper/keeper.model';
import { KeeperService } from 'src/app/keeper/keeper.service';




@Component({
  selector: 'app-costentry',
  templateUrl: './costentry.component.html',
  styleUrls: ['./costentry.component.css'],
  providers:[ CostEntryService]
})
export class CostentryComponent implements OnInit {
  model;
  costEntry: CostEntry[];
  incomeCat;
  keeper;
  costId: number = 0;
  costentry





  @ViewChild('costEnt') costEntryForm: NgForm;


  constructor(private costEntryService: CostEntryService ) { }

  ngOnInit() {
    this.incomeCat = this.costEntryService.getIncomeCat();
    this.keeper = this.costEntryService.getKeeper();
    this.costentry= this.costEntryService.addCostEntry(this.costentry);
    
   

    
  }

  onSubmit() {
    const newCost = new CostEntry(
      this.costEntryForm.value.id = this.costId++,
      this.costEntryForm.value.date,
      this.costEntryForm.value.summ,
      this.costEntryForm.value.keeper,
      this.costEntryForm.value.income_select);
    this.costEntryService.addCostEntry(newCost);
    this.costEntryForm.reset();
    console.log(CostEntry)
    console.log(newCost)
    console.log(this.costEntryService.addCostEntry(newCost))
    
   

    
  }

  }
