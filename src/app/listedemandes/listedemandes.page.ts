import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../Services/services.service';

@Component({
  selector: 'app-listedemandes',
  templateUrl: './listedemandes.page.html',
  styleUrls: ['./listedemandes.page.scss'],
})
export class ListedemandesPage implements OnInit {
  listDemande:any
  loginData: any
  user: any
 
  constructor(private service: ServicesService) { }

  ngOnInit() {
    this.loginData = localStorage['isLogin'];
    this.user = JSON.parse(localStorage.getItem("isLogin") || '{}');
    console.log("login " + this.user);
    this.listerDemande()

  }
  listerDemande() {
    this.service.getAllDemandeByUser(this.user.id).subscribe((data)=>{
      console.log(data);
     return this.listDemande=data;
    })
  }

}
