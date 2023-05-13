import { Component } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  loginData: any;
  stateRoute: any;
  navigate: any;
  constructor(
    private platform: Platform,
    private router: Router,
    private statusBar: StatusBar,
    public route: Router,
    private splashScreen: SplashScreen
  ) {
    this.sideMenu();
    this.initializeApp();
  }
  ngOnInit(): void {
    if (localStorage.getItem('isLogin')) {
      this.router.navigateByUrl('/home-patient');
    }

  
  }

  logOut() {
    localStorage.removeItem('isLogin');
    this.route.navigateByUrl('/login');
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  sideMenu() {
    this.navigate = [
      {
        title: 'Aide',
        url: '/home',
        icon: 'help',
      },
      {
        title: 'Accueil',
        url: '/home-patient',
        icon: 'home',
      },
      {
        title: 'Deconnexion',
        url: '/login',
        icon: 'power',
        function: this.logOut,
      },
    ];
  }
}
