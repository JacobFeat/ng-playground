import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {

  http = inject(HttpClient);

  private articles$ = this.http
    // .get('http://localhost/wordpress/wp-json/wp/v2/artykuly?acf_format=standard&acf_format=standard&_fields=acf', {})
    .get<any[]>(
      'https://jacob.smallhost.pl/wp-json/wp/v2/artykuly?acf_format=standard&_fields=id,acf.title,acf.mainImage,acf.content'
    ).pipe(
      map((res: any) => {
        console.log(res)
        return res.map((element: any) => {
          return {
            id: element.id,
            title: element.acf.title,
            mainImage: element.acf.mainImage,
            content: element.acf.content,
          }
        });
      }),
    )

  articles = toSignal<any[]>(this.articles$)

  getArticle(id: string) {
    return this.http
    // .get('http://localhost/wordpress/wp-json/wp/v2/artykuly?acf_format=standard&acf_format=standard&_fields=acf', {})
    .get<any[]>(
      `https://jacob.smallhost.pl/wp-json/wp/v2/artykuly/${id}/?acf_format=standard&_fields=id,acf.title,acf.mainImage,acf.content`
    ).pipe(
      map((res: any) => {
          return {
            id: res.id,
            title: res.acf.title,
            mainImage: res.acf.mainImage,
            content: res.acf.content,
          }
        })
    )
  }
}
