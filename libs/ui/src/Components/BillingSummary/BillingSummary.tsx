import styles from './BillingSummary.module.css';

/* eslint-disable-next-line */
export interface BillingSummaryProps {}

export function BillingSummary(props: BillingSummaryProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to BillingSummary!</h1>
    </div>
  );
}

export default BillingSummary;
