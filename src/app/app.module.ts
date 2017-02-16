import {NgModule, ErrorHandler} from "@angular/core";
import {IonicApp, IonicModule, IonicErrorHandler} from "ionic-angular";
import {MyApp} from "./app.component";
import {AboutPage} from "../pages/about/about";
import {ContactPage} from "../pages/contact/contact";
import {HomePage} from "../pages/home/home";
import {TabsPage} from "../pages/tabs/tabs";
import {TalkRowComponent} from "../components/talk-row/talk-row";
import {AddTalkComponent} from "../components/add-talk/add-talk";
import {AddTalkPage} from "../pages/add-talk/add-talk";
import {Storage} from '@ionic/storage';

@NgModule({
  declarations: [MyApp, AboutPage, ContactPage, HomePage, TabsPage, TalkRowComponent, AddTalkComponent, AddTalkPage],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AddTalkComponent,
    AddTalkPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, Storage]
})
export class AppModule {
}
