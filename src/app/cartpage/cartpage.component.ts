import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { cart } from '../shared/model/cart';
import { cartitem } from '../shared/model/cartitem';
import { Foods } from '../shared/model/food';


@Component({
  selector: 'app-cartpage',
  templateUrl: './cartpage.component.html',
  styleUrls: ['./cartpage.component.css']
})
export class CartpageComponent implements OnInit{
  cart!:cart
  constructor(private cartService:CartService){
    this.setCart();
  }
  
  ngOnInit(): void {
    
  }
  setCart(){
    this.cart=this.cartService.getcart();

  }
  removeFromCart(cartItem:cartitem){
    this.cartService.removeFromCart(cartItem.food.id);
    this.setCart();
  }
  changeQuantity(cartItem:cartitem,quantityInstring:string){
    const quantity=parseInt(quantityInstring);
    this.cartService.changeQuantity(cartItem.food.id,quantity);
    this.setCart();
  }
}


