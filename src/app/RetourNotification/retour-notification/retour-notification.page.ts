import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from 'src/app/Services/services.service';

@Component({
  selector: 'app-retour-notification',
  templateUrl: './retour-notification.page.html',
  styleUrls: ['./retour-notification.page.scss'],
})
export class RetourNotificationPage implements OnInit {
  alertAccept: any;
  user:any
 alerts: any
  constructor( private service : ServicesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.listNotif()
    
    
  }
  listNotif(){
    this.user=JSON.parse(localStorage.getItem("isLogin"));
   
    this.service.getAllNotif(this.user.id).subscribe((dat: any)=>{
      
    this.alerts = dat;
      
    console.log('notif', this.alerts);
      
    
      
    })
  }
}
