import About from '@/components/about';
import Container from '@/components/container';
import Cover from '@/components/cover';
import styles from '@/styles/Layout.module.css';

export default function Layout({ children }) {
  return (
    <>
      <Cover />
      <main className={styles.container}>
        <div>
          <About />
        </div>
        <Container>{children}</Container>
      </main>
    </>
  );
}
