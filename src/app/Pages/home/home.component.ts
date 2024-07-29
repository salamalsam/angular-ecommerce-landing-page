import { Component } from '@angular/core';
import { HeaderComponent } from '../../Components/header/header.component';
import { ProductsComponent } from '../../Components/products/products.component';
import { HomeGalleryComponent } from '../../Components/home-gallery/home-gallery.component';
import { TestimonialsComponent } from '../../Components/testimonials/testimonials.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, ProductsComponent, HomeGalleryComponent, TestimonialsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor() { }
}
