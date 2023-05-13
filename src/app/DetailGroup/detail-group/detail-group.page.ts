import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { ServicesService } from 'src/app/Services/services.service';

@Component({
  selector: 'app-detail-group',
  templateUrl: './detail-group.page.html',
  styleUrls: ['./detail-group.page.scss'],
})

export class DetailGroupPage implements OnInit {
  @Input() id : number;

detailGroup: any
  constructor(public popover: PopoverController  ,private service : ServicesService, private route: ActivatedRoute ) { }

  ngOnInit() {
   this.service.getbyIdGroup(this.id).subscribe(data=>{
      this.popover.dismiss();
      this.detailGroup = data;
     
      console.log(data);
    })
  }

}
