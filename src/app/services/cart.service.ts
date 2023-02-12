import { isNgTemplate } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { cart } from '../shared/model/cart';
import { Foods } from '../shared/model/food';
import { cartitem } from '../shared/model/cartitem';



@Injectable({  
  providedIn: 'root'
})
export class CartService {
  private Cart:cart = new cart();

 addToCart(food:Foods):void{
  let cartItem= this.Cart.items.find(item => item.food.id===food.id)
  if(cartItem){
    this.changeQuantity(food.id, cartItem.quantity +1)
    return
  }
  this.Cart.items.push(new cartitem(food));
 }
 removeFromCart(foodId:number):void{
  this.Cart.items=this.Cart.items.filter(item => item.food.id !=foodId)
 }
 changeQuantity(quantity:number, foodId:number){
  let cartItem = this.Cart.items.find(item=>item.food.id===foodId);
  if(!cartItem) return;
  cartItem.quantity =quantity;

 }
 getcart():cart{
  return this.Cart
 }

  
}
