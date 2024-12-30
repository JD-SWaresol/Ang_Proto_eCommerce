import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import { SingupComponent } from './components/singup/singup.component';
import { HomeComponent } from './components/home/home.component';
import { ProductoComponent } from './components/producto/producto.component';
import { AboutUsComponent } from './components/know-us/about-us/about-us.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'signin', component: SigninComponent},
  {path:'signup', component:SingupComponent},
  //Insertamos el path para Producto y el Id con el que vamos a identificar la consulta
  {path: 'producto/:id', component: ProductoComponent},
  {path: 'about-us', component: AboutUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
