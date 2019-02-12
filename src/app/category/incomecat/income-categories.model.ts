export class IncomeCategories {

   public id: number;
   public category_name: string;
   public parent_category: string;
   public comment: string;

   constructor( category_name: string, parent_category: string, comment: string, id: number,  ) {
     this.category_name = category_name;
     this.parent_category = parent_category;
     this.comment = comment;
     this.id = id;
   }
}
