import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MyGiftComponent } from './my-gift/my-gift.component';
import { MygiftService } from './mygift.service';
import { ObjectToArrayPipe } from './object-to-array.pipe';


@NgModule({
  declarations: [
    AppComponent,
    MyGiftComponent,
    ObjectToArrayPipe
  ],
  imports: [
    BrowserModule,HttpClientModule
  ],
  providers: [MygiftService],
  bootstrap: [AppComponent]
})
export class AppModule { }
