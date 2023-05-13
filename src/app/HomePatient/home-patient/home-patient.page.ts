import { Component, OnInit } from '@angular/core';

import { ServicesService } from 'src/app/Services/services.service';

import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({

  selector: 'app-home-patient',
  templateUrl: './home-patient.page.html',
  styleUrls: ['./home-patient.page.scss'],
})
export class HomePatientPage implements OnInit {
new:any
  loginData: any
  message:any
  user: any
  nbreAlert: number=0;
  nbreAlert2: number=0;
  nbreAlertAccept: any;
  alert: any = [];
  alertAccept: any = [];
  alertConfirm: any=[];
  nbreAlertConfim: any
  i:number=0;

  constructor( private router: Router, private service : ServicesService, private route:Router, private toast : ToastController ) { }

  ngOnInit() {
    // this.notifDemande()
    this.notifConfirm()
    this.notifAccept()
    this.noti();
    this.loginData = localStorage['isLogin'];
    this.user=JSON.parse(localStorage.getItem("isLogin"));

    console.log(this.loginData);
    if(this.loginData){
      this.presentToast();
    }
      this.service.getAllActionNotVue(false,this.user).subscribe((data)=>{
        console.log('vueeee ', data);
        this.nbreAlert = Object.keys(data).length;
      })
}

//welcome toast
async presentToast(){
  let toast = this.toast.create({
    message: 'Bienvenue  ' + this.user.nomComplet,
    duration: 100,
     color:'success',
    position: 'top'
  });
  (await toast).present();
 }//end
//notif non vue par user
noti(){
  this.user=JSON.parse(localStorage.getItem("isLogin"));
this.service.getAllActionNotVue(false ,this.user).subscribe((data)=>{
    console.log('vueeee ', data);
    this.nbreAlert = Object.keys(data).length;


  })
}
//end
//Liste des accepts par user
notifAccept(){
  this.loginData = localStorage['isLogin'];
    this.user=JSON.parse(localStorage.getItem("isLogin"));
    console.log('mon id ', this.user.id);
this.service.acceptByetatAndUser(this.user.id).subscribe((data)=>{
    // console.log('accept ', data);
    this.nbreAlertAccept = Object.keys(data).length;
//end

  })
}

//listes de confirm par user
notifConfirm(){
    this.user=JSON.parse(localStorage.getItem("isLogin"));
    // console.log('mon id ', this.user.id);
this.service.confirmByetatAndUser(this.user.id).subscribe((data)=>{
    console.log('accept ', data);
    this.nbreAlertConfim = Object.keys(data).length;


  })
}
//end


}
