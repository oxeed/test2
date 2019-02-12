import { IncomeCategories } from './income-categories.model';
import { Injectable } from '@angular/core';



export class IncomeCategoriesService {

  lastId =  1;

  private incomeCategory: IncomeCategories[] = [
    new IncomeCategories ( 'BIT', 'Продукты', 'Чтобы было вкусно', 1),
    new IncomeCategories ( 'Apdrošināšana', 'Продукты', 'Дизель', 2),
    new IncomeCategories ( 'Dāvanas', 'Продукты', 'Спорт', 3),
    new IncomeCategories ( 'Prēmija', 'Продукты', 'Чтобы было вкусно', 1),
    new IncomeCategories ( 'Iļģuciems', 'Продукты', 'Дизель', 2),
    new IncomeCategories ( 'Inspecta', 'Продукты', 'Спорт', 3),
    new IncomeCategories ( 'RAKUS', 'Продукты', 'Чтобы было вкусно', 1),
    new IncomeCategories ( 'BKUS', 'Продукты', 'Дизель', 2),
    new IncomeCategories ( 'Sigulda', 'Продукты', 'Спорт', 3)
  ];

  getIncomeCategories() {
    return this.incomeCategory;
  }

  addIncomeCategories(category: IncomeCategories) {
    if (!category.id) {
      category.id = ++this.lastId;
    }
    this.incomeCategory.push(category);
  }

  editIncomeCategories() {}
}
