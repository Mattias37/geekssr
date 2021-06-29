import { useEffect } from 'react'
import TagManager from 'react-gtm-module';
import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';
import MasterLayout from '../../components/templates/MaterLayout';
import { NewHomeMolecule } from '../../components/molecules/home-new-molecule-homes';
import { Breadcrumb } from '../../components/molecules/Breadcrumb';
import { SectionTitle } from '../../components/molecules/section-title';
import { HomeSlidersProducts } from '../../components/organisms/home-sliders';
import { Loader } from '../../components/atoms/loader';
import { SponsorSection } from '../../components/molecules/sponsor-section-remake'
import { getHomeSelector } from '../../redux/layout/selector';
import { getHome } from '../../redux/layout/action';
import { getSponsorsSelector } from '../../redux/config/selectors';
import { getSponsors } from '../../redux/config/action';
import axios from 'axios';
const Store = ({ products }) => {    
  // console.log(products);
  const dispatch = useDispatch();
  const homeSlector = useSelector(getHomeSelector);
  const sponsorSelector = useSelector(getSponsorsSelector);
  TagManager.dataLayer({
    dataLayer:{
      event: 'page_title',
      path: `/store-home`
    }
  })
  useEffect(() => {
     //dispatch(getShop());
    dispatch(getSponsors());
    dispatch(getHome());
  }, [dispatch]);
  if (!homeSlector || !sponsorSelector) return <Loader />;
    return (
        <>
        <Head>
          <title>Nación eSports | Tienda</title>
          <meta name="description" content="Generated by create next app" />
          <meta property="og:description" content="¿Quieres ser jugador E-Sports? Registrate en la plataforma, es gratis y en pocos pasos" />
          <meta property="og:title" content="Nacion E-Sports | Atrevete a unirte al mundo de E-Sports" />
          <meta property="og:image" content="http://localhost:3000/fine.png" />
          <link rel="icon" href="/images/01.png" />
        </Head>
        <div>
            <NewHomeMolecule 
                img={'https://nacionbe-sports-images.s3.amazonaws.com/c23404e0-950f-4331-9e6c-db20838fb44d.png'}
                leftTitle={''}
                leftDescrition={''}
            />
            <Breadcrumb text='Tienda' type={2} />
            <SectionTitle text='Tienda' />
            <HomeSlidersProducts
              imageList={products.imageList}
              productList={products.productList} 
            /> 
            <HomeSlidersProducts
              imageList={products.imageList}
              productList={products.productList} 
            /> 
            <SponsorSection
              imageUrl={sponsorSelector[0]?.img}
              link={sponsorSelector[0]?.url}
            />
            <HomeSlidersProducts
              imageList={products.imageList}
              productList={products.productList} 
            /> 
        </div>
    </>
    )
}

Store.Layout = MasterLayout;
export async function getServerSideProps({ query }) {
  const res = await axios.get(`https://api.nacionesports.com/home`);
   // console.log(res.data);
  return {
      props:{
          products: res.data
      }
  }
}
export default Store
