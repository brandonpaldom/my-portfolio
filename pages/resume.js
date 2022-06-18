import styles from '@/styles/ResumePage.module.css';
import Head from 'next/head';
import Image from 'next/image';

export default function Resume({ data }) {
  return (
    <>
      <Head>
        <title>Currículum | Portafolio</title>
        <meta
          name="description"
          content="Hola, me dedico al diseño visual, marketing digital, desarrollo web, y actualmente estoy buscando una posición como desarrollador frontend jr."
        />
        <meta property="og:title" content="Currículum | Portafolio" />
        <meta
          property="og:description"
          content="Hola, me dedico al diseño visual, marketing digital, desarrollo web, y actualmente estoy buscando una posición como desarrollador frontend jr."
        />
      </Head>

      <h1>Currículum</h1>

      <p>
        Hola soy Brandon, me dedico al diseño visual, marketing digital,
        desarrollo web. En mi tiempo libre me gusta aprender nuevas tecnologías,
        jugar videojuegos, y disfrutar de la vida. Actualmente me encuentro
        enfocando mi carrera en el desarrollo de aplicaciones web y busco una
        posición como desarrollador frontend jr.
      </p>

      {data &&
        data.map(({ id, title, items }) => (
          <div key={id} className={styles.container}>
            <h2>{title}</h2>

            {items.map(
              ({
                id,
                title,
                organization,
                date,
                image,
                description,
                activities,
              }) => (
                <div key={id} className={styles['info-container']}>
                  <div className={styles['organization-container']}>
                    <div className={styles['img-container']}>
                      <Image
                        src={image}
                        className={styles.img}
                        alt=""
                        width={48}
                        height={48}
                      />
                    </div>
                    <div>
                      <p className={styles.title}>{title}</p>
                      <p className={styles.subtitle}>
                        {organization} • {date}
                      </p>
                    </div>
                  </div>
                  {description && (
                    <p className={styles.description}>{description}</p>
                  )}
                  {activities && (
                    <ul className={styles.activities}>
                      {activities?.map((activitie, index) => (
                        <li key={index}>{activitie}</li>
                      ))}
                    </ul>
                  )}
                </div>
              )
            )}
          </div>
        ))}
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${process.env.API_URL}/api/resume`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
