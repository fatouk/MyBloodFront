import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/Services/services.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {
loginData: any
user: any
listAccept: any;
nbre:any;
nbreDemande: any
listDemande: any
alert:any
  constructor(private service : ServicesService) { }

  ngOnInit() {
   
    this.loginData = localStorage['isLogin'];
    this.user=JSON.parse(localStorage.getItem("isLogin") || '{}');
    console.log(this.user);
  }






}
