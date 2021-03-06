import { Injectable } from '@angular/core';
import { CostEntryService } from '../datainput/costentry/costentry.service';
import {  CostEntry } from '../datainput/costentry/costentry.model';

@Injectable()
export class ExpenseService {
    constructor(private costEntryService: CostEntryService) {}

    getCostEnrtyList() {
        this.costEntryService.getCostEntry();
    }
    
}

