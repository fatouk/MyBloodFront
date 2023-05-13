import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PopoverController, ToastController } from '@ionic/angular';
import { RendezVousPage } from 'src/app/RendezVous/rendez-vous/rendez-vous.page';
import { ServicesService } from 'src/app/Services/services.service';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})

export class DetailPage implements OnInit {
  loginData: any;
  detailAlert: any;
  id: any
  acceptData: any;
  isaccept: boolean = false;

  constructor(private toast: ToastController, private router: Router, private service: ServicesService, private route: ActivatedRoute, public popover: PopoverController) { }

  ngOnInit() {
    this.loginData = JSON.parse(localStorage["isLogin"]);
    this.id = this.route.snapshot.params['id'];
    this.service.getNotifId(this.id).subscribe((data: any) => {
    
      this.detailAlert = data;
      console.log('fghjk', data);
      
      // console.log('Detail : ', this.detailAlert);

    });
  }

  async accepter(idAlert: any) {
    
    this.service.setIdAlert(idAlert);
    const popover = await this.popover.create({
      component: RendezVousPage,
      cssClass: 'taille',
      translucent: false
    });
    await popover.present();

    const { role } = await popover.onDidDismiss();
    console.log('Fermer !', role);
  }

  async presentToast() {
    let toast = this.toast.create({
      message: this.loginData.nomComplet + '  vous avez accepté de faire le don ',
      duration: 100,
      color: 'success',
      position: 'top'
    });
    (await toast).present();
  }

}
