import { Injectable } from '@angular/core';
import { CostEntry } from '../costentry/costentry.model';
import { IncomeCategories } from '../../category/incomecat/income-categories.model';
import { IncomeCategoriesService } from '../../category/incomecat/incomecat.service';

@Injectable()
export class CostEntryService {
    
    constructor(private incomeCategoryService: IncomeCategoriesService){}

    getIncomeCat(){
        return this.incomeCategoryService.getIncomeCategories();
    }
}
