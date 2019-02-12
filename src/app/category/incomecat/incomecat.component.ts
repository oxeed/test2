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
  lastId = 0;
  isShow: number;

  clicked(index) {
    this.isShow = index;
  }



  constructor(private incomeCategoriesService: IncomeCategoriesService ) { }

  ngOnInit() {
    this.incomeCategory = this.incomeCategoriesService.getIncomeCategories();
  }



  onSubmit() {

    const newCategory = new IncomeCategories(this.incomeCategoryForm.value.category_name,
      this.incomeCategoryForm.value.parent_category,
      this.incomeCategoryForm.value.comment,
      this.incomeCategoryForm.value.id);
    this.incomeCategoriesService.addIncomeCategories(newCategory);
    this.incomeCategoryForm.reset();
    console.log(newCategory);

  }

}
