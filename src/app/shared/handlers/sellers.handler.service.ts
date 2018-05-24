import { Injectable } from '@angular/core';
import { Http_Requests } from '../http_request.service';
import { sellerRequest } from '../models/sellerRequest.model';
import { ProductModel } from '../models/product.model';
import { ProductHandlerService } from './product.handler.service';
import { GlobalService } from './global-service.service';
import { AuthService, SocialUser } from "angularx-social-login";


@Injectable()
export class SellersHandlerService {

  public sellerProducts : Array<ProductModel>;	

  constructor(private http_request : Http_Requests, private productHandler : ProductHandlerService,private globalHandler : GlobalService) { 	
    this.sellerProducts = new Array<ProductModel>();
  }
  
  public sendSellerRequest(request : sellerRequest){
  	this.http_request.postService(request,'insertarSolicitud')
  	.then(response => {//funcionó!!
  	})
  	.catch(error =>{
  		console.log("Error: ",error)
  	})
  }

  public getProducts() : void{
    this.http_request.getService('Productos')
        .then(response => 
        {
          this.sellerProducts = response;
        }
      )
      .catch(error => 
        {
          //this.sharedMethods.openSnackBar("Mensaje de aviso!",error.message);
          console.log("Error: ",error)
        }
      )
  }


}
