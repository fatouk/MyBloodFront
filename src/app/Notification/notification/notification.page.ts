import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ServicesService } from 'src/app/Services/services.service';
import { OrderPipe } from 'ngx-order-pipe';
@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {
alerts: any;
loginData : any
user: any
userId: any
order: string = 'info.name';
reverse: boolean = false;
caseInsensitive: boolean = false;
sortedCollection: any[];
  constructor(private orderPipe: OrderPipe, private service : ServicesService, private route:Router, private toast : ToastController) {}

  ngOnInit() {   
    
    this.loginData = localStorage['isLogin'];
    this.user=JSON.parse(localStorage.getItem("isLogin"));
    console.log('log ',this.loginData);
    this.listNotif();   
 }

listNotif(){
  this.user=JSON.parse(localStorage.getItem("isLogin"));
  this.service.getNotifById(this.user.id).subscribe((dat: any)=>{
    
  this.alerts = dat;
    
  console.log('notif', this.alerts);
    
  
    
  })
}

}
