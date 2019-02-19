import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CostEntry } from '../costentry/costentry.model';

@Component({
  selector: 'app-costentry',
  templateUrl: './costentry.component.html',
  styleUrls: ['./costentry.component.css']
})
export class CostentryComponent implements OnInit {
  model;


  constructor() { }

  ngOnInit() {

  }

}
