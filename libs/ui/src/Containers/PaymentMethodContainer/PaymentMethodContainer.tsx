/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useState } from 'react';
import paypal from '../../../public/paypal.svg';
import cCard from '../../../public/cards.svg';
import { Disclaimer, Form } from '@ui';

/* eslint-disable-next-line */
export interface PaymentMethodContainerProps {}

export function PaymentMethodContainer(props: PaymentMethodContainerProps) {
  const [cardChecked, setCardChecked] = useState<boolean>(false);
  const [paypalChecked, setPaypalChecked] = useState<boolean>(true);
  const [isValid, setIsValid] = useState<boolean>(false);

  function handleCheckInputChange(e: any) {
    if (e.target.id == 'cc') {
      setCardChecked(true);
      setPaypalChecked(false);
    } else {
      setCardChecked(false);
      setPaypalChecked(true);
    }
  }
  function handleInputChange(e: any) {
    if (e.target.value.length === 16) {
      setIsValid(true);
    } else {
      setIsValid(false);
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
          className={`select-none flex justify-start text-base cursor-pointer mb-3 px-4 mr-2 rounded-[4px] border ${
            paypalChecked
              ? 'border-primary bg-[#1660CF]/10'
              : 'border-borderColor-dark'
          }`}
        >
          <div className="flex justify-center items-center">
            <input
              type="radio"
              name="shipping"
              id="paypal"
              checked={paypalChecked}
              onChange={handleCheckInputChange}
            />
          </div>
          <div className="ml-2 flex w-11/12 justify-between items-center">
            <p className="text-xl font-semibold">PayPal</p>
            <div className="ml-6 w-[330px] text-textBase">
              <p>
                You will be redirected to the PayPal website after submitting
                your order
              </p>
            </div>
            <div className="h-[50px] -mr-5 w-[50px] flex justify-center items-center">
              <img src={paypal} alt="potstfast" />
            </div>
          </div>
        </label>
        <label
          id="shippingContainer"
          className={`select-none z-0 flex flex-wrap justify-start text-base cursor-pointer mb-3 px-4 mr-2 rounded-[4px] border ${
            cardChecked
              ? 'border-primary bg-[#1660CF]/10'
              : 'border-borderColor-dark'
          }`}
        >
          <div className="flex z-10 justify-center items-center">
            <input
              type="radio"
              name="shipping"
              id="cc"
              checked={cardChecked}
              onChange={handleCheckInputChange}
            />
          </div>
          <div className="ml-2 z-10 flex w-11/12 justify-between items-center">
            <p className="z-10 text-xl font-semibold ">Pay with Credit Card</p>
            <div className="h-[50px] -mr-5 flex justify-center items-center">
              <img src={cCard} alt="potstfast" />
            </div>
          </div>
          <div className="z-10 flex flex-wrap justify-between mb-2">
            <div className="w-[230px] mt-3">
              <Form.Input
                label="Card Number"
                labelBg={cardChecked ? 'bg-[#1660CF]/[.02]' : 'bg-white'}
                type="number"
                valid={isValid}
                //@ts-ignore
                disabled={!cardChecked}
                className={`border font-semibold border-borderColor-light h-[40px] text-sm rounded bg-transparent pl-4 py-1 pr-1 outline-none text-textBase`}
                onChange={handleInputChange}
              />
            </div>
            <div className="w-[250px] mt-3">
              <Form.Input
                label="Expiration Date"
                labelBg={cardChecked ? 'bg-[#1660CF]/[.02]' : 'bg-white'}
                type="text"
                //@ts-ignore
                disabled={!cardChecked}
                placeholder="MM/YY"
                className={`border font-semibold border-borderColor-light h-[40px] text-sm rounded bg-transparent pl-4 py-1 pr-1 outline-none text-textBase`}
              />
            </div>
            <div className="w-[230px] mt-3">
              <Form.Input
                label="Card Security Code"
                labelBg={cardChecked ? 'bg-[#1660CF]/[.02]' : 'bg-white'}
                type="password"
                //@ts-ignore
                disabled={!cardChecked}
                maxlength={3}
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
        <Disclaimer />
      </div>
    </div>
  );
}

export default PaymentMethodContainer;
