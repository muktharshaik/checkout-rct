import { AddressForm } from '@ui';
import styles from './ShippingAddress.module.css';

/* eslint-disable-next-line */
export interface ShippingAddressProps {}

export function ShippingAddress(props: ShippingAddressProps) {
  return (
    <div className="shadow-container w-full flex flex-col justify-start bg-white rounded-[4px] p-3 mb-4">
      <div className="mb-6">
        <p className="text-xl font-bold">Shipping Address</p>
      </div>
      <AddressForm />
    </div>
  );
}

export default ShippingAddress;
