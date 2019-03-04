import { IncomeCategories } from '../../category/incomecat/income-categories.model';
import { KeeperModel } from '../../keeper/keeper.model';

export class CostEntry {
    public id: number;
    public date: [];
    public summ: number;
    public keeper: KeeperModel[];
    public inCat: IncomeCategories[];


constructor(id: number, date: [], summ: number, keeper:KeeperModel[], inCat: IncomeCategories[] ) {
    this.id = id;
    this.date = date;
    this.summ = summ;
    this.keeper = keeper;
    this.inCat = inCat;

}
}




