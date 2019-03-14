import { KeeperModel } from './../../keeper/keeper.model';
import { Injectable, EventEmitter } from '@angular/core';
import { CostEntry } from '../costentry/costentry.model';
import { IncomeCategories } from '../../category/incomecat/income-categories.model';
import { IncomeCategoriesService } from '../../category/incomecat/incomecat.service';
import { KeeperService } from '../../keeper/keeper.service';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { ThrowStmt } from '@angular/compiler';


@Injectable()
export class CostEntryService {

  
    lastId = 0;

    Costentry: CostEntry[] = [
        new CostEntry(1, new Date(), 100,
          [new KeeperModel (1, 'Наличные', '100,00')],
          [new IncomeCategories ( 'BIT', 'Продукты', 'Чтобы было вкусно', 1)]
          ),
        new CostEntry(1, new Date(), 100,
          [new KeeperModel (2, 'Кредитная крарта', '100,00')],
          [new IncomeCategories ( 'Apdrošināšana', 'Продукты', 'Дизель', 2)]
          )
    ];

    constructor(private incomeCategoryService: IncomeCategoriesService,
                private keeperService: KeeperService) {}

    getIncomeCat() {
        return this.incomeCategoryService.getIncomeCategories();
    }

    getKeeper() {
        return this.keeperService.getKeeperModel();

    }

    getCostEntry() {
        return this.Costentry;
    }

    addCostEntry(costentry: CostEntry) {
        this.Costentry.push(costentry);
    
    }



      

    }

    

