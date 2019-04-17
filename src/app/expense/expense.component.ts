import { Component, OnInit } from '@angular/core';
import { CostEntryService} from '../datainput/costentry/costentry.service';
import { CostEntry } from '../datainput/costentry/costentry.model';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css'],
  providers: []
})
export class ExpenseComponent implements OnInit {

  expenseList;
  cost: CostEntry[]; 
  private subscription: Subscription;
  closeEntry: any[]=[];
  
  constructor(private costEntryService: CostEntryService ) { 
    costEntryService.getObs().subscribe(data => this.cost = data)
  }
   
  ngOnInit() {
    this.expenseList = this.costEntryService.getCostEntry();

  }

  ngDestroy(){
   
  }

}
