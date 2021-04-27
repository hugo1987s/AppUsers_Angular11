import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.css']
})
export class CardUserComponent implements OnInit {

  @Input() user: any;
  imgUrl : string;
  firstName: string;
  email: string;
  id: number;

  constructor() { }

  ngOnInit(): void {
    this.firstName = this.user.name;
    this.email = this.user.email;
    this.imgUrl = 'https://picsum.photos/250/250'; //this.user._links.avatar.href;
    this.id = this.user.id;
  }

}
