import Content from '@/components/content';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import styles from '@/styles/Container.module.css';

export default function Container({ children }) {
  return (
    <div className={styles.container}>
      <Navbar />
      <Content>{children}</Content>
      <Footer />
    </div>
  );
}
