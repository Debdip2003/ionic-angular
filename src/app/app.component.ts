import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, IonRouterLinkWithHref, IonHeader, IonToolbar, IonTitle, IonButtons, IonContent, IonButton } from '@ionic/angular/standalone';
  
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonButton, IonContent, IonButtons, IonTitle, IonToolbar, IonHeader, IonApp, IonRouterOutlet, IonRouterLinkWithHref],
})
export class AppComponent {
 
}
