import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import MasterLayout from '../../components/templates/MaterLayout'
import axios from 'axios';
import { Card, Col, Container, Row } from 'react-bootstrap';

const Detail = ({ publication }) => {
    const router = useRouter();
    const { notice } = router.query;
    console.log(publication);
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <meta property="og:title" content={`Nacion E-Sports | ` + notice} />
                <meta property="og:description" content="" />
                <meta property="og:image" content="http://localhost:3000/fine.png" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {publication ? (
                <Container className="my-5">
                    <Row>
                        <Col>
                            <Card>
                                <img src={publication.image.url} className="card-img-top" />
                                <Card.Body>
                                    <h3>{publication.title}</h3>
                                    <div dangerouslySetInnerHTML={{__html: publication.content}}></div>
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
/* export async function getStaticPaths() {
    return {
      paths: [
        { params: { notice: '60d61015c0a0fa6dc115c8f9' } },
      ],
      fallback: true // or false // See the "fallback" section below
    };
  }

export async function getStaticProps (ctx) {
    const { notice } = ctx.params.notice
    try{
        const res = await axios.get(`https://api.nacionesports.com/publications/${notice}`);
    return {
        props:{
            publication: res.data.data
        }
    }
    } catch(error){
        //console.log(error);
    }
} */
export async function getServerSideProps({ query }) {
    const pageRequest = `https://api.nacionesports.com/publications/${query.notice}`
    const res = await axios.get(`https://api.nacionesports.com/publications/${query.notice}`);

  
    return {
        props:{
            publication: res.data.data
        }
    }
  }
export default Detail
