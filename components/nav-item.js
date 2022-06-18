import styles from '@/styles/NavItem.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NavItem({ href, text }) {
  const { asPath } = useRouter();

  return (
    <Link href={href} scroll={false}>
      <a
        className={[
          styles.container,
          [
            `${
              asPath == href ? styles['btn-primary'] : styles['btn-secondary']
            }`,
          ],
        ].join(' ')}
      >
        {text}
      </a>
    </Link>
  );
}
