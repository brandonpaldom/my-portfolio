import Card from '@/components/card';
import ContactItem from '@/components/contact-item';
import GithubIcon from '@/public/icons/github.svg';
import LinkedInIcon from '@/public/icons/linkedin.svg';
import EmailIcon from '@/public/icons/mail.svg';
import styles from '@/styles/Contact.module.css';
import Image from 'next/image';

export default function Contact() {
  const links = [
    {
      link: 'mailto:brandonpaldom@gmail.com',
      icon: EmailIcon,
    },
    {
      link: 'https://www.linkedin.com/in/brandonpaldom',
      icon: LinkedInIcon,
    },
    {
      link: 'https://github.com/brandonpaldom',
      icon: GithubIcon,
    },
  ];

  return (
    <Card>
      <div className={styles.container}>
        {links.map(({ link, icon }) => (
          <ContactItem key={link} href={link}>
            <Image src={icon} alt="" height={20} />
          </ContactItem>
        ))}
      </div>
    </Card>
  );
}
