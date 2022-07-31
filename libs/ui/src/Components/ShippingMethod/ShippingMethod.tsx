import styles from './ShippingMethod.module.css';

/* eslint-disable-next-line */
export interface ShippingMethodProps {}

export function ShippingMethod(props: ShippingMethodProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ShippingMethod!</h1>
    </div>
  );
}

export default ShippingMethod;
