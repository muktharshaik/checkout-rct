import styles from './Disclaimer.module.css';

/* eslint-disable-next-line */
export interface DisclaimerProps {}

export function Disclaimer(props: DisclaimerProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Disclaimer!</h1>
    </div>
  );
}

export default Disclaimer;
