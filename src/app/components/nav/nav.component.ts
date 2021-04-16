
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbMenuItem, NbMenuService } from '@nebular/theme';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  items : NbMenuItem[];
  itemsSub : Subscription;

  constructor(private _service : AuthService, private _menuService : NbMenuService, private _router : Router) { 
  }

  ngOnInit(): void {
    this.itemsSub = this._service.itemsSubject.subscribe((i : NbMenuItem[])=>{this.items = i});
    this._menuService.onItemClick().subscribe((event)=>{
      if(event.item.title === 'Logout')
        {
          this._service.logout();
          this._router.navigate([('home')]);
        }
      });
    this._service.emitItemSubject();
  }
}
