import { IncomeCategories } from '../../category/incomecat/income-categories.model';
import { KeeperModel } from '../../keeper/keeper.model';

export class CostEntry {
    public date;
    public id;
    public summ;
    public keeper;
    public inCat;


constructor(id: number, date: [], summ: number, keeper:KeeperModel[], inCat: IncomeCategories[] ) {
    this.date = date;
    this.id = id;
    this.summ = summ;
    this.keeper = keeper;
    this.inCat = inCat;

}
}




