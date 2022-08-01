import {
  PaymentMethodContainer,
  ShippingMethodContainer,
  ShippingAddress,
  BillingAddress,
} from '@ui';
import { useState } from 'react';
import styles from './AddressContainer.module.css';

/* eslint-disable-next-line */
export interface AddressContainerProps {}

export function AddressContainer(props: AddressContainerProps) {
  const [showShipping, setShowShipping] = useState<boolean>(false);
  return (
    <div className="w-[570px] flex flex-col justify-start items-center">
      <BillingAddress
        showShipping={showShipping}
        setShowShipping={setShowShipping}
      />
      {!showShipping && <ShippingAddress />}
      <ShippingMethodContainer />
      <PaymentMethodContainer />
    </div>
  );
}

export default AddressContainer;
