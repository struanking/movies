import Link from 'next/link';

export function Header() {
  return (
    <header role="banner">
      [header] -{' '}
      <Link href="/">
        <a>Home</a>
      </Link>
    </header>
  );
}
