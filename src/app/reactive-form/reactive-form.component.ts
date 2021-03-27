import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  

  public myForm = new FormGroup(
    {
      user :new FormControl(''),
      pass :new FormControl(''),
    }
  )

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.myForm.value.user)
    // console.log(this.myForm.controls.name)
  }
}
