import { Form } from '@ui';
import { useState } from 'react';

/* eslint-disable-next-line */
export interface AddressFormProps {}

export function AddressForm(props: AddressFormProps) {
  const [isValid, setIsValid] = useState<boolean>(false);
  function handleEmailInput(e: any) {
    const match = e.target.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
    match ? setIsValid(true) : setIsValid(false);
  }
  return (
    <div className="flex flex-col">
      <div className="mt-2 flex justify-between">
        <div>
          <Form.Input
            label="First Name"
            type="text"
            className={`border w-[250px] font-semibold border-borderColor-light h-[40px] text-sm rounded bg-transparent pl-4 py-1 pr-1 outline-none text-textBase`}
          />
        </div>
        <div>
          <Form.Input
            label="Last Name"
            type="text"
            className={`border w-[250px] font-semibold border-borderColor-light h-[40px] text-sm rounded bg-transparent pl-4 py-1 pr-1 outline-none text-textBase`}
          />
        </div>
      </div>
      <div className="mt-4">
        <Form.Input
          label="Email"
          type="email"
          valid={isValid}
          onChange={handleEmailInput}
          className={`border w-full font-semibold border-borderColor-light h-[40px] text-sm rounded bg-transparent pl-4 py-1 pr-1 outline-none text-textBase`}
        />
      </div>
      <div className="mt-4">
        <Form.Input
          label="Street Address"
          type="text"
          className={`border w-full font-semibold border-borderColor-light h-[40px] text-sm rounded bg-transparent pl-4 py-1 pr-1 outline-none text-textBase`}
        />
        <Form.Input
          type="text"
          className={`border mt-4 w-full font-semibold border-borderColor-light h-[40px] text-sm rounded bg-transparent pl-4 py-1 pr-1 outline-none text-textBase`}
        />
      </div>
      <div className="mt-5 flex justify-between">
        <div className="relative">
          <label
            className="absolute text-label -top-2 left-1 text-xs mx-2 px-2 bg-white"
            htmlFor=""
          >
            State/Proince
          </label>
          <select
            className="border w-[250px] font-semibold border-borderColor-light h-[40px] text-sm rounded bg-transparent pl-4 py-1 pr-1 outline-none text-textBase"
            name="state"
            id="input"
          >
            <option value="dubai">Dubai</option>
            <option value="abudhabi">Abu Dhabi</option>
            <option value="sharjah">Sharjah</option>
          </select>
        </div>
        <div>
          <Form.Input
            label="City"
            type="text"
            className={`border w-[250px] font-semibold border-borderColor-light h-[40px] text-sm rounded bg-transparent pl-4 py-1 pr-1 outline-none text-textBase`}
          />
        </div>
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <Form.Input
            label="Zip/Postal Code"
            type="text"
            className={`border w-[250px] font-semibold border-borderColor-light h-[40px] text-sm rounded bg-transparent pl-4 py-1 pr-1 outline-none text-textBase`}
          />
        </div>
        <div>
          <Form.Input
            label="Phone"
            type="text"
            className={`border w-[250px] font-semibold border-borderColor-light h-[40px] text-sm rounded bg-transparent pl-4 py-1 pr-1 outline-none text-textBase`}
          />
        </div>
      </div>
    </div>
  );
}

export default AddressForm;
