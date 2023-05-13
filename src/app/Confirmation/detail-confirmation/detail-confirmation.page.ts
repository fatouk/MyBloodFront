import { Component, Input, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { ServicesService } from 'src/app/Services/services.service';

@Component({
  selector: 'app-detail-confirmation',
  templateUrl: './detail-confirmation.page.html',
  styleUrls: ['./detail-confirmation.page.scss'],
})
export class DetailConfirmationPage implements OnInit {
  @Input() id: number;
  detailConfirm: any;
  constructor(
    private service: ServicesService,
    public popover: PopoverController
  ) { }

  ngOnInit() {
    this.service.getConfirmId(this.id).subscribe((data) => {
      console.log(data);

      this.detailConfirm = data;
      this.popover.dismiss();
    });
  }
}
