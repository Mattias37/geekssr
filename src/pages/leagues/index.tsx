import Head from 'next/head';
import { useEffect } from 'react';
import TagManager from 'react-gtm-module';
import { useDispatch} from 'react-redux';
import MasterLayout from '../../components/templates/MaterLayout'
import { NewHomeMolecule } from '../../components/molecules/home-new-molecule-homes';
import { LigasMenu } from '../../components/organisms/ligas-menu';
import { getLeagues } from '../../redux/leagues/action';


const LigasHome = () => {
    const dispatch = useDispatch();
    TagManager.dataLayer({
        dataLayer:{
          event: 'page_title',
          path: '/ligas-home'
        }
      })
    const fetch = () => {
        dispatch(getLeagues());
    };
    useEffect(() => {
      fetch();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <>
            <Head>
                <title>Nación eSports | Ligas</title>
                <meta name="description" content="Generated by create next app" />
                <meta property="og:description" content="¿Quieres ser jugador E-Sports? Registrate en la plataforma, es gratis y en pocos pasos" />
                <meta property="og:title" content="Nacion E-Sports | Atrevete a unirte al mundo de E-Sports" />
                <meta property="og:image" content="http://localhost:3000/fine.png" />
                <link rel="icon" href="/images/01.png" />
            </Head>
            <div>
                <NewHomeMolecule 
                    img={'https://nacionbe-sports-images.s3.amazonaws.com/66d01211-5653-4fb6-a299-ccfe3b9be7ea.png'}
                    leftTitle={''}
                    leftDescrition={''}
                />
                <LigasMenu />
            </div>
        </>

    )
}

LigasHome.Layout = MasterLayout;
export default LigasHome
