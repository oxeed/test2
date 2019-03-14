import { IncomeCategories } from './income-categories.model';
import { Injectable, EventEmitter } from '@angular/core';
import { Subject, Observable } from 'rxjs';


@Injectable()
export class IncomeCategoriesService {
  incomeCatServiceSelected = new EventEmitter<IncomeCategories>();

  lastId =  1;

  private subject = new Subject<IncomeCategories[]>();

  private incomeCat: Subject<IncomeCategories[]>;

  private incomeCategory: IncomeCategories[] = [
    new IncomeCategories ( 'BIT', 'Продукты', 'Чтобы было вкусно', 1),
    new IncomeCategories ( 'Apdrošināšana', 'Продукты', 'Дизель', 2),
    new IncomeCategories ( 'Dāvanas', 'Продукты', 'Спорт', 3),
    new IncomeCategories ( 'Prēmija', 'Продукты', 'Чтобы было вкусно', 1),
    new IncomeCategories ( 'Iļģuciems', 'Продукты', 'Дизель', 2),

  ];

  

  public getIncomeCategories() {
    return this.incomeCategory;
  }

  addIncomeCategories(category: IncomeCategories) {
    if (!category.id) {
      category.id = ++this.lastId;
    }
    this.incomeCategory.push(category);
  }

  getObInCat(): Observable<IncomeCategories[]>{
    return this.subject.asObservable();
  }

 

  editIncomeCategories() {}
}
