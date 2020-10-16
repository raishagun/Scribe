// import { BrowserModule } from '@angular/platform-browser';
// // import { NgModule } from '@angular/core';
// // import {ReactiveFormsModule, FormsModule, FormBuilder} from '@angular/forms';
// import { AppRoutingModule } from './app-routing.module';

// import { AppComponent } from './app.component';
// import { NgModule} from '@angular/core';
// import { FormsModule} from '@angular/forms';
// import { SignupComponent } from './signup/signup.component';

// @NgModule({
//   declarations: [
//     AppComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     FormsModule,
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import *as firebase from 'firebase/app';
import 'firebase/auth';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './menu/menu.component';
import { MyblogsComponent } from './myblogs/myblogs.component';
import { ProfileComponent } from './profile/profile.component';
import { CreateComponent } from './create/create.component';
import { NgxTextEditorModule} from 'ngx-text-editor';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './post/post.component';
import { ViewComponent } from './view/view.component';
import { CommentsComponent } from './comments/comments.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

var firebaseConfig = {
  apiKey: "AIzaSyCMRjkalov_1zi2UYkFsZxizPNa-olbVAA",
  authDomain: "scribe-584d0.firebaseapp.com",
  databaseURL: "https://scribe-584d0.firebaseio.com",
  projectId: "scribe-584d0",
  storageBucket: "scribe-584d0.appspot.com",
  messagingSenderId: "713507558193",
  appId: "1:713507558193:web:e2ba11fa9b56ac825c1610",
  measurementId: "G-FKCX4N2LV1"
};
firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    MenuComponent,
    MyblogsComponent,
    ProfileComponent,
    CreateComponent,
    PostComponent,
    ViewComponent,
    CommentsComponent,
    EditProfileComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    NgxTextEditorModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
