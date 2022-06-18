import styles from '@/styles/Badge.module.css';

export default function Badge({ text, blue, purple }) {
  return (
    <span
      className={[
        styles.container,
        [`${blue ? styles.blue : []}`],
        [`${purple ? styles.purple : []}`],
      ].join(' ')}
    >
      {text}
    </span>
  );
}
