import styles from './DiscountCode.module.css';

/* eslint-disable-next-line */
export interface DiscountCodeProps {}

export function DiscountCode(props: DiscountCodeProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to DiscountCode!</h1>
    </div>
  );
}

export default DiscountCode;
