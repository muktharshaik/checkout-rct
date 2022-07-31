import { useState } from 'react';
import paypal from '../../../public/paypal.svg';
import cCard from '../../../public/cards.svg';
import { Form } from '@ui';

/* eslint-disable-next-line */
export interface PaymentMethodContainerProps {}

export function PaymentMethodContainer(props: PaymentMethodContainerProps) {
  const [cardChecked, setCardChecked] = useState<boolean>(false);
  const [paypalChecked, setPaypalChecked] = useState<boolean>(true);
  const [isValid, setIsValid] = useState<boolean>(false);

  function handleCheckInputChange(e) {
    if (e.target.id == 'cc') {
      setCardChecked(true);
      setPaypalChecked(false);
    } else {
      setCardChecked(false);
      setPaypalChecked(true);
    }
  }
  function handleInputChange(e) {
    if (e.target.value.length === 16) {
      console.log('HERE');
      setIsValid(true);
    }
  }
  return (
    <div className="shadow-container w-full flex flex-col justify-start bg-white rounded-[4px] p-3 mb-4">
      <div className="mb-6">
        <p className="text-xl font-bold">Payment Method</p>
      </div>
      <div className="flex flex-col justify-start">
        <label
          id="shippingContainer"
          className={`select-none flex justify-between text-base cursor-pointer mb-3 px-4 mr-2 rounded-[4px] border ${
            paypalChecked ? 'border-primary' : 'border-borderColor-dark'
          }`}
        >
          <div className="flex border border-black justify-center items-center">
            <input
              type="radio"
              name="shipping"
              id="paypal"
              checked={paypalChecked}
              onChange={handleCheckInputChange}
            />
          </div>
          <div className="flex w-11/12 border border-black justify-between items-center">
            <p className="text-xl border border-black font-semibold">PayPal</p>
            <div className="ml-4 border border-black text-textBase">
              <p>
                You will be redirected to the PayPal website after submitting
                your order
              </p>
            </div>
            <div className="border border-black h-[50px] w-[50px] flex justify-center items-center">
              <img src={paypal} alt="potstfast" />
            </div>
          </div>
        </label>
        <label
          id="shippingContainer"
          className={`select-none z-0 flex flex-wrap justify-between text-base cursor-pointer mb-3 px-4 mr-2 rounded-[4px] border ${
            cardChecked ? 'border-primary' : 'border-borderColor-dark'
          }`}
        >
          <div className="flex border z-10 border-black justify-center items-center">
            <input
              type="radio"
              name="shipping"
              id="cc"
              checked={cardChecked}
              onChange={handleCheckInputChange}
            />
          </div>
          <div className="z-10 flex w-11/12 border border-black justify-between items-center">
            <p className="z-10 text-xl border border-black font-semibold ">
              Pay with Credit Card
            </p>
            <div className="border border-black h-[50px] flex justify-center items-center">
              <img src={cCard} alt="potstfast" />
            </div>
          </div>
          <div className="z-10 flex flex-wrap justify-between border border-black mb-2">
            <div className="w-[230px] mt-3">
              <Form.Input
                label="Card Number"
                type="number"
                valid={isValid}
                disabled={!cardChecked}
                className={`border font-semibold border-borderColor-light h-[40px] text-sm rounded bg-transparent pl-4 py-1 pr-1 outline-none text-textBase`}
                onChange={handleInputChange}
              />
            </div>
            <div className="w-[230px] mt-3">
              <Form.Input
                label="Expiration Date"
                type="number"
                disabled={!cardChecked}
                className={`border font-semibold border-borderColor-light h-[40px] text-sm rounded bg-transparent pl-4 py-1 pr-1 outline-none text-textBase`}
              />
            </div>
            <div className="w-[230px] mt-3">
              <Form.Input
                label="Card Security Code"
                type="password"
                disabled={!cardChecked}
                className={`border font-semibold border-borderColor-light h-[40px] text-sm rounded bg-transparent pl-4 py-1 pr-1 outline-none text-textBase`}
              />
            </div>
            <div className="w-[250px] mt-3 flex items-center">
              <a href="" className="text-primary no-underline">
                What is this?
              </a>
            </div>
          </div>
        </label>
      </div>
    </div>
  );
}

export default PaymentMethodContainer;
