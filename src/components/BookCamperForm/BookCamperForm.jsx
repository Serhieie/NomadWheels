import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './schema/schema';
import styles from './BookCamperForm.module.scss';
import { Button } from '../CustomItems/Button';

export const BookCamperForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
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
            {errors.name && <p>{errors.name.message}</p>}
          </label>
          <label htmlFor="email">
            <input id="email" placeholder="Email" {...register('email')} />
            {errors.email && <p>{errors.email.message}</p>}
          </label>
          <label htmlFor="date">
            <input
              type="date"
              placeholder="Booking date"
              id="date"
              {...register('date')}
            />
            {errors.date && <p>{errors.date.message}</p>}
          </label>

          <label htmlFor="comment">
            <textarea id="comment" placeholder="Comment" {...register('comment')} />
            {errors.comment && <p>{errors.comment.message}</p>}
          </label>
        </div>

        <Button type="submit" text="Send" handleClick={onSubmit} />
      </form>
    </div>
  );
};
