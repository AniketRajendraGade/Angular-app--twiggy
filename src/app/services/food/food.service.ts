import { Injectable } from '@angular/core';

import { Foods } from 'src/app/shared/model/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id:number):Foods{
    return this.getAll().find(food => food.id == id)!;
  }

  getAll():Foods[]{
    return[
      {
        id: 1,
        price:299,
        name: 'Pizza',
        favorite:false,
        star:4.5,
        imageUrl:'/assets/food1.jpg'

      },
      {
        id: 2,
        price:259,
        name: 'Burger',
        favorite:false,
        star:4.5,
        imageUrl:'/assets/food2.jpg'

      },
      {
        id: 3,
        price:169,
        name: 'Dosa',
        favorite:false,
        star:4,
        imageUrl:'/assets/food3.jpg'

      },
      {
        id: 4,
        price:299,
        name: 'Paw Bhaji',
        favorite:false,
        star:4.5,
        imageUrl:'/assets/food4.jfif'

      },
      {
        id: 5,
        price:199,
        name: 'Chiken Biryani',
        favorite:false,
        star:4.5,
        imageUrl:'/assets/food5.jpg'

      },
      {
        id: 6,
        price:289,
        name: 'Waffle',
        favorite:false,
        star:4.5,
        imageUrl:'/assets/food6.jpg'

      },
      {
        id: 7,
        price:500,
        name: 'Kaju Katli',
        favorite:false,
        star:4.5,
        imageUrl:'/assets/food7.jpg'

      },
      {
        id: 8,
        price:399,
        name: 'Chiken Tandoor',
        favorite:false,
        star:4.5,
        imageUrl:'/assets/food8.jpg'

      },
      {
        id: 9,
        price:149,
        name: 'Chiken Rolls',
        favorite:false,
        star:4.5,
        imageUrl:'/assets/food9.jpg'

      },
      {
        id: 10,
        price:99,
        name: 'French Fries',
        favorite:false,
        star:4.5,
        imageUrl:'/assets/food10.jpg'

      },
      {
        id: 11,
        price:129,
        name: 'Sandwich',
        favorite:false,
        star:4.5,
        imageUrl:'/assets/food11.jpg'

      },
      {
        id: 12,
        price:149,
        name: 'Chole Bature',
        favorite:false,
        star:4.5,
        imageUrl:'/assets/food12.jpg'

      },
    ]
  }
}
