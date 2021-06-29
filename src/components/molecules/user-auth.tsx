import { ReactNode, useEffect } from 'react';
import { Landing } from '../molecules/landing';
import { Loader } from '../atoms/loader';
import { useDispatch, useSelector } from 'react-redux';
import { fetchConfig } from '../../redux/config/action';
import { getConfigLoading } from '../../redux/config/selectors';
// import { handleAuthSession } from '../../../store/profile/actions';

interface Props {
  children: ReactNode;
}
export const UserAuth = (props: Props) => {
  const dispatch = useDispatch();
  console.log('Auth user')
  const loading = useSelector(getConfigLoading);
  useEffect(() => {
    dispatch(fetchConfig());
  }, [dispatch]);

   if (loading) {
    return (
      <Landing>
        <Loader />
      </Landing>
    );
  } 
  return <>{props.children}</>;
};