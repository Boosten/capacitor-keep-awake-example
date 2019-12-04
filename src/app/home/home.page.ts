import { Component } from '@angular/core';
import { KeepAwakePlugin } from '@boosten/capacitor-keep-awake';
import { Plugins } from '@capacitor/core';

// import it like this so we have type safety
const KeepAwake = Plugins.KeepAwake as KeepAwakePlugin;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  constructor() {}

  async keepAwake() {
    await KeepAwake.keepAwake();
  }

  async allowSleep() {
    await KeepAwake.allowSleep();
  }
}
