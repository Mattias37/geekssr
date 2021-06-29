import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
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
                <title>Producto</title>
                <meta property="og:title" content={`Nacion E-Sports | ` + store} />
                <meta property="og:description" content="" />
                <meta property="og:image" content="http://localhost:3000/fine.png" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {publication ? (
                <Container className="my-5">
                    <Row>
                        <Col>
                            <Card>
                                <img src={publication.imgCenter} className="card-img-top" />
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
