import { motion } from 'framer-motion';
import { useState } from 'react';
import { Form } from '../Form';

/* eslint-disable-next-line */
export interface DiscountCodeProps {}

export function DiscountCode(props: DiscountCodeProps) {
  const [show, setShow] = useState<boolean>(false);
  const [isValid, setIsvalid] = useState<boolean>(false);

  const handleInputChange = (e: any) => {
    if (e.target.value.length > 3) {
      setIsvalid(true);
    } else {
      setIsvalid(false);
    }
  };
  return (
    <div className="shadow-container w-full rounded-[4px] bg-white p-3 mb-4">
      <div
        className="flex cursor-pointer justify-between items-center"
        onClick={() => setShow(!show)}
      >
        <div>
          <h4 className="leading-5 text-xl font-bold">Discount Codes</h4>
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
            transition={{ duration: 0.5 }}
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
          display: 'none',
        }}
        animate={{
          opacity: show ? 1 : 0,
          display: show ? 'block' : 'none',
        }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className={`w-full mt-5`}
      >
        <Form.Input
          label="Enter your coupon code"
          type="text"
          valid={isValid}
          className={`border font-semibold border-borderColor-light uppercase h-[45px] text-lg rounded bg-transparent pl-4 py-1 pr-1 outline-none text-textBase`}
          onChange={handleInputChange}
        />
      </motion.div>
    </div>
  );
}

export default DiscountCode;
