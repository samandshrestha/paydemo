import { Component, OnInit } from '@angular/core';
import { Payy } from '../payy';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {


  pay:Payy=new Payy();
  simpleAlert(){
    Swal.fire("Thank U..", "Payment is Done Successfully",'success')
  }
  constructor() { }

  ngOnInit(): void {
  }

}
