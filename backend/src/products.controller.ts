import { Controller, Get } from '@nestjs/common';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  rating: number;
}

@Controller('products')
export class ProductsController {
  @Get()
  list(): Product[] {
    // Mock data for local dev
    return [
      {
        id: 'p1',
        name: 'Veste denim oversize',
        price: 59.9,
        image: 'https://picsum.photos/seed/p1/600/600',
        rating: 4.5,
      },
      {
        id: 'p2',
        name: 'Robe midi satin',
        price: 79.0,
        image: 'https://picsum.photos/seed/p2/600/600',
        rating: 4.2,
      },
      {
        id: 'p3',
        name: 'Sneakers blanches',
        price: 89.9,
        image: 'https://picsum.photos/seed/p3/600/600',
        rating: 4.8,
      },
      {
        id: 'p4',
        name: 'Chemise lin',
        price: 49.5,
        image: 'https://picsum.photos/seed/p4/600/600',
        rating: 4.1,
      },
      {
        id: 'p5',
        name: 'Pantalon cargo',
        price: 69.0,
        image: 'https://picsum.photos/seed/p5/600/600',
        rating: 4.0,
      },
      {
        id: 'p6',
        name: 'Blazer structuré',
        price: 129.0,
        image: 'https://picsum.photos/seed/p6/600/600',
        rating: 4.6,
      },
    ];
  }
}
