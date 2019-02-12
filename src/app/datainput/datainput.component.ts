import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datainput',
  templateUrl: './datainput.component.html',
  styleUrls: ['./datainput.component.css']
})
export class DatainputComponent implements OnInit {

  walletTabs: string[] = ['Расходы', 'Доходы', 'Перемещения'];
  selectedWalletTab = this.walletTabs[0];

  activateClass(activate) {
    activate.active = !activate.active;
  }

  constructor() { }

  ngOnInit() {
  }

}
