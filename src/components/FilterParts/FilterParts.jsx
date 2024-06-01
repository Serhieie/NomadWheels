import { useForm } from 'react-hook-form';
import styles from './FilterParts.module.scss';
import { LocationInput } from './Inputs/LocationInput/LocationInput';
import { Button } from '../CustomItems/Button';

export const FilterParts = () => {
  const defaultValues = {
    locationInput: '',
  };
  const { register, handleSubmit } = useForm({ defaultValues });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className={styles.formSidebar}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <LocationInput register={register} />
        <Button type="submit" text="Search" />
      </form>
    </div>
  );
};
