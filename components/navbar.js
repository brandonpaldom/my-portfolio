import Card from '@/components/card';
import NavItem from '@/components/nav-item';
import styles from '@/styles/Navbar.module.css';

export default function Navbar() {
  const navItems = [
    { href: '/', text: 'Portafolio' },
    { href: '/resume', text: 'Currículum' },
  ];

  return (
    <Card>
      <nav className={styles.container}>
        {navItems.map(({ href, text }) => (
          <NavItem key={text} href={href} text={text} />
        ))}
      </nav>
    </Card>
  );
}
