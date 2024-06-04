import { Controller } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import styles from './DatePicker.module.scss';
import sprite from '../../../assets/sprite.svg';

export const StyledDatepicker = ({ control }) => {
  const startDate = new Date();

  return (
    <div className={styles.datePickerWrapper}>
      <Controller
        name="date"
        control={control}
        render={({ field }) => (
          <DatePicker
            {...field}
            showIcon
            toggleCalendarOnIconClick
            closeOnScroll={(e) => e.target === document}
            selected={field.value}
            onChange={(date) => {
              field.onChange(date);
            }}
            calendarClassName="calendar"
            placeholderText="Booking date"
            formatWeekDay={(day) => day.substr(0, 3).toUpperCase()}
            calendarStartDay={1}
            className={styles.customInput}
            dateFormat={'dd-MM-yyyy'}
            startDate={startDate}
            minDate={startDate}
            icon={
              <svg className={styles.datePickerIcon} width={20} height={20}>
                <use href={`${sprite}#icon-Calendar`}></use>
              </svg>
            }
          />
        )}
      />
    </div>
  );
};
