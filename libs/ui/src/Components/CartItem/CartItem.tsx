import closeIcon from '../../../public/closeIcon.svg';

/* eslint-disable-next-line */
export interface CartItemProps {
  text: string;
  image: string;
  quanitity: number;
  price: string;
  discountPrice: string;
}

export function CartItem({
  text,
  image,
  quanitity,
  price,
  discountPrice,
}: CartItemProps) {
  return (
    <div className="border-b h-full border-borderColor-light pb-4 mt-4 flex justify-between items-center">
      <div className="h-full">
        <img src={image} alt="" className="h-full w-full" />
      </div>
      <div className="w-9/12 flex flex-col justify-between h-[80px]  ">
        <div className="flex justify-between items-start">
          <div className="w-[200px]">
            <p className="text-xs">{text}</p>
          </div>
          <div>
            <img src={closeIcon} alt="" />
          </div>
        </div>
        <div className="flex justify-between items-start">
          <div className="flex self-end">
            <div className="mr-1 border border-borderColor-dark rounded flex justify-center items-center h-[20px] w-[20px]">
              <p>-</p>
            </div>
            <div className="flex justify-center items-center h-[20px] w-[20px]">
              <p>{quanitity}</p>
            </div>
            <div className="ml-1 border border-borderColor-dark rounded flex justify-center items-center h-[20px] w-[20px]">
              <p>+</p>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <p className="text-xs text-strike line-through">{price}</p>
            <p className="text-lg ">{discountPrice}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
