import Badge from '@/components/badge';
import ProjectBadge from '@/components/project-badge';
import styles from '@/styles/ProjectPage.module.css';
import Head from 'next/head';
import Image from 'next/image';

export default function Home({ data }) {
  const {
    title,
    technologies,
    description,
    webProject,
    webProjects,
    squareImages,
    images,
  } = data;

  return (
    <>
      <Head>
        <title>{`${title} | Brandon Palmeros`}</title>
        <meta
          name="description"
          content="Hola, me dedico al diseño visual, marketing digital, desarrollo web, y actualmente estoy buscando una posición como desarrollador frontend jr."
        />
        <meta property="og:title" content={`${title} | Brandon Palmeros`} />
        <meta
          property="og:description"
          content="Hola, me dedico al diseño visual, marketing digital, desarrollo web, y actualmente estoy buscando una posición como desarrollador frontend jr."
        />
      </Head>

      <h1>{title}</h1>

      {technologies && (
        <div className={styles['technologies-container']}>
          {technologies.map((technology) => (
            <Badge key={technology} text={technology} purple />
          ))}
        </div>
      )}

      {description && (
        <div className={styles['description-container']}>
          <p>{description}</p>
        </div>
      )}

      {webProject && (
        <div className={styles['webproject-badges-container']}>
          {webProject && (
            <>
              <ProjectBadge text={webProject.client} />
              <ProjectBadge
                link
                href={webProject.url}
                text={webProject.shortUrl}
                blue
              />
              {webProject.github && (
                <ProjectBadge
                  link
                  href={webProject.github}
                  text="Ver en GitHub"
                  purple
                />
              )}
            </>
          )}
        </div>
      )}

      {webProject && (
        <div className={styles['webproject-img-container']}>
          {webProject.images.map((image, index) => (
            <div key={index} className={styles['img-container']}>
              <Image
                src={image}
                className={styles['img-item']}
                alt=""
                width={1280}
                height={960}
                layout="responsive"
              />
            </div>
          ))}
        </div>
      )}

      {webProjects &&
        webProjects.map((webProject) => (
          <div key={webProject.id} className={styles['webprojects-container']}>
            <div className={styles['webproject-badges-container']}>
              <ProjectBadge text={webProject.client} />
              <ProjectBadge
                link
                href={webProject.url}
                text={webProject.shortUrl}
                blue
              />
            </div>
            <div className={styles['img-container']}>
              <Image
                src={webProject.image}
                className={styles['img-item']}
                alt=""
                width={1280}
                height={960}
                layout="responsive"
              />
            </div>
          </div>
        ))}

      {squareImages && (
        <div className={styles['squareimages-container']}>
          {squareImages.map((image, index) => (
            <div key={index} className={styles['img-container']}>
              <Image
                src={image}
                className={styles['img-item']}
                alt=""
                width={640}
                height={640}
                layout="responsive"
              />
            </div>
          ))}
        </div>
      )}

      {images && (
        <div className={styles['images-container']}>
          {images.map((image, index) => (
            <div key={index} className={styles['img-container']}>
              <Image
                src={image}
                className={styles['img-item']}
                alt=""
                width={1280}
                height={800}
                layout="responsive"
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(
    `${process.env.API_URL}/api/project/${context.params.path}`
  );
  const data = await res.json();

  return { props: { data } };
}
