import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';


import {FooterComponent } from 'src/app/components/shared/footer/footer.component';
import { NavComponent} from 'src/app/components/shared/nav/nav.component';
import { AppComponent } from './app.component';
import { PatientComponent} from 'src/app/components/hospitalCenter/patient/patient.component';
import { RegionsComponent } from './components/adminView/regions/regions.component';
import { PathologiesComponent } from 'src/app/components/adminView/pathologies/pathologies.component';
import { PatientStateComponent } from './components/adminView/patient-state/patient-state.component';
import { HospitalCenterComponent } from './components/adminView/hospital-center/hospital-center.component';
import { RecentContactsComponent } from './components/hospitalCenter/recent-contacts/recent-contacts.component';
import { CreateHospitalComponent } from 'src/app/components/adminView/hospital-center/create-hospital/create-hospital.component';
import { ModifyHospitalComponent } from './components/adminView/hospital-center/modify-hospital/modify-hospital.component';
import { CreatePathologyComponent } from './components/adminView/pathologies/create-pathology/create-pathology.component';
import { CreatePatientComponent } from './components/hospitalCenter/patient/create-patient/create-patient.component';
import { CreateContactComponent } from './components/hospitalCenter/recent-contacts/create-contact/create-contact.component';
import { ModifyPathologyComponent } from './components/adminView/pathologies/modify-pathology/modify-pathology.component';
import { ModifyPatientComponent } from './components/hospitalCenter/patient/modify-patient/modify-patient.component';
import { ModifyContactsComponent } from './components/hospitalCenter/recent-contacts/modify-contacts/modify-contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavComponent,
    RegionsComponent,
    PathologiesComponent,
    PatientComponent,
    PatientStateComponent,
    HospitalCenterComponent,
    RecentContactsComponent,
    CreateHospitalComponent,
    ModifyHospitalComponent,
    CreatePathologyComponent,
    CreatePatientComponent,
    CreateContactComponent,
    ModifyPathologyComponent,
    ModifyPatientComponent,
    ModifyContactsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
