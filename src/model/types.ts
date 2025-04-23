export interface Product {
    name: string;
    price: number;
    id: number;
    image: string;
    categoryId: number;
    description?: string;
}

export interface CartDetail {
    product: Product;
    quantity: number;
}

export interface Category {
    id: number;
    name: string;
    description: string;
}