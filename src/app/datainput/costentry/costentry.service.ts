import { Injectable } from '@angular/core';
import { CostEntry } from '../costentry/costentry.model';
import { IncomeCategories } from '../../category/incomecat/income-categories.model';
import { IncomeCategoriesService } from '../../category/incomecat/incomecat.service';
import { KeeperService } from '../../keeper/keeper.service';

@Injectable()
export class CostEntryService {

    lastId = 0;

    Costentry: CostEntry[] = [
        new CostEntry(1, [], 100, [], []),
        new CostEntry(1, [], 100, [], [])
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
        return this.Costentry.slice();
    }

    addCostEntry(costentry: CostEntry) {
        this.Costentry.push(costentry);
        return this;
    }


}
