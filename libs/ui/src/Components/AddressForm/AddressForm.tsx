import styles from './AddressForm.module.css';

/* eslint-disable-next-line */
export interface AddressFormProps {}

export function AddressForm(props: AddressFormProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to AddressForm!</h1>
    </div>
  );
}

export default AddressForm;
