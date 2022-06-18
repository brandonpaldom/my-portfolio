import styles from '@/styles/ContactItem.module.css';

export default function ContactItem({ href, children }) {
  return (
    <a
      href={href}
      className={styles.item}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
