import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ArticlesService } from '../articles.service';
import { log } from 'console';

@Component({
  selector: 'app-article-details',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './article-details.component.html',
  styleUrl: './article-details.component.scss'
})
export class ArticleDetailsComponent {
  route = inject(ActivatedRoute)
  articlesService = inject(ArticlesService)

  article!: any;

  id!: string;

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.articlesService.getArticle(this.id).subscribe((res) => {
      this.article = res;
      console.log(res)
    })
  }
}
