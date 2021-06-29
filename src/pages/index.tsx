import Head from 'next/head';
import MasterLayout from '../components/templates/MaterLayout';
//Imports
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TagManager from 'react-gtm-module'
import { TextBody } from './stylesHome';
import { useRouter } from 'next/router'
//Components
import { Landing } from '../components/molecules/landing';
import { Loader } from '../components/atoms/loader';
import { NewHomeMolecule } from '../components/molecules/home-news-banner';
import { SponsorSection } from '../components/molecules/sponsor-section-remake';
import { HomeSlidersProducts } from '../components/organisms/home-sliders';
import {  HomeSlidersNews } from '../components/organisms/home-sliders-news';
//Api
import { getHome, getHomePrincipal } from '../redux/layout/action';
import { getHomeSelector, getHomeSelectorPrincipal } from '../redux/layout/selector';
import { getSponsors, getPublications } from '../redux/config/action';
import { getSponsorsSelector, getPublicationsSelector } from '../redux/config/selectors';
interface Params {
  nan: string;
}

const Home = (props: RouteComponentProps<Params>) => {
  const dispatch = useDispatch();
  const router = useRouter()
  const homeSlector = useSelector(getHomeSelector);
  const sponsorSelector = useSelector(getSponsorsSelector);
  const publicationsSelector = useSelector(getPublicationsSelector);
  const publicationSelectorPrincipal = useSelector(getHomeSelectorPrincipal);
  useEffect(() => {
    TagManager.dataLayer({
      dataLayer:{
        event: 'page_title',
        path: '/home'
      }
    })
  }, [])
  useEffect(() => {
    dispatch(getHome());
    dispatch(getSponsors());
    dispatch(getPublications());
    dispatch(getHomePrincipal());
  }, [dispatch]);
  
  if( !homeSlector || !sponsorSelector || !publicationSelectorPrincipal) return (
    <Landing>
      <Loader />
    </Landing>
  );
  return (
        <>
        <Head>
          <title>Nación eSports | Bienvenido</title>
          <meta name="description" content="Generated by create next app" />
          <meta property="og:description" content="¿Quieres ser jugador E-Sports? Registrate en la plataforma, es gratis y en pocos pasos" />
          <meta property="og:title" content="Nacion E-Sports | Atrevete a unirte al mundo de E-Sports" />
          <meta property="og:image" content="http://localhost:3000/fine.png" />
          <link rel="icon" href="/images/01.png" />
        </Head>
        <div>
        <NewHomeMolecule news={publicationSelectorPrincipal}/>
        {true ? (
          <>
            <HomeSlidersNews 
              publicationsList={publicationsSelector }
            />
            <TextBody onClick={() => {
              TagManager.dataLayer({
                dataLayer:{
                  event: 'event',
                  path: '/home',
                  eventProps: {
                      category: 'Ver el archivo de noticias',
                      action: `Click Ver el archivo de noticias`,
                      label: `click-view-more-news`,
                      value: `click-view-more-news`
                  }
                }
              })
              
              dispatch( router.push('/notices'))
              }}>VER EL ARCHIVO DE NOTICIAS »</TextBody>
            <SponsorSection
                imageUrl={sponsorSelector[0]?.img}
                link={sponsorSelector[0]?.url} 
            />
            <HomeSlidersProducts
              imageList={homeSlector.imageList} 
              productList={homeSlector.productList} 
            /> 
            <TextBody onClick={() => {
              TagManager.dataLayer({
                dataLayer:{
                  event: 'event',
                  path: '/home',
                  eventProps: {
                      category: 'Ver toda la tienda',
                      action: `Clic Ver toda la tienda`,
                      label: `click-view-more-products`,
                      value: `click-view-more-products`
                  }
                }
              })
              dispatch( router.push('/shop'))
            }}>VER TODA LA TIENDA »</TextBody>
        
        </>
        ) : (
          <Loader />
        )}
        </div>
    </>
  );
}

Home.Layout = MasterLayout;
export default Home;
