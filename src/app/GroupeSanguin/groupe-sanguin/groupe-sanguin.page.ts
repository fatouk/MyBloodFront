import { Component, OnInit } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { ServicesService } from 'src/app/Services/services.service';
import { PopupsPage } from 'src/app/popups/popups/popups.page';
import {  ActivatedRoute, Router } from '@angular/router';
import { DetailGroupPage } from 'src/app/DetailGroup/detail-group/detail-group.page';

@Component({
  selector: 'app-groupe-sanguin',
  templateUrl: './groupe-sanguin.page.html',
  styleUrls: ['./groupe-sanguin.page.scss'],
})
export class GroupeSanguinPage implements OnInit {
listGroupe:any
donne: any;
dataReturned: any;
  constructor( public popover: PopoverController, public route:ActivatedRoute,
    public modalController: ModalController,private service: ServicesService,
     public popoverController: PopoverController, private router: Router) { }

  ngOnInit() {
    this.listerGroupe()
  }
   listerGroupe(){
    this.service.listGroupe().subscribe((data)=>{
      console.log(data);
     return this.listGroupe=data;
    })
    
  
  }
  async detail(id: any) {
    // const group_id =this.route.snapshot.params.id("id")

    const popover = await this.popoverController.create({
      component: DetailGroupPage,
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
  

  // GetById(id: any){
  //   return this.service.getbyIdGroup(id).subscribe(
  //     data1=>{
  //       console.log(this.donne);
  //       let extraNav: NavigationExtras={
  //       queryParams:
  //       {special:'bonjour'}
  //     }
  //      this.router.navigate(['/popups/:id'], extraNav);
  //   })
  // }
 
}
