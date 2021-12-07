import { Component, OnInit } from '@angular/core';
import { makeStateKey, TransferState } from '@angular/platform-browser';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [HomeService],
})
export class HomeComponent implements OnInit {
  cities: { name: string; image: string; alt: string }[] = [];
  constructor(
    private homeService: HomeService,
    private transferState: TransferState
  ) {
    console.log('HomeComponent constructor');
  }

  async ngOnInit() {
    console.log('HomeComponent ngOnInit start');
    let myTransferStateKey = makeStateKey<any>('myDatas');
    if (this.transferState.hasKey(myTransferStateKey)) {
      console.log('HomeComponent ngOnInit hasKey');
      this.cities = this.transferState.get(myTransferStateKey, []);
      this.transferState.remove(myTransferStateKey);
    } else {
      console.log('HomeComponent ngOnInit noKey');
      this.cities = (await this.homeService.getCities()) as {
        name: string;
        image: string;
        alt: string;
      }[];
      this.transferState.set(myTransferStateKey, this.cities);
    }
    console.log('HomeComponent ngOnInit end');
  }
}
