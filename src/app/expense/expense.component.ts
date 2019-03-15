import { Component, OnInit, OnDestroy } from '@angular/core';
import { CostEntryService} from '../datainput/costentry/costentry.service';
import { Subscription } from 'rxjs';
import { CostEntry } from '../../app/datainput/costentry/costentry.model';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css'],
  providers: [CostEntryService]
})
export class ExpenseComponent implements OnInit {

  expenseList;
  expList: CostEntry[];
  subscription: Subscription;

  constructor(private costEntryService: CostEntryService ) {
    this.subscription = this.costEntryService.getObs().subscribe(expList => {this.expList = expList});
   }

  ngOnInit() {
    this.expenseList = this.costEntryService.getCostEntry();
    this.costEntryService.getObs().subscribe(expList => this.expList= expList);
    console.log(this.expList)

  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
