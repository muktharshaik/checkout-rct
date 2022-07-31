import { CartItem } from '@ui';
import cartItemsData from './mockDataCI';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
/* eslint-disable-next-line */
export interface CartItemsProps {}

export function CartItems(props: CartItemsProps) {
  const [show, setShow] = useState<boolean>(false);
  const sliderRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  return (
    <div className="shadow-container w-full bg-white p-2">
      <div
        className="flex justify-between items-center"
        onClick={() => setShow(!show)}
      >
        <div>
          <h4 className="leading-5 text-xl font-bold">Order Review</h4>
          <p className="text-xs">3 Items in card</p>
        </div>
        <div className="arrow_icon">
          <motion.svg
            width="9"
            height="7"
            viewBox="0 0 9 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            id="arrow_cart"
            animate={{
              rotate: show ? 180 : 0,
            }}
            transition={{ duration: 1 }}
          >
            <path
              d="M5.26799 6.07909C4.86821 6.55848 4.13179 6.55848 3.73201 6.0791L0.238902 1.89046C-0.304217 1.2392 0.158881 0.249999 1.00689 0.249999L7.99311 0.25C8.84112 0.25 9.30422 1.2392 8.7611 1.89046L5.26799 6.07909Z"
              fill="black"
            />
          </motion.svg>
        </div>
      </div>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: show ? 1 : 0,
          y: show ? 1 : 0,
        }}
        transition={{
          duration: 1,
        }}
        ref={sliderRef}
      >
        {cartItemsData.map((item, i) => {
          return (
            <CartItem
              image={item.image}
              text={item.text}
              quanitity={item.quanitity}
              price={item.price}
              discountPrice={item.discountPrice}
            />
          );
        })}
      </motion.div>
    </div>
  );
}

export default CartItems;
