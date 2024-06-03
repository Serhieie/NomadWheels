import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import { MdFilterAltOff } from 'react-icons/md';
import styles from './FilterParts.module.scss';
import { LocationInput } from './Inputs/LocationInput/LocationInput';
import { Button } from '../../CustomItems/Button';
import { Equipment } from './Equipment/Equipment';
import { createDetailsList } from '../../../helpers/createDetailsList';
import { Type } from './Type/Type';
import { createTypeList } from '../../../helpers/createTypeList';
import { validationSchema } from '../../../schemas/filterSchema';
import { resetFilter, selectFilter, setFilter } from '../../../redux/filter/filterSlice';
import { areFiltersSet } from '../../../helpers/areFiltersSet';
import { fetchAdverts } from '../../../redux/campers/campersOperation';
import { setNoItems } from '../../../redux/campers/campersSlice';

export const FilterParts = () => {
  const filter = useSelector(selectFilter);
  const showReset = areFiltersSet(filter);
  const dispatch = useDispatch();
  const labels = createDetailsList();
  const types = createTypeList();

  const { register, handleSubmit, reset } = useForm({
    defaultValues: filter,
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    dispatch(setFilter(data));
  };

  const handleResetFilter = () => {
    dispatch(resetFilter());
    dispatch(setNoItems(false));
    dispatch(fetchAdverts({ page: 1 }));
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
        <Button type="submit" text="Search" />
      </form>
    </div>
  );
};
