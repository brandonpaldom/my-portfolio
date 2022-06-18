import ProjectItem from '@/components/project-item';
import styles from '@/styles/Portfolio.module.css';
import Head from 'next/head';

export default function Portfolio({ data }) {
  return (
    <>
      <Head>
        <title>Brandon Palmeros | Portafolio</title>
        <meta
          name="description"
          content="Brandon Palmeros. Visual Designer. De Veracruz, MX. Puedo ayudarte a conectar tu marca con tu audiencia. Visita mi portafolio."
        />
        <meta property="og:title" content="Brandon Palmeros | Portafolio" />
        <meta
          property="og:description"
          content="Brandon Palmeros. Visual Designer. De Veracruz, MX. Puedo ayudarte a conectar tu marca con tu audiencia. Visita mi portafolio."
        />
      </Head>

      <h1>Portafolio</h1>

      <div className={styles.grid}>
        {data.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${process.env.API_URL}/api/projects`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
