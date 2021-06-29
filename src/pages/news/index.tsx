import React, { useEffect, useState } from 'react'
import TagManager from 'react-gtm-module';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import Head from 'next/head';
import axios from 'axios'
import MasterLayout from '../../components/templates/MaterLayout';
import { NewHomeMolecule } from '../../components/molecules/home-new-molecule-homes';
import { Breadcrumb } from '../../components/molecules/Breadcrumb';
import { apiClient } from '../../services';

const News = ({ news }) => {
    TagManager.dataLayer({
        dataLayer:{
          event: 'page_title',
          path: `/noticias-home`
        }
      })
    // const [news, setNews] = useState([]);
    const fetchNews = async () => {
      try {
        const res = await apiClient.NoticeService.getNotices();
        //setNews(res.data.data);
      }catch (error) {
        console.log(error.response.data.message);
      }
    }
    useEffect(() => {
        fetchNews();
    }, [])
    return (
        <div>
            <Head>
                <title>Nacion E-Sports | Noticias</title>
                <meta property="og:description" content="Enterate de las noticias y novedades del mundo Gamer y Geek" />
                <meta property="og:title" content="Nacion E-Sports | Atrevete a unirte al mundo de E-Sports" />
                <meta property="og:image" content="http://localhost:3000/fine.png" />
                <link rel="icon" href="/images/01.png" />
            </Head>
            <div>
            <NewHomeMolecule 
                img={'https://nacionbe-sports-images.s3.amazonaws.com/70b88083-7b7d-42a9-b5ba-3e3424f343c6.png'}
                leftTitle={''}
                leftDescrition={''}
            />
            <Breadcrumb text='Noticias' type={2} />
                {news.map((notice, i) => (
                    <Row key={i} className="mb-3 border-bottom">
                        <Link href={`/news/${notice.id}`}>
                            <Col role="button">
                                <Row>
                                    <Col>
                                        <img src={notice.image} className="img-fluid" />
                                    </Col>
                                    <Col>
                                        <h5>{notice.title}</h5>
                                        <div className="d-flex justify-content-between mb-3">
                                            <small>By {notice.author.name}</small>
                                            <small>{new Date(notice.publishDate).toLocaleDateString()}</small>
                                        </div>
                                        <div className="text-muted" dangerouslySetInnerHTML={{ __html: notice.content.substring(0, 250) + '...' }}></div>
                                    </Col>
                                </Row>
                            </Col>
                        </Link>
                    </Row>
                ))}
            </div>
        </div>
    )
}

News.Layout = MasterLayout;
export async function getStaticProps (ctx) {
    try{
        const res = await axios.get('https://api.nacionesports.com/publications');
    return {
        props:{
            news: res.data.data
        }
    }
    } catch(error){
        //console.log(error);
    }
}
export default News
