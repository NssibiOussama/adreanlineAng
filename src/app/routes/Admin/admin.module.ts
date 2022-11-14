import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';


import { AdminRoutingModule } from './admin-routing.module';
import { ProduitsComponent } from './produits/produits.component';
import { TutorielsComponent } from './tutoriels/tutoriels.component';
import { TournoisComponent } from './tournois/tournois.component';
import { OverviewComponent } from './overview/overview.component';
import { CategoriesDeJeuxComponent } from './categories-de-jeux/categories-de-jeux.component';
import { JeuxComponent } from './jeux/jeux.component';
import { MembresComponent } from './membres/membres.component';
import { ReclamationsComponent } from './reclamations/reclamations.component';
import { CommandesComponent } from './commandes/commandes.component';
import { NotificationTournoisComponent } from './notification-tournois/notification-tournois.component';
import { EquipesComponent } from './equipes/equipes.component';
const COMPONENTS: any[] = [ProduitsComponent, TutorielsComponent,TournoisComponent];
const COMPONENTS_DYNAMIC: any[] = [];

@NgModule({
  declarations: [
    ProduitsComponent,
    TutorielsComponent,
    TournoisComponent,
    OverviewComponent,
    CategoriesDeJeuxComponent,
    JeuxComponent,
    MembresComponent,
    ReclamationsComponent,
    CommandesComponent,
    NotificationTournoisComponent,
    EquipesComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
