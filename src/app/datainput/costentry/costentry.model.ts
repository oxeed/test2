export class CostEntry {
public id;
public date;
public inCat;
public keepMod;

constructor(id: number, date: number, inCat: any[], keepMod: any[] ) {
this.id = id;
this.date = date;
this.inCat = inCat;
this.keepMod = keepMod;
}
}




