import { AddressForm, Form } from '@ui';
import { useState } from 'react';
import styles from './BillingAddress.module.css';

/* eslint-disable-next-line */
export interface BillingAddressProps {
  setShowShipping: any;
  showShipping: boolean;
}

export function BillingAddress({
  showShipping,
  setShowShipping,
  ...props
}: BillingAddressProps) {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  function handleShipingAddress(e: any) {
    setShowShipping(!showShipping);
  }

  function handlePasswordContainer(e: any) {
    setShowPassword(!showPassword);
  }
  return (
    <div className="shadow-container w-full flex flex-col justify-start bg-white rounded-[4px] p-3 mb-4">
      <div className="mb-6">
        <p className="text-xl font-bold">Billing Address</p>
      </div>
      <AddressForm />
      <div className="mt-4">
        <div className="cursor-pointer" onClick={handleShipingAddress}>
          <input checked={showShipping} type="checkbox" id="shipping" />
          <label className="text-textBase text-sm ml-1">
            My billing and shipping address are the same
          </label>
        </div>
        <div className="mt-2 cursor-pointer" onClick={handlePasswordContainer}>
          <input checked={showPassword} type="checkbox" id="createAccount" />
          <label className="text-textBase text-sm ml-1">
            Create an account for later use
          </label>
        </div>
      </div>
      {showPassword && (
        <div id="passwordContainer" className="mt-3">
          <div className="mt-2 flex justify-between">
            <div>
              <Form.Input
                label="Password"
                divWidth="w-[250px]"
                type="password"
                className={`border w-[250px] font-semibold border-borderColor-light h-[40px] text-sm rounded bg-transparent pl-4 py-1 pr-1 outline-none text-textBase`}
              />
            </div>
            <div>
              <Form.Input
                label="Confirm Password"
                divWidth="w-[250px]"
                type="password"
                className={`border w-[250px] font-semibold border-borderColor-light h-[40px] text-sm rounded bg-transparent pl-4 py-1 pr-1 outline-none text-textBase`}
              />
            </div>
          </div>
          <div className="mt-2">
            <p className="text-textBase text-sm">
              Already have an account?
              <a href="#" className="text-primary ml-1">
                Sign in here
              </a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default BillingAddress;
