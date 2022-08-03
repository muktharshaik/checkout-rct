import { useState } from 'react';

/* eslint-disable-next-line */
export interface ShippingMethodContainerProps {}

export function ShippingMethodContainer(props: ShippingMethodContainerProps) {
  const [postFastChecked, setPostFastChecked] = useState<boolean>(false);
  const [postChecked, setPostChecked] = useState<boolean>(true);

  function handleCheckInputChange(e: any) {
    if (e.target.id == 'postFast') {
      setPostFastChecked(true);
      setPostChecked(false);
    } else {
      setPostFastChecked(false);
      setPostChecked(true);
    }
  }
  return (
    <div className="shadow-container w-full flex flex-col justify-start bg-white rounded-[4px] p-3 mb-4">
      <div className="mb-6">
        <p className="text-xl font-bold">Shipping Method</p>
      </div>
      <div className="flex flex-col justify-start">
        <label
          id="post"
          className={`select-none flex justify-between text-base cursor-pointer mb-3 px-4 mr-2 rounded-[4px] border ${
            postChecked
              ? 'border-primary bg-[#1660CF]/10'
              : 'border-borderColor-dark'
          }`}
        >
          <div className="flex justify-center items-center">
            <input
              type="radio"
              name="post"
              id="post"
              checked={postChecked}
              onChange={handleCheckInputChange}
            />
          </div>
          <div className="flex w-11/12 justify-start items-center">
            <p className="text-xl ml-2 font-semibold">$2.99</p>
            <div className="ml-6 text-textBase">
              <p>
                USPS 1st Class With Tracking <br />
                (5 - 13 days) COVID19 Delay
              </p>
            </div>
          </div>
          <div className="h-[50px] w-[50px] flex justify-center items-center">
            <img src="https://i.ibb.co/5BWvhr7/post.png" alt="potst" />
          </div>
        </label>
        <label
          id="postFast"
          className={`select-none flex justify-between text-base cursor-pointer mb-3 px-4 mr-2 rounded-[4px] border ${
            postFastChecked
              ? 'border-primary bg-[#1660CF]/10'
              : 'border-borderColor-dark'
          }`}
        >
          <div className="flex justify-center items-center">
            <input
              type="radio"
              name="postFast"
              id="postFast"
              checked={postFastChecked}
              onChange={handleCheckInputChange}
            />
          </div>
          <div className="flex w-11/12 justify-start items-center">
            <p className="text-xl ml-2 font-semibold">$9.00</p>
            <div className="ml-6 text-textBase">
              <p>
                USPS PRIORITY With Tracking <br />
                (5 - 13 days) COVID19 Delay
              </p>
            </div>
          </div>
          <div className="h-[50px] w-[50px] flex justify-center items-center">
            <img src="https://i.ibb.co/SdcqNDQ/post-fast.png" alt="potst" />
          </div>
        </label>
      </div>
    </div>
  );
}

export default ShippingMethodContainer;
