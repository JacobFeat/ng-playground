import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule, RouterModule],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss'
})
export class ArticlesComponent {
  protected articlesService = inject(ArticlesService);

  protected articles = this.articlesService.articles;
}
