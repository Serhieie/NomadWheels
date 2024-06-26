import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import { MdFilterAltOff } from 'react-icons/md';
import styles from './FilterParts.module.scss';
import { LocationInput } from './Inputs/LocationInput/LocationInput';
import { Button } from '../../Button';
import { Equipment } from './Equipment/Equipment';
import { createDetailsList, createTypeList, areFiltersSet } from '../../../helpers';
import { Type } from './Type/Type';
import { resetFilter, selectFilter, setFilter } from '../../../redux/filter/filterSlice';
import { setNoItems } from '../../../redux/campers/campersSlice';
import { filterSchema } from '../../../schemas';

export const FilterParts = () => {
  const filter = useSelector(selectFilter);
  const showReset = areFiltersSet(filter);
  const dispatch = useDispatch();
  const labels = createDetailsList();
  const types = createTypeList();

  const { register, handleSubmit, reset } = useForm({
    defaultValues: filter,
    resolver: yupResolver(filterSchema),
  });

  const onSubmit = (data) => {
    const { location } = data;
    const trimmedLocation = location.trim();
    dispatch(setFilter({ ...data, location: trimmedLocation }));
  };

  const handleResetFilter = () => {
    dispatch(resetFilter());
    dispatch(setNoItems(false));
    reset({
      location: '',
      details: [],
      form: '',
    });
  };

  return (
    <div className={styles.formWrapper}>
      {showReset && (
        <span onClick={handleResetFilter} className={styles.filterReset}>
          <MdFilterAltOff size={22} />
          Reset
        </span>
      )}
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <LocationInput register={register} />
        <Equipment labels={labels} register={register} />
        <Type types={types} register={register} />
        <Button type="submit" text="Search" filters={true} />
      </form>
    </div>
  );
};
