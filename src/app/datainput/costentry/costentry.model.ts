import { IncomeCategories } from '../../category/incomecat/income-categories.model';
import { Kepp }

export class CostEntry {
    public date;
    public id;
    public summ;
    public keeper;
    public inCat;


constructor(id: number, date: [], summ: [], keeper:[], inCat: IncomeCategories[] ) {
    this.date = date;
    this.id = id;
    this.summ = summ;
    this.keeper = keeper;
    this.inCat = inCat;

}
}




