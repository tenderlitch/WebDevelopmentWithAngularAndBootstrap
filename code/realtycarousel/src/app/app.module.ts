import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AccountComponent } from './account/account.component';
import { ListingsComponent } from './listings/listings.component';
import { CreateListingComponent } from './create-listing/create-listing.component';
import { EditListingComponent } from './edit-listing/edit-listing.component';
import { PreviewListingComponent } from './preview-listing/preview-listing.component';
import { PhotosComponent } from './photos/photos.component';
import { UploadPhotoComponent } from './upload-photo/upload-photo.component';
import { EditPhotoComponent } from './edit-photo/edit-photo.component';
import { PreviewPhotoComponent } from './preview-photo/preview-photo.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ListingDetailsComponent } from './listing-details/listing-details.component';
import { CrudComponent } from './crud/crud.component';
import { FeaturesComponent } from './features/features.component';
import { PricingComponent } from './pricing/pricing.component';
import { AboutComponent } from './about/about.component';
import { SupportComponent } from './support/support.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PhotoListingComponent } from './photo-listing/photo-listing.component';
import { DadComponent } from './child/Dad.component';
import { SonComponent } from './child/Son.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PlaygroundComponent } from './playground/playground.component';
import { NgbCollapseComponent } from './ngb-collapse/ngb-collapse.component';
import { NgbModalComponent } from './ngb-modal/ngb-modal.component';
import { NgbCarouselComponent } from './ngb-carousel/ngb-carousel.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [//这里是声明模块内组件的地方
    AppComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    LogoutComponent,
    AccountComponent,
    ListingsComponent,
    CreateListingComponent,
    EditListingComponent,
    PreviewListingComponent,
    PhotosComponent,
    UploadPhotoComponent,
    EditPhotoComponent,
    PreviewPhotoComponent,
    PageNotFoundComponent,
    ListingDetailsComponent,
    CrudComponent,
    FeaturesComponent,
    PricingComponent,
    AboutComponent,
    SupportComponent,
    PhotoListingComponent,
    DadComponent,
    SonComponent,
    PlaygroundComponent,
    NgbCollapseComponent,
    NgbModalComponent,
    NgbCarouselComponent
  ],
  imports: [//这里是引入外部模块的地方
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
