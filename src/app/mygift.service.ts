import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Gift } from './my-gift/gift.interface';

@Injectable()
export class MygiftService {
  
  giftUrl = 'https://yesno.wtf/api';
  constructor(private http:HttpClient) { }
  getGift()
  {
    return this.http.get<Gift>(this.giftUrl);
 } 
}
