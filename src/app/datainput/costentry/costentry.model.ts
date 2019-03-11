import { KeeperModel } from './../../keeper/keeper.model';
import { IncomeCategories } from '../../category/incomecat/income-categories.model';

export class CostEntry {
    public date: Date;
    public id: number;
    public summ: number;
    public keeper: KeeperModel[];
    public inCat: IncomeCategories[];


constructor(id: number, date: Date, summ: number, keeper: KeeperModel[], inCat: IncomeCategories[] ) {
    this.date = date;
    this.id = id;
    this.summ = summ;
    this.keeper = keeper;
    this.inCat = inCat;

}
}





