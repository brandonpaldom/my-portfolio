import Card from '@/components/card';
import styles from '@/styles/Content.module.css';

export default function Content({ children }) {
  return (
    <Card>
      <div className={styles.container}>{children}</div>
    </Card>
  );
}
