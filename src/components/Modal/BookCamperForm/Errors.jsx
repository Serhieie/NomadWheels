import styles from './BookCamperForm.module.scss';

export const Errors = ({ errors }) => {
  const isSomeError = errors.name || errors.email || errors.date;
  return (
    isSomeError && (
      <div className={styles.errorWrapper}>
        {errors.name && <p className={styles.errorText}> {errors.name.message}</p>}
        {errors.email && <p className={styles.errorText}>{errors.email.message}</p>}
        {errors.date && <p className={styles.errorText}>{errors.date.message}</p>}
        {errors.comment && <p className={styles.errorText}>{errors.comment.message}</p>}
      </div>
    )
  );
};
