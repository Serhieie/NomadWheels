import { AboutUs } from './AboutUs/AboutUs';
import { Hero } from './Hero/Hero';
import { Spacer } from './Spacer/Spacer';
import { useEffect } from 'react';
import { setPage } from '../../redux/campers/campersSlice';
import { useDispatch } from 'react-redux';

export const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPage(1));
  }, []);
  return (
    <>
      <Hero />
      <AboutUs />
      <Spacer />
    </>
  );
};
