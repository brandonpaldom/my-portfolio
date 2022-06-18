import Card from '@/components/card';
import profilePic from '@/public/profile.jpg';
import styles from '@/styles/AboutMe.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutMe() {
  return (
    <Card>
      <div className={styles.container}>
        <Link href="/">
          <a className={styles['img-container']}>
            <Image
              src={profilePic}
              className={styles.img}
              alt=""
              layout="fill"
              priority
            />
          </a>
        </Link>
        <span className={styles.title}>Brandon Palmeros</span>
        <span className={styles.subtitle}>
          Visual Designer • Veracruz, México
        </span>
        <span className={styles.description}>
          Puedo ayudarte a conectar tu marca con tu audiencia.
        </span>
      </div>
    </Card>
  );
}
