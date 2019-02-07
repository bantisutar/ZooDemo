import { Component, OnInit } from '@angular/core';
import { DrawerService } from '../../service/drawer.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  constructor(private drawer: DrawerService) { }

  toggleRightSidenav() {
    this.drawer.toggle();
 }
  ngOnInit() {
  }

}
