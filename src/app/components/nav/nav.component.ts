
import { Component, OnInit } from '@angular/core';
import { NbMenuItem, NbMenuService } from '@nebular/theme';
import { of, Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  items : NbMenuItem[];
  itemsSub : Subscription;
  list = of(this._service.items)

  constructor(private _service : AuthService, private _menuService : NbMenuService) { 
  }

  ngOnInit(): void {
    this.items = this._service.items
    this.itemsSub = this._service.loginSubJect.subscribe((i : boolean)=>{this.items = this._service.items});
    this._menuService.onItemClick().subscribe((event)=>{
      if(event.item.title === 'Logout')
        {
          this._service.logout();
        }
      });
    this._service.emitItemSubject();
    
  }
}
