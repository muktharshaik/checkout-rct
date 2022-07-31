import { CartItems, DiscountCode } from '@ui';
import styles from './CartContainer.module.css';

/* eslint-disable-next-line */
export interface CartContainerProps {}

export function CartContainer(props: CartContainerProps) {
  return (
    <div className="w-[370px] flex flex-col justify-start items-center">
      <CartItems />
      <DiscountCode />
    </div>
  );
}

export default CartContainer;
