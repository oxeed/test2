import { Component, OnInit } from '@angular/core';
import { CostEntryService} from '../datainput/costentry/costentry.service';
import { ExpenseService } from '../expense/expense.service'

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
<<<<<<< HEAD

=======
    console.log(this.expenseList);
 
>>>>>>> cb1bbd64982da3fea067d045fff438b1578a118c
  }

}
