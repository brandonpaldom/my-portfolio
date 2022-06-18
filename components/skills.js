import Badge from '@/components/badge';
import Card from '@/components/card';
import styles from '@/styles/Skills.module.css';

export default function Skills() {
  const skills = [
    'Visual Design',
    'Web Design',
    'Digital Marketing',
    'Next.js',
    'React',
    'JavaScript',
    'CSS',
    'HTML',
  ];

  return (
    <Card>
      <div className={styles.container}>
        {skills.map((skill) => (
          <Badge key={skill} text={skill} blue />
        ))}
      </div>
    </Card>
  );
}
