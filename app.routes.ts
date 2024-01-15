import { Routes } from '@angular/router';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { ArticlesComponent } from './articles/articles.component';

export const routes: Routes = [
  {
    path: 'one',
    component: OneComponent,
  },
  {
    path: 'two',
    component: TwoComponent,
  },
  {
    path: 'three',
    component: ThreeComponent,
  },
  {
    path: 'articles',
    component: ArticlesComponent
  },
  {
    path: 'articles/:id',
    component: ArticleDetailsComponent
  },
  // {
  //   path: '**',
  //   redirectTo: 'articles'
  // }
];
