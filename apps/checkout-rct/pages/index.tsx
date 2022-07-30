import { Button, CartItems } from '@ui';
import styles from './index.module.css';

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div className='border border-black mx-40 mt-20'>
      <p className='text-red-500'>Hello</p>
      <Button />
      <CartItems />
    </div>
  );
}

export default Index;
