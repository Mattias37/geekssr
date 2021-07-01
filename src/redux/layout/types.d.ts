interface HomeSection {
  articles: ArticleHome[];
  sponsor: Sponsor;
  productList: ProductHome[];
  imageList: ImageList[];
}

interface ArticleHome {
  image: string;
  type: string;
  _id: string;
  title: string;
  content: string;
}

interface ImageList {
  id: number;
  img: string;
}

interface ProductList {
  products: ProductHome[];
}
interface publicationsList{
  publications: Publications[];
}
interface Publications {
  author: { name: string;id: string };
  category: string;
  title: string;
  content: string;
  image: string;
  publishDate: string;
}


interface ProductHome {
  _id: string;
  name: string;
  price: number;
  imgCenter: string;
  facebookLink?: string;
  whatsappLink?: string;
  iframeTransmission?:string;
}



interface Sponsor {
  id: number;
  url: string;
  responsive: string;
}

interface ModalError {
  show: boolean;
  message: string;
}

type LayoutActionType =
  | { type: '@@LAYOUT/DRAWER_SIDEBAR'; payload: boolean }
  | { type: '@@LAYOUT/LOADING'; payload: boolean }
  | { type: '@@LAYOUT/HOME'; payload: HomeSection }
  | { type: '@@LAYOUT/HOME_PRINCIPAL'; payload: any[] }
  | { type: '@@LAYOUT/CART_SIDEBAR'; payload: boolean }
  | { type: '@@LAYOUT/APP_BAR'; payload: boolean }
  | { type: '@@LAYOUT/EXIT_BR'; payload: boolean }
  | { type: '@@LAYOUT/SEARCH'; payload: string }
  | { type: '@@LAYOUT/DISABLED_PRODUCT'; payload: boolean } 
  | { type: '@@LAYOUT/DISABLED_PRODUCT'; payload: boolean }
  | { type: '@@LAYOUT/INFO_MODAL'; payload: ModalError }; 

  

interface LayoutState {
  drawerSidebar: boolean;
  cartSidebar: boolean;
  appBar: boolean;
  showDisabledProduct: boolean;
  search: string;
  loading: boolean;
  exitBr: boolean;
  homeSection?: HomeSection;
  homeSectionPrincipal?: any;
  infoModalShow: ModalError;
}

type AsyncAction<R = void> = (
  args?: any,
  args1?: any,
) => ThunkAction<Promise<R>, ReduxState, ThunksArgs, SupportedActions>;