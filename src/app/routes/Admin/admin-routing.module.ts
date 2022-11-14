import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesDeJeuxComponent } from './categories-de-jeux/categories-de-jeux.component';
import { CommandesComponent } from './commandes/commandes.component';
import { EquipesComponent } from './equipes/equipes.component';
import { JeuxComponent } from './jeux/jeux.component';
import { MembresComponent } from './membres/membres.component';
import { NotificationTournoisComponent } from './notification-tournois/notification-tournois.component';
import { OverviewComponent } from './overview/overview.component';
import { ProduitsComponent } from './produits/produits.component';
import { ReclamationsComponent } from './reclamations/reclamations.component';
import { TournoisComponent } from './tournois/tournois.component';
import { TutorielsComponent } from './tutoriels/tutoriels.component';

const routes: Routes = [
  { path: 'tutoriels', component: TutorielsComponent },
  { path: 'produits', component: ProduitsComponent },
  { path: 'tournois', component: TournoisComponent },
  { path: 'overview', component: OverviewComponent },
  { path: 'categoriedejeux', component: CategoriesDeJeuxComponent },
  { path: 'jeux', component: JeuxComponent },
  { path: 'membres', component: MembresComponent },
  { path: 'reclamations', component: ReclamationsComponent },
  { path: 'commandes', component: CommandesComponent },
  { path: 'notificationTournois', component: NotificationTournoisComponent },
  { path: 'equipes', component: EquipesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
