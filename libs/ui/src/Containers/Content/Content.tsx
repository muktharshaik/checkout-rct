import { AddressContainer, CartContainer } from "@ui";

/* eslint-disable-next-line */
export interface ContentProps {}

export function Content(props: ContentProps) {
  return (
    <div className='border border-black flex justify-between items-start'>
      <AddressContainer />
      <CartContainer />
    </div>
  );
}

export default Content;
