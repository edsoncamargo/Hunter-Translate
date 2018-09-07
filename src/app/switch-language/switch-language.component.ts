import { Component, OnInit } from '@angular/core';

import { StorageProvider } from '../providers/storage/storage';
import { TranslateProvider } from '../providers/translate/translate';

@Component({
  selector: 'app-switch-language',
  templateUrl: './switch-language.component.html',
  styleUrls: ['./switch-language.component.scss']
})
export class SwitchLanguageComponent implements OnInit {

  constructor(private storage: StorageProvider, private translate: TranslateProvider) { }

  ngOnInit() {
  }

  setLanguage(language) {
    if (this.storage.getActive() == true) {
      this.translate.setDefaultLanguage(language);
      this.storage.setLanguage(language);
    } else {
      this.translate.setDefaultLanguage(language);
      this.storage.setLanguage(language);
    }
  }

}
