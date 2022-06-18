import styles from '@/styles/Footer.module.css';

export default function Footer() {
  return (
    <div className={styles.container}>
      <p>
        Construido con{' '}
        <a
          href="https://nextjs.org/"
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Next.js
        </a>
      </p>
    </div>
  );
}
