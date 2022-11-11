import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.page.html',
  styleUrls: ['./listado.page.scss'],
})
export class ListadoPage implements OnInit {
  personas : any;
  constructor() {
    this.personas = [
      {
        id : 1,
        nombre : 'juan',
        edad : 20,
        foto : 'https://www.prensa-latina.cu/wp-content/uploads/2022/09/Putin-Decreta-Movilizacion-Parcial.jpg'
      },
      {
        id : 2,
        nombre : 'ana',
        edad : 30,
        foto : 'https://lh6.googleusercontent.com/proxy/9LCnZpEe8_K311RpVPC8CXFHZUAQ8Xkx7ewA2xo10o-f2ybLjvYMW56wpsiUxhxOLN9m24irAESDjhz3zB7_dvJvQ7OkZGwBgPY2eqWBQ1w8J7Mxi-rn7VlOvCjo_wUuZnNV-yq0G413CK7-F3y2NL33ytfAiRpktH18wwGk1U5R=w1200-h630-p-k-no-nu'
      },
      {
        id : 3,
        nombre : 'dany',
        edad : 40,
        foto : 'https://th.bing.com/th/id/R.a86ebd10891a892a8ff45b45a8df72a4?rik=PtmZf309nIhiPA&riu=http%3a%2f%2fstatic-1.ivoox.com%2faudios%2f1%2f3%2f8%2f8%2f601600348831_XXL.jpg&ehk=XAmq7NEZ7ZIoqdOlZaTQ2gHe%2fzwhBNU6k0p9WrmTd%2fM%3d&risl=&pid=ImgRaw&r=0'
      },
    ];
   }

  ngOnInit() {
  }

}
