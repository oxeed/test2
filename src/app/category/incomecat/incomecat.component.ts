import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IncomeCategoriesService } from './incomecat.service';
import { IncomeCategories } from './income-categories.model';


@Component({
  selector: 'app-incomecat',
  templateUrl: './incomecat.component.html',
  styleUrls: ['./incomecat.component.css'],
  providers: [IncomeCategoriesService]
})
export class IncomecatComponent implements OnInit {


  @ViewChild('inccatform') incomeCategoryForm: NgForm;
  incomeCategory: IncomeCategories[];
  isShow: number;

  clicked(index) {
    this.isShow = index;
  }

  constructor(private incomeCategoriesService: IncomeCategoriesService ) { }

  ngOnInit() {
    this.incomeCategory = this.incomeCategoriesService.getIncomeCategories();
  }

  onSelected() {
    this.incomeCategoriesService.incomeCatServiceSelected.emit();
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const incomeCat = new IncomeCategories(value.category_name, value.parent_category, value.comment, value.id);
    this.incomeCategoriesService.addIncomeCategories(incomeCat);
    form.reset();
    console.log(this.incomeCategory);
  }

}
