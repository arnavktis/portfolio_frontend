import { Component } from '@angular/core';
import { NgForm } from '@angular/Forms';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {
  submit(userf: NgForm){
    console.log(userf);
  }
}
