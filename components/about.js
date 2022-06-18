import AboutMe from '@/components/aboutme';
import Contact from '@/components/contact';
import Skills from '@/components/skills';
import styles from '@/styles/About.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      <AboutMe />
      <Contact />
      <Skills />
    </div>
  );
}
