import styles from './PaymentMethod.module.css';

/* eslint-disable-next-line */
export interface PaymentMethodProps {}

export function PaymentMethod(props: PaymentMethodProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to PaymentMethod!</h1>
    </div>
  );
}

export default PaymentMethod;
