import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component';
import { PassengerCountComponent } from './Components/passenger-count/passenger-count.component'
import { PassengerDetailComponent } from './Components/passenger-detail/passenger-detail.component'

import { PassengerDashboardService } from './passenger-dashboard.service'

@NgModule( {
    declarations: [
        PassengerDashboardComponent,
        PassengerCountComponent,
        PassengerDetailComponent
    ],
    imports: [
        CommonModule, HttpModule
    ],
    exports: [
        PassengerDashboardComponent
    ],
    providers: [
        PassengerDashboardService
    ]
    
})
export class PassengerDashboardModule {

}