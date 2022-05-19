import { Component} from '@angular/core';
import { CanActivate } from '@angular/router';

@Component({
  selector:'dashboard',
  templateUrl: './dashboard.component.html'
})

export class Dashboard{

  permissionValue: boolean = false;
  msg: string;


}