import { Component, OnInit } from '@angular/core';
import { Gift } from './gift.interface';
import { MygiftService } from '../mygift.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-my-gift',
  templateUrl: './my-gift.component.html',
  styleUrls: ['./my-gift.component.css']
})
export class MyGiftComponent implements OnInit {
  
  gift$: Observable<Gift>;
  gift2: Gift;
  constructor(private serviceGift: MygiftService) {
    this.gift$ = this.serviceGift.getGift();
    
  }
  ngOnInit() {
  }
  changeGift()
  { 
    location.reload();
  
  }

}
