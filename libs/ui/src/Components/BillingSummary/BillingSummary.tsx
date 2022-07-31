import { useState } from 'react';
import { motion } from 'framer-motion';
import NortonLogo from './NortonLogo/NortonLogo';
import { Form } from '@ui';

/* eslint-disable-next-line */
export interface BillingSummaryProps {}

export function BillingSummary(props: BillingSummaryProps) {
  const [show, setShow] = useState<boolean>(false);
  return (
    <div className="shadow-container w-full bg-white p-3 mb-4">
      <div
        className="flex cursor-pointer justify-between items-center"
        onClick={() => setShow(!show)}
      >
        <div>
          <h4 className="leading-5 text-xl font-bold">Billing Summary</h4>
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
          display: show ? 'flex' : 'none',
        }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className={`w-full mt-5 flex justify-between flex-wrap`}
      >
        <div className="p-1 w-5/12 mb-2">
          <p className="font-normal text-base text-textBase">Subtotal</p>
        </div>
        <div className="p-1 w-5/12 mb-2 text-right">
          <p className="font-normal text-base text-textBase">$3720,27</p>
        </div>
        <div className="p-1 w-5/12 mb-2">
          <p className="font-normal text-base text-textBase">Discount</p>
        </div>
        <div className="p-1 w-5/12 mb-2 text-right">
          <p className="font-normal text-base text-textBase">-$749.99</p>
        </div>
        <div className="p-1 w-5/12 mb-2">
          <p className="font-normal text-base text-textBase">
            Warranty (Platinum)
          </p>
          <a href="" className="text-primary no-underline">
            Remove
          </a>
        </div>
        <div className="p-1 w-5/12 mb-2 text-right">
          <p className="font-normal text-base text-textBase">$259.99</p>
        </div>
        <div className="p-1 w-5/12 mb-2">
          <p className="font-normal text-base text-textBase">Shipping</p>
        </div>
        <div className="p-1 w-5/12 mb-2 text-right">
          <p className="font-normal text-base text-textBase">$0.00</p>
        </div>
        <div className="p-1 w-5/12 mb-2">
          <p className="font-normal text-base text-textBase">Tax</p>
        </div>
        <div className="p-1 w-5/12 mb-2 text-right">
          <p className="font-normal text-base text-textBase">$228.72</p>
        </div>
      </motion.div>
      <hr className="mt-4 stroke-borderColor-light" />
      <div>
        <div className="m-2 mb-5 flex justify-between items-center">
          <p className="text-xl font-bold">Grand Total</p>
          <p className="text-xl font-bold">$3,439.00</p>
        </div>
        <Form.TextArea
          className={`border w-full h-[65px] mb-5 border-borderColor-light h-[45px] text-lg rounded bg-transparent pl-4 py-2 pr-1 outline-none text-textBase`}
        />
        <div>
          <input type="checkbox" id="billingAddress" />
          <label className="text-textBase text-sm ml-1">
            Please check to acknowledge our
            <a href="" className="text-primary ml-1">
              Privacy & Terms Policy
            </a>
          </label>
        </div>
        <div className="hover:border-2 hover:border-primary hover:text-primary hover:bg-none h-[40px] cursor-pointer w-full text-white flex justify-center items-center rounded-md shadow-button mt-5 bg-gradient-to-r from-[#2f88ff] to-[#1d68cd]">
          <a href="" className="font-bold text-xl btn_primary">
            Pay $3,439.00
          </a>
        </div>
        <div className="w-full flex justify-center items-center h-[50px]">
          <NortonLogo />
        </div>
      </div>
    </div>
  );
}

export default BillingSummary;
