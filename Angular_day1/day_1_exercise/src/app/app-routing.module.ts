import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [{

  path: "", component: ContentComponent

},
{
  path: "learn-more", component: AboutUsComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
