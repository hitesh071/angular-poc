import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  name:string;

  constructor(private router:Router ) { }

  ngOnInit() {
    this.name=localStorage.getItem('fname');
  }
  logout()
  {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
