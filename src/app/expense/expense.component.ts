import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../expense/expense.service';
@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css'],
  providers: [ExpenseService]
})
export class ExpenseComponent implements OnInit {

  expenseList: void;
  constructor(private expenseService: ExpenseService ) { }

  ngOnInit() {
    this.expenseList = this.expenseService.getCostEnrtyList();
  }

}
