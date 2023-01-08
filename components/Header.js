import Link from 'next/link';
import Image from 'next/image'

export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">
      <div className="header__logo">
        <Link href="/">
          <Image
            src="/images/bbs_logo.jpeg"
            alt="Brennan's Bike Shop"
            width={345}
            height={177} />
        </Link>
      </div>
      <p className="text-2xl dark:text-white text-center">
        <Link href="/">
          <a>{name}</a>
        </Link>
      </p>
    </header>
  );
}
