import styles from './ShippingAddress.module.css';

/* eslint-disable-next-line */
export interface ShippingAddressProps {}

export function ShippingAddress(props: ShippingAddressProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ShippingAddress!</h1>
    </div>
  );
}

export default ShippingAddress;
