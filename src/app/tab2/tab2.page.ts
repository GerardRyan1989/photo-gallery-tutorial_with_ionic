import {Component, forwardRef, Inject, OnInit} from '@angular/core';
import { PhotoService } from '../services/photo.service';
import {Camera} from '@ionic-native/camera/ngx';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page implements OnInit {
    constructor(private camera: Camera, @Inject(forwardRef(() => PhotoService))public photoService: PhotoService) {

    }

    ngOnInit() {
        this.photoService.loadSaved();
    }
}





