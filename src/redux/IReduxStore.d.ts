interface LayoutState {
  drawerSidebar: boolean;
  exitBr: boolean;
  showDisabledProduct: boolean;
  cartSidebar: boolean;
  appBar: boolean;
  search: string;
}

interface Response {
  id: string;
  isEnabled?: boolean;
  createdAt: string;
  updatedAt: string;
}
interface ErrorCustom {
  id: string;
  message: any;
  close?: number;
}
