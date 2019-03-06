import { KeeperModel } from './../../keeper/keeper.model';
import { IncomeCategories } from '../../category/incomecat/income-categories.model';

export class CostEntry {
    public date;
    public id;
    public summ;
    public keeper: KeeperModel[];
    public inCat: IncomeCategories[];


constructor(id: number, date: [], summ: number, keeper: KeeperModel[], inCat: IncomeCategories[] ) {
    this.date = date;
    this.id = id;
    this.summ = summ;
    this.keeper = keeper;
    this.inCat = inCat;

}
}





