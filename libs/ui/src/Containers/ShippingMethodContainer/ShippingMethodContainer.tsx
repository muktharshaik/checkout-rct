import styles from './ShippingMethodContainer.module.css';

/* eslint-disable-next-line */
export interface ShippingMethodContainerProps {}

export function ShippingMethodContainer(props: ShippingMethodContainerProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ShippingMethodContainer!</h1>
    </div>
  );
}

export default ShippingMethodContainer;
