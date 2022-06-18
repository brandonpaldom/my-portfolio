import styles from '@/styles/ProjectItem.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectItem({ project }) {
  const { id, title, path, description, image } = project;

  return (
    <Link href={`/project/${path}`} className={styles.container}>
      <a className={styles.container}>
        <div className={styles['img-container']}>
          <Image
            src={image}
            className={styles.img}
            alt=""
            width={800}
            height={600}
            layout="responsive"
            priority
          />
        </div>
        <div className={styles.title}>
          <p>{title}</p>
        </div>
      </a>
    </Link>
  );
}
