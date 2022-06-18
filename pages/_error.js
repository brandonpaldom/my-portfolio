import styles from '@/styles/ErrorPage.module.css';
import Head from 'next/head';

function Error({ statusCode }) {
  return (
    <>
      <Head>
        <title>{`Error ${statusCode} | Brandon Palmeros`}</title>
      </Head>

      <div className={styles.container}>
        <p>
          {statusCode
            ? `Se ha producido un error ${statusCode} en el servidor`
            : 'Se ha producido un error en el cliente'}
        </p>
      </div>
    </>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
