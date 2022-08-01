import styles from './Disclaimer.module.css';
import lockIcon from '../../../public/lockIcon.svg';
/* eslint-disable-next-line */
export interface DisclaimerProps {}

export function Disclaimer(props: DisclaimerProps) {
  return (
    <div className="px-1 flex items-center my-1">
      <img src={lockIcon} alt="payment" />
      <p className="text-xs text-textBase ml-1">
        We protect your payment information using encryption to provide
        bank-level security.
      </p>
    </div>
  );
}

export default Disclaimer;
