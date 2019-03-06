import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../expense/expense.service';
import { CostEntryService} from '../datainput/costentry/costentry.service';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css'],
  providers: []
})
export class ExpenseComponent implements OnInit {

  expenseList;

  constructor(private expenseService: CostEntryService ) { }

  ngOnInit() {
    
    console.log(this.expenseList);
  }

}
