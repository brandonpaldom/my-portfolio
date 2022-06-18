import styles from '@/styles/Error.module.css';

export default function Error({ text }) {
  return (
    <div className={styles['error-container']}>
      <p>Failed to load {text}</p>
    </div>
  );
}
