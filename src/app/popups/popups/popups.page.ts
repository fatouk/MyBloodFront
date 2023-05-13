import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { 
  ModalController, 
  NavParams 
  } from '@ionic/angular';

@Component({
  selector: 'app-popups',
  templateUrl: './popups.page.html',
  styleUrls: ['./popups.page.scss'],
})
export class PopupsPage implements OnInit {
  data: any;

  modalTitle: string;
  modelId: number;

  constructor(
    private modalController: ModalController,
    private navParams: NavParams
  ) {}

  ngOnInit() { console.table(this.navParams);
    this.modelId = this.navParams.data.paramID;
    this.modalTitle = this.navParams.data.paramTitle;
  }

  async closeModal() {
    const onClosedData: string = "";
    await this.modalController.dismiss(onClosedData);
  }

}
