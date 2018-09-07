import { Component } from '@angular/core';

import { StorageProvider } from './providers/storage/storage';
import { TranslateProvider } from './providers/translate/translate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'hunter-translate';

  constructor(storage: StorageProvider, translate: TranslateProvider) {

    const currentActive = storage.getActive();
    const currentLanguage = storage.getLanguage();

    if (currentActive == null) {
      storage.setActive(true);
      translate.setDefaultLanguage("pt-BR");
      storage.setLanguage("pt-BR");
    } else {
      if (currentLanguage == '"en-US"') {
        translate.setDefaultLanguage("en-US");
      } else if (currentLanguage == '"pt-BR"') {
        translate.setDefaultLanguage("pt-BR");
      }
    }

  }

}
