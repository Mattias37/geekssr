import { AxiosInstance } from 'axios';

export class ShopService {
  constructor(private client: AxiosInstance) {}

  getHomeShop() {
    return this.client.get('/products');
  }

  getShopProductDetail(id: string) {
    return this.client.get(`/products/${id}`);
  }
  getShopCategory(id: string) {
    return this.client.get(`/categories/${id}/products`);
  }
  getShopCategory1(id: string) {
    return this.client.get(`/categories/${id}`);
  }
}
