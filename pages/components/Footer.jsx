import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer id="footer">
      <Link href="https://www.linkedin.com/in/tom-mcivor-5b280488/">

        <Image
          src="/linkedin-icon.png"
          alt="LinkedIn Link"
          width={40}
          height={40}
        />

      </Link>
      <Link href="https://github.com/tom-mcivor">

        <Image
          src="/github-icon.png"
          alt="GitHub Link"
          width={40}
          height={40}
        />

      </Link>
      <Link href="mailto:ttmcivor@gmail.com">

        <Image
          src="/Gmail_Logo_64px.png"
          alt="gmail Link"
          width={40}
          height={40}
        />

      </Link>
    </footer>
  );
};

export default Footer;