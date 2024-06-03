import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { bookCamperSchema } from '../../../schemas';
import styles from './BookCamperForm.module.scss';
import { Button } from '../../CustomItems/Button';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { setIsCamperModalOpen } from '../../../redux/campers/campersSlice';

export const BookCamperForm = ({ hero = false }) => {
  const defaultValues = {};
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: yupResolver(bookCamperSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    dispatch(setIsCamperModalOpen(false));
    toast.success('We are on the way to connect with you', {
      position: 'bottom-right',
    });
  };

  const isSomeError = errors.name || errors.email || errors.date;

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
            {!hero && errors.name && (
              <p className={styles.errorText}>{errors.name.message}</p>
            )}
          </label>
          <label htmlFor="email">
            <input id="email" placeholder="Email" {...register('email')} />
            {!hero && errors.email && (
              <p className={styles.errorText}>{errors.email.message}</p>
            )}
          </label>
          <label htmlFor="date">
            <input
              type="date"
              placeholder="Booking date"
              id="date"
              {...register('date')}
            />
            {!hero && errors.date && (
              <p className={styles.errorText}>{errors.date.message}</p>
            )}
          </label>

          <label htmlFor="comment">
            <textarea id="comment" placeholder="Comment" {...register('comment')} />
            {!hero && errors.comment && (
              <p className={styles.errorText}>{errors.comment.message}</p>
            )}
          </label>
        </div>
        {isSomeError && hero && (
          <div className={styles.errorWrapper}>
            {errors.name && <p className={styles.errorText}> {errors.name.message}</p>}
            {errors.email && <p className={styles.errorText}>{errors.email.message}</p>}
            {errors.date && <p className={styles.errorText}>{errors.date.message}</p>}
            {errors.comment && (
              <p className={styles.errorText}>{errors.comment.message}</p>
            )}
          </div>
        )}
        <Button type="submit" text="Send" />
      </form>
    </div>
  );
};
