import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  id: number;
  loading : boolean = true;
  name : string;
  email : string;
  gender : string;
  status : string;
  imgUrl : string;

  constructor(private aRoute: ActivatedRoute, private userService : UserService) { 
    this.id = +this.aRoute.snapshot.paramMap.get('id');
  }


  ngOnInit(): void {
    this.getUser();
  }

  getUser() : void {
      this.userService.getUser(this.id).subscribe(data => {
        console.log(data.data);
        this.name = data.data.name;
        this.email = data.data.email;
        this.gender = data.data.gender;
        this.status = data.data.status;
        this.imgUrl = 'https://picsum.photos/250/250'; //data.data.imgUrl; 

        this.loading = false;
    });
  }
  
}
