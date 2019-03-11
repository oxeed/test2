import { Component, OnInit } from '@angular/core';
import { CostEntryService} from '../datainput/costentry/costentry.service';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css'],
  providers: [CostEntryService]
})
export class ExpenseComponent implements OnInit {

  expenseList;

  constructor(private costEntryService: CostEntryService ) { }

  ngOnInit() {
    this.expenseList = this.costEntryService.getCostEntry();
    console.log(this.expenseList);

  }

}
