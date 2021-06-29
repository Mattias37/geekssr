import React from 'react';
import TagManager from 'react-gtm-module';
import { LigaSponsorsStyled, LigaSponsorsContainer } from './styles';

interface Props {
  children?: React.ReactNode;
  imageUrl?: string;
  link?: string;
  responsiveUrl?: string;
  sizeBG?: string;
}

export const SponsorSection = ({
  children,
  imageUrl,
  responsiveUrl,
  sizeBG = 'cover',
  link,
}: Props) => {
  return (
    <LigaSponsorsStyled
      onClick={() => {
        TagManager.dataLayer({
          dataLayer:{
            event: 'event',
            eventProps: {
                category: 'ADS-tira',
                action: `Click ADS-tira`,
                label: `click-products-preview-${link}`,
                value: `click-products-preview-${link}`
            }
          }
        })
        window.open(link)
      }}
      sizeBG={sizeBG}
      imageUrl={imageUrl}
      responsiveUrl={responsiveUrl}>
      {children && <LigaSponsorsContainer>{children}</LigaSponsorsContainer>}
    </LigaSponsorsStyled>
  );
};
