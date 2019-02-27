export class CostEntry {
    public date;
    public id;
    public summ;
    public keeper;
    public inCat;


constructor(id: number, date: number,summ: number, keeper:[], inCat: [] ) {
    this.date = date;
    this.id = id;
    this.summ = summ;
    this.keeper = keeper;
    this.inCat = inCat;

}
}




