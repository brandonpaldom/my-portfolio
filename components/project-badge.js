import styles from '@/styles/ProjectBadge.module.css';

export default function ProjectBadge({ href, text, blue, purple, link }) {
  return (
    <>
      {link ? (
        <a
          href={href}
          className={[
            styles.container,
            [`${blue ? styles.blue : []}`],
            [`${purple ? styles.purple : []}`],
          ].join(' ')}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            className={[
              [`${blue ? styles['icon-blue'] : []}`],
              [`${purple ? styles['icon-purple'] : []}`],
            ].join(' ')}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="0.75rem"
            height="0.75rem"
          >
            <path d="M13.845,17.267l-3.262,3.262A5.028,5.028,0,0,1,3.472,13.42l3.262-3.265A1,1,0,0,0,5.319,8.741L2.058,12.006A7.027,7.027,0,0,0,12,21.943l3.262-3.262a1,1,0,0,0-1.414-1.414Z" />
            <path d="M21.944,2.061A6.979,6.979,0,0,0,16.975,0h0a6.983,6.983,0,0,0-4.968,2.057L8.74,5.32a1,1,0,0,0,1.414,1.415l3.265-3.262A4.993,4.993,0,0,1,16.973,2h0a5.028,5.028,0,0,1,3.554,8.583l-3.262,3.262A1,1,0,1,0,18.68,15.26L21.942,12A7.037,7.037,0,0,0,21.944,2.061Z" />
            <path d="M14.293,8.293l-6,6a1,1,0,1,0,1.414,1.414l6-6a1,1,0,0,0-1.414-1.414Z" />
          </svg>

          <span>{text}</span>
        </a>
      ) : (
        <div className={`${styles.container} ${styles.amber}`}>
          Cliente: {text}
        </div>
      )}
    </>
  );
}
