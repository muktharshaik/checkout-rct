import styles from './BillingAddress.module.css';

/* eslint-disable-next-line */
export interface BillingAddressProps {}

export function BillingAddress(props: BillingAddressProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to BillingAddress!</h1>
    </div>
  );
}

export default BillingAddress;
