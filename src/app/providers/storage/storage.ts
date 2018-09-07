import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class StorageProvider {

  private languageKey = "language";
  private activeKey = "active";

  constructor(private storage: StorageProvider) {

  }

  getLanguage(): any { // Obter dados do local storage
    return localStorage.getItem(this.languageKey);
  }

  getActive(): any { // Obter dados do local storage
    return localStorage.getItem(this.activeKey);
  }

  setActive(active: boolean) { // Gravar dados do local storage
    let currentActive = active;

    localStorage.setItem(this.activeKey, JSON.stringify(currentActive));
  }

  setLanguage(language: string) { // Gravar dados do local storage
    let currentLanguage = language;

    localStorage.setItem(this.languageKey, JSON.stringify(currentLanguage));
  }

}
