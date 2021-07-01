import { format, compareDesc } from 'date-fns';
import { es } from 'date-fns/locale';
import { useSelector } from 'react-redux';
import Image from 'next/image';
//import { Layout } from '../../pages/layout';
import { MainDiv, StyledDiv, TextDescription, StyledDivInner, StyledDivInnerColumn, StyledPrize, StyledPriceTop, StyledPriceTopInner, StyledPriceText, StyledPriceTextPrice, ContainerInnerRow, ContainerInnerRowTextBold } from './styles';

import { Loader } from '../../atoms/loader';
import { getLeagueSelectedSelector } from '../../../redux/leagues/selectors';
import { SectionTitle } from '../../molecules/section-title';

type FlexAlignSetting = 'center' | 'flex-end' | 'flex-start';

interface Props {
  text: string;
  alignItem?: FlexAlignSetting;
  textAlign?: AlignSetting;
}

export const RegisterPageAction = ({
  text,
  alignItem = 'flex-start',
  textAlign = 'left',
}: Props) => {
  const medal = '/images/medal1.png';
  const medal2 = '/images/medal2.png';
  const leagueSelected = useSelector(getLeagueSelectedSelector);
  if (leagueSelected) {
    return (
      <MainDiv>
        <StyledDiv alignItem={alignItem}>
          <StyledDivInner>
            <StyledDivInnerColumn>
              <SectionTitle text={leagueSelected.name} />
              <TextDescription textAlign={textAlign}>
                {leagueSelected.description}
              </TextDescription>
              <ContainerInnerRow>
                <ContainerInnerRowTextBold>
                  Modalidad:
                </ContainerInnerRowTextBold>
                {leagueSelected.modality}
              </ContainerInnerRow>
              <ContainerInnerRow>
                <ContainerInnerRowTextBold>
                  Modo de juego:
                </ContainerInnerRowTextBold>
                {leagueSelected.modality}
              </ContainerInnerRow>
              <ContainerInnerRow>
                <ContainerInnerRowTextBold>
                  Mapa: 
                </ContainerInnerRowTextBold>
                {leagueSelected.modality}
              </ContainerInnerRow>
              <ContainerInnerRow>
                <ContainerInnerRowTextBold>
                  Modo de puntuación:
                </ContainerInnerRowTextBold>
                {leagueSelected.scoringCriteria}
              </ContainerInnerRow>
              <ContainerInnerRow>
                <ContainerInnerRowTextBold>
                  Nro de participantes:
                </ContainerInnerRowTextBold>
                {leagueSelected.participantsNumber}
              </ContainerInnerRow>
            <SectionTitle text='Cronograma' />
            <ContainerInnerRow>
                <ContainerInnerRowTextBold>
                  Fechas de inscripción:
                </ContainerInnerRowTextBold>
                {compareDesc( new Date(), new Date(leagueSelected.registrationEndDate)) === -1 ?
                'Inscripciones Cerradas' : 
                <>
                  {format(new Date(leagueSelected.registrationStartDate), " MMMM d','yy", {
                        locale: es,
                      })}-
                  {format(new Date(leagueSelected.registrationEndDate), " MMMM d','yy", {
                        locale: es,
                      })}
                </>}
              </ContainerInnerRow>
              <ContainerInnerRow>
                <ContainerInnerRowTextBold>
                  Fechas de desarollo:
                </ContainerInnerRowTextBold>
                {format(new Date(leagueSelected.startDate), " MMMM d','yy", {
                        locale: es,
                      })}-
                  {format(new Date(leagueSelected.endDate), " MMMM d','yy", {
                        locale: es,
                      })}
              </ContainerInnerRow>
            </StyledDivInnerColumn>
            <StyledDivInnerColumn>
            <SectionTitle text='Premios' />
              <StyledDivInner>
                {leagueSelected.awards.map((prize: any, index: number) =>
                <StyledPrize key={index + 1} type={index + 1}>
                  <StyledPriceTop>
                    <StyledPriceTopInner>
                      <Image src={index === 0 ? medal : medal2} alt="medal" layout="fill"/>
                    </StyledPriceTopInner>
                  </StyledPriceTop>
                  <StyledPriceText>
                    {prize.label}
                  </StyledPriceText>
                  <StyledPriceTextPrice>
                    {prize.award}
                  </StyledPriceTextPrice>
                </StyledPrize>)}
              </StyledDivInner>
            </StyledDivInnerColumn>
          </StyledDivInner>
        </StyledDiv>
      </MainDiv>
  );
  } else{
    return <Loader />;
  }
  
};
