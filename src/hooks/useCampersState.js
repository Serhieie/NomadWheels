import { useSelector } from 'react-redux';
import {
  selectActiveCamper,
  selectCampers,
  selectError,
  selectLoading,
  selectFavorites,
  selectPage,
  selectNoItems,
} from '../redux/campers/campersSelectors';

export const useCampersState = () => {
  const campers = useSelector(selectCampers);
  const favorites = useSelector(selectFavorites);
  const page = useSelector(selectPage);
  const activeCamper = useSelector(selectActiveCamper);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const noItems = useSelector(selectNoItems);

  return {
    campers,
    favorites,
    activeCamper,
    noItems,
    loading,
    error,
    page,
  };
};
