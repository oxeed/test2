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
  
  


  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const Entry = new CostEntry(value.id, value.date, value.summ, value.keeper_select, value.income_select);
    this.costEntryService.addCostEntry(Entry);
    console.log(Entry);
   





  }

  }

