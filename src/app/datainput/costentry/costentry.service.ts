import { Injectable } from '@angular/core';
import { CostEntry } from '../costentry/costentry.model';
import { IncomeCategories } from '../../category/incomecat/income-categories.model';
import { IncomeCategoriesService } from '../../category/incomecat/incomecat.service';
import { KeeperService } from '../../keeper/keeper.service';
import { KeeperModel } from '../../keeper/keeper.model';

@Injectable()
export class CostEntryService {

    lastId: number = 0;
    
    costEntry: CostEntry[] = [
        new CostEntry(
            1, 
            [], 
            100, 
            [new KeeperModel (1,'Наличные', '100,00')],
            [new IncomeCategories( 'BIT','Продукты','Чтобы было вкусно', 1) ],
             ),
        new CostEntry(
            1, 
            [], 
            100, 
            [new KeeperModel (1,'Наличные', '100,00')],
            [new IncomeCategories( 'BIT','Продукты','Чтобы было вкусно', 1) ],
             ), 
    ];
    
    constructor(private incomeCategoryService: IncomeCategoriesService, 
                private keeperService: KeeperService){}

    getIncomeCat(){
        return this.incomeCategoryService.getIncomeCategories();
    }

    getKeeper(){
        return this.keeperService.getKeeperModel();

    }

    getCostEntry(){
        return this.costEntry;
    }

    addCostEntry(costEntry: CostEntry){
        this.costEntry.push(costEntry);
        return this;
    }

    
}
