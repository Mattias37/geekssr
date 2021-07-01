import Head from 'next/head';
import axios from 'axios';
import MasterLayout from '../../components/templates/MaterLayout';
import { LigaSelected } from '../../components/organisms/liga-selected';

const Detail = ({ publication }) => {
    return (
        <div>
            <Head>
                <title>{publication.name} | Nación eSports</title>
                <meta property="og:title" content={`Nacion E-Sports | ` + publication?.name} />
                <meta property="og:description" content={publication?.description.substring(0, 200)} />
                <meta property="og:image" content={publication?.banner} />
                <link rel="icon" href="/images/01.png" />
            </Head>
            {publication ? (
                <LigaSelected />
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}

Detail.Layout = MasterLayout;
export async function getServerSideProps({ query }) {
    const res = await axios.get(`https://api.nacionesports.com/leagues/${query.leagueid}`);
    return {
        props:{
            publication: res.data.data
        }
    }
  }
export default Detail
