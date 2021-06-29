import { Fragment } from 'react';
import { BannerLigas } from '../../organisms/liga-menu-banners';
import { MainDiv } from './style';
import { useSelector } from 'react-redux';
import { getAllLeague } from '../../../redux/leagues/selectors';
import { SectionTitle } from '../../molecules/section-title';
import { Breadcrumb } from '../../molecules/Breadcrumb';

interface Params {
  nan: string;
}
export const LigasMenu = () => {
  const leaguesGrid = useSelector(getAllLeague);
  return (
    <Fragment>
        <Breadcrumb text='Grandes torneos' type={2} />
        <SectionTitle text='Torneos Nación E-Sports' />
        <MainDiv>
          {leaguesGrid && leaguesGrid.map((i) => <BannerLigas key={i.id} {...i}  />)}
        </MainDiv>
    </Fragment>
  );
};
