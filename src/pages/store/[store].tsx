import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Image from 'next/image';
import MasterLayout from '../../components/templates/MaterLayout'
import axios from 'axios';
import { Card, Col, Container, Row } from 'react-bootstrap';

import { ShopIconBuy } from '../../components/molecules/shop-icono-contacts';
const Detail = ({ publication }) => {

    const router = useRouter();
    const { store } = router.query;
    return (
        <div>
            <Head>
                <title>{publication.name} | Nación eSports</title>
                <meta property="og:title" content={`Nacion E-Sports | ` + publication.name} />
                <meta property="og:description" content={publication.name.substring(0, 200)} />
                <meta property="og:image" content={publication.imgCenter} />
                <link rel="icon" href="/images/01.png" />
            </Head>
            {publication ? (
                <Container className="my-5">
                    <Row>
                        <Col>
                            <Card>
                                <div style={{ position: "relative", minWidth: "200px", height: "400px" }}>
                                    <Image id='style-img' src={publication.imgCenter} alt='e-spirts liga logo' layout="fill" objectFit="cover"/>
                                </div>
                                <Card.Body>
                                    <h3>{publication.name}</h3>
                                    <h3>{publication.price}</h3>
                                    <ShopIconBuy
                                        name={publication.name}
                                        price={publication.price}
                                        url={publication.imgCenter}
                                    />
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}

Detail.Layout = MasterLayout;

export async function getServerSideProps({ query }) {
    const res = await axios.get(`https://api.nacionesports.com/products/${query.store}`);
    console.log(res);
    return {
        props:{
            publication: res.data.data
        }
    }
  }
export default Detail
