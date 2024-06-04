import { useSelector } from 'react-redux';
import {
  selectActiveCamper,
  selectCampers,
  selectError,
  selectLoading,
  selectFavorites,
  selectPage,
  selectNoItems,
  selectIsCamperModalOpen,
  selectFilteredLoading,
} from '../redux/campers/campersSelectors';

export const useCampersState = () => {
  const campers = useSelector(selectCampers);
  const isCamperModalOpen = useSelector(selectIsCamperModalOpen);
  const favorites = useSelector(selectFavorites);
  const page = useSelector(selectPage);
  const activeCamper = useSelector(selectActiveCamper);
  const filteredLoading = useSelector(selectFilteredLoading);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const noItems = useSelector(selectNoItems);

  return {
    campers,
    filteredLoading,
    isCamperModalOpen,
    favorites,
    activeCamper,
    noItems,
    loading,
    error,
    page,
  };
};
