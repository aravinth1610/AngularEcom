import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductClass } from '../../../data-object/ProductClass'


@Component({
  selector: 'list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent {
   
selectedProduct:ProductClass;

  products = [
        {
            id: 1,
            title: "iPhone 9",
            description: "An apple mobile which is nothing like apple",
            price: 549,
            discountPercentage: 12.96,
            rating: 4.69,
            stock: 94,
            brand: "Apple",
            category: "smartphones",
            thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
            images: 
                "https://i.dummyjson.com/data/products/1/1.jpg",
             avaliable:true   
              
        },
        {
            id: 2,
            title: "iPhone X",
            description: "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
            price: 899,
            discountPercentage: 17.94,
            rating: 4.44,
            stock: 34,
            brand: "Apple",
            category: "smartphones",
            thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
            images: 
               "https://i.dummyjson.com/data/products/2/1.jpg",
               avaliable:false
              
        },
        {
            id: 3,
            title: "Samsung Universe 9",
            description: "Samsung's new variant which goes beyond Galaxy to the Universe",
            price: 1249,
            discountPercentage: 15.46,
            rating: 4.09,
            stock: 36,
            brand: "Samsung",
            category: "smartphones",
            thumbnail: "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
            images: 
                "https://i.dummyjson.com/data/products/3/1.jpg",
                avaliable:true
            
        },
        {
            id: 4,
            title: "OPPOF19",
            description: "OPPO F19 is officially announced on April 2021.",
            price: 280,
            rating: 4.3,
            stock: 123,
            brand: "OPPO",
            category: "smartphones",
            thumbnail: "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
            images: 
                "https://i.dummyjson.com/data/products/4/1.jpg",
                avaliable:true
              
        },
        {
            id: 5,
            title: "Huawei P30",
            description: "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
            price: 499,
            rating: 4.09,
            stock: 32,
            brand: "Huawei",
            category: "smartphones",
            thumbnail: "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
            images: 
               "https://i.dummyjson.com/data/products/5/1.jpg",
               avaliable:true
               
        },
        {
            id: 6,
            title: "MacBook Pro",
            description: "MacBook Pro 2021 with mini-LED display may launch between September, November",
            price: 1749,
            discountPercentage: 11.02,
            rating: 4.57,
            stock: 83,
            brand: "Apple",
            category: "laptops",
            thumbnail: "https://i.dummyjson.com/data/products/6/thumbnail.png",
            images: 
                "https://i.dummyjson.com/data/products/6/1.png",
                avaliable:false
                    },
        {
            id: 7,
            title: "Samsung Galaxy Book",
            description: "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
            price: 1499,
            discountPercentage: 4.15,
            rating: 4.25,
            stock: 50,
            brand: "Samsung",
            category: "laptops",
            thumbnail: "https://i.dummyjson.com/data/products/7/thumbnail.jpg",
            images: "https://i.dummyjson.com/data/products/7/1.jpg",
            avaliable:true
             
        },
        {
            id: 8,
            title: "Microsoft Surface Laptop 4",
            description: "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
            price: 1499,
            discountPercentage: 10.23,
            rating: 4.43,
            stock: 68,
            brand: "Microsoft Surface",
            category: "laptops",
            thumbnail: "https://i.dummyjson.com/data/products/8/thumbnail.jpg",
            images: "https://i.dummyjson.com/data/products/8/1.jpg",
            avaliable:true    

        },
        {
            id: 9,
            title: "Infinix INBOOK",
            description: "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty",
            price: 1099,
            rating: 4.54,
            stock: 96,
            brand: "Infinix",
            category: "laptops",
            thumbnail: "https://i.dummyjson.com/data/products/9/thumbnail.jpg",
            images:  "https://i.dummyjson.com/data/products/9/1.jpg",
            avaliable:false
        },
        {
            id: 10,
            title: "HP Pavilion 15-DK1056WM",
            description: "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10",
            price: 1099,
            discountPercentage: 6.18,
            rating: 4.43,
            stock: 89,
            brand: "HP Pavilion",
            category: "laptops",
            thumbnail: "https://i.dummyjson.com/data/products/10/thumbnail.jpeg",
            images: "https://i.dummyjson.com/data/products/10/1.jpg",
            avaliable:true
        },
        {
            id: 11,
            title: "perfume Oil",
            description: "Mega Discount, Impression of Acqua Di Gio by GiorgioArmani concentrated attar perfume Oil",
            price: 13,
            discountPercentage: 8.4,
            rating: 4.26,
            stock: 65,
            brand: "Impression of Acqua Di Gio",
            category: "fragrances",
            thumbnail: "https://i.dummyjson.com/data/products/11/thumbnail.jpg",
            images:  "https://i.dummyjson.com/data/products/11/1.jpg",
            avaliable:false
        },
        {
            id: 12,
            title: "Brown Perfume",
            description: "Royal_Mirage Sport Brown Perfume for Men & Women - 120ml",
            price: 40,
            rating: 4,
            stock: 52,
            brand: "Royal_Mirage",
            category: "fragrances",
            thumbnail: "https://i.dummyjson.com/data/products/12/thumbnail.jpg",
            images:  "https://i.dummyjson.com/data/products/12/1.jpg",
            avaliable:true 
        },
        {
            id: 13,
            title: "Fog Scent Xpressio Perfume",
            description: "Product details of Best Fog Scent Xpressio Perfume 100ml For Men cool long lasting perfumes for Men",
            price: 13,
            discountPercentage: 8.14,
            rating: 4.59,
            stock: 61,
            brand: "Fog Scent Xpressio",
            category: "fragrances",
            thumbnail: "https://i.dummyjson.com/data/products/13/thumbnail.webp",
            images:  "https://i.dummyjson.com/data/products/13/1.jpg",
            avaliable:false   
        }
          ]

///////////////////////////

        totalProudct = this.products.length;
        stock=this.products.filter(x => x.avaliable===true).length;
        Outstock=this.products.filter(x => x.avaliable===false).length;


       filterSelected:string='all';

        userFilterSelect(event:any)
        {
       console.log(event);
       this.filterSelected=event;
       
        } 
       ////////////////// 

        @Input()
        displyBSearch:string='';

        onSelectedProduct(product_:any)
        {
            this.selectedProduct=product_;
        }


    //     isStock =  this.products.forEach(element => {
    //     element.avaliable===true;
    //   });

    //   stock= this.isStock;

    
  
      
}

