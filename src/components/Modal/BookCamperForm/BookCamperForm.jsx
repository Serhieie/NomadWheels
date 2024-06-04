import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { bookCamperSchema } from '../../../schemas';
import styles from './BookCamperForm.module.scss';
import { Button } from '../../Button';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { setIsCamperModalOpen } from '../../../redux/campers/campersSlice';
import { StyledDatepicker } from '../DatePicker/DatePicker';
import { format } from 'date-fns';
import { Errors } from './Errors';

export const BookCamperForm = () => {
  const defaultValues = {};
  const dispatch = useDispatch();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: yupResolver(bookCamperSchema),
  });

  const onSubmit = (data) => {
    const formattedData = {
      ...data,
      date: data.date ? format(data.date, 'dd-MM-yyyy') : null,
    };
    console.log(formattedData);
    dispatch(setIsCamperModalOpen(false));
    toast.success('We are on the way to connect with you', {
      position: 'bottom-right',
    });
  };

  return (
    <div className={styles.formWrapper}>
      <form className={styles.rentForm} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.infoWrapper}>
          <h2>Book your campervan now</h2>
          <p>Stay connected! We are always ready to help you.</p>
        </div>
        <div className={styles.inputsWrapper}>
          <label htmlFor="name">
            <input id="name" placeholder="Name" {...register('name')} />
          </label>
          <label htmlFor="email">
            <input id="email" placeholder="Email" {...register('email')} />
          </label>
          <StyledDatepicker control={control} />
          <label htmlFor="comment">
            <textarea id="comment" placeholder="Comment" {...register('comment')} />
          </label>
        </div>
        <Errors errors={errors} />
        <Button type="submit" text="Send" />
      </form>
    </div>
  );
};
