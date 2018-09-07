import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslateProvider {

  constructor(private translate: TranslateService) {
  }

  setDefaultLanguage(language: string) {
    this.translate.setDefaultLang(language);
    this.translate.use(language);
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }

}
