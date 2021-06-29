import React from 'react';
import TagManager from 'react-gtm-module';
import { Row } from 'react-bootstrap';
import { /* FacebookBadge, */ WhatsAppBadge } from './styles';
import * as Io from 'react-icons/io';

export const ShopIconBuy = ({ name, price, url }: any) => {
  return (
    <Row md="12" className="h-custom-40" style={{width: '100%'}}>
{/*       <div
        style={{
          color: 'white',
          backgroundColor: '#FF0055',
          borderRadius: 5,
          textTransform: 'uppercase',
          width: 115,
          height: 28,
          fontWeight: 'bold',
          textAlign: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        comprar por
      </div> */}
      {/* <FacebookBadge onClick={() => window.open('http://m.me/allensmilko')} /> */}
      <WhatsAppBadge onClick={() =>{
                  TagManager.dataLayer({
                    dataLayer:{
                      event: 'event',
                      eventProps: {
                          category: 'Presentacion de productos',
                          action: 'Clic Presentacion de productos',
                          label: `click-products-CTA-whatsapp-${name}`,
                          value: `click-products-CTA-whatsapp-${name}`
                      }
                    }
                  })
          window.open(
            `https://api.whatsapp.com/send?phone=573206969453&text=Quiero%20comprar%20uno%20de%20sus%20productos!%0Aproducto%3A%20${name}%0Aprecio%3A%20${price}%0Aimage%3A%20${url}`,
          )}
        }>
        <Io.IoLogoWhatsapp 
        />
        <h3>¡Compra ya!</h3>
      </WhatsAppBadge>
    </Row>
  );
};
