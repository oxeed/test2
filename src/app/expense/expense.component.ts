import { Component, OnInit } from '@angular/core';
import { expenseService } from '../expense/expense.service';
@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css'],
  providers: [expenseService]
})
export class ExpenseComponent implements OnInit {

  expenseList: void;
  
  constructor(private expenseService: expenseService ) { }

  ngOnInit() {
    this.expenseList = this.expenseService.getCostEnrtyList();
  
  }

}
