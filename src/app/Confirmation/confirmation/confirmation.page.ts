import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { ServicesService } from 'src/app/Services/services.service';
import { DetailConfirmationPage } from '../detail-confirmation/detail-confirmation.page';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.page.html',
  styleUrls: ['./confirmation.page.scss'],
})
export class ConfirmationPage implements OnInit {
alerts:any
user: any
  constructor(private service: ServicesService, private popover: PopoverController) { }

  ngOnInit() {
    this.listConfirm()
    
  }

  listConfirm(){
    this.user=JSON.parse(localStorage.getItem("isLogin"));   
    this.service.getConfirmById(this.user.id).subscribe((dat: any)=>{      
    this.alerts = dat;      
    console.log('notif', this.alerts);
      
    
      
    })
  }
  async detail(id: any) {
    // const group_id =this.route.snapshot.params.id("id")

    const popover = await this.popover.create({
      component: DetailConfirmationPage,
      cssClass: 'my-custom-class',
      componentProps:{
        id,
      },
     
      translucent: true
    });
    await popover.present();
  
    const{role} = await popover.onDidDismiss();
    console.log('Fermer !', role);
  
  }

}
