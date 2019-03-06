import { Injectable } from '@angular/core';
import { CostEntryService } from '../datainput/costentry/costentry.service';


@Injectable()
export class ExpenseService {
    constructor(private costEntryService: CostEntryService) {}

    getCostEnrtyList() {
        this.costEntryService.getCostEntry();
        
    }
}


