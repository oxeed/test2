import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { CategoryComponent } from './category/category.component';
import { ExpandMenuDirective } from './directives/v-sub-menu.directive';
import { ExpenseComponent } from './expense/expense.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { KeeperComponent } from './keeper/keeper.component';
import { VMenuComponent } from './v-menu/v-menu.component';
import { IncomecatComponent } from './category/incomecat/incomecat.component';
import { KeeperService } from './keeper/keeper.service';
import { IncomeCategoriesService } from './category/incomecat/incomecat.service';

import { TreeModule } from 'angular-tree-component';
import { DatainputComponent } from './datainput/datainput.component';
import { CostentryComponent } from './datainput/costentry/costentry.component';
import { ReventryComponent } from './datainput/reventry/reventry.component';
import { TransitionsComponent } from './datainput/transitions/transitions.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'expense', component: ExpenseComponent },
  { path: 'income_category', component: IncomecatComponent },
  { path: 'keeper', component: KeeperComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoryComponent,
    KeeperComponent,
    ExpenseComponent,
    VMenuComponent,
    HomeComponent,
    ExpandMenuDirective,
    IncomecatComponent,
    DatainputComponent,
    CostentryComponent,
    ReventryComponent,
    TransitionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    TreeModule.forRoot(),
    NgbModule
  ],
  providers: [IncomeCategoriesService, 
    KeeperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
