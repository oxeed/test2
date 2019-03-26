import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CostEntry } from '../costentry/costentry.model';
import { CostEntryService } from '../costentry/costentry.service';
import { IncomeCategories } from 'src/app/category/incomecat/income-categories.model';
import { KeeperModel } from 'src/app/keeper/keeper.model';


@Component({
  selector: 'app-costentry',
  templateUrl: './costentry.component.html',
  styleUrls: ['./costentry.component.css'],
  providers: [CostEntryService]
})

export class CostentryComponent implements OnInit {
  date;
  incomeCat: IncomeCategories[];
  keeper: KeeperModel[];
  costentry: CostEntry[];
  newCost: CostEntry[];

  @ViewChild('costEnt') costEntryForm: NgForm;


  constructor(private costEntryService: CostEntryService) { }

  ngOnInit() {
    this.costentry = this.costEntryService.getCostEntry();
    this.incomeCat = this.costEntryService.getIncomeCat();
    this.keeper = this.costEntryService.getKeeper();
    this.costEntryService.costEntryChanged
    .subscribe(
      (newCost: CostEntry[]) => {
        this.newCost = newCost;
      }
    )
    console.log(this.costentry) 
  }

  

  onExpense(){
    
  }


  onSubmit(form: NgForm) {
    const value = form.value;
    const Entry = new CostEntry(value.id, value.date, value.summ, value.keeper_select, value.income_select);
    this.costEntryService.addCostEntry(Entry);
    form.reset();
    console.log(Entry);
    console.log(this.costEntryService.getCostEntry());






  }

  }

