import Link from 'next/link';
import { useSession } from 'next-auth/client';

export function Header() {
  const [session, loading] = useSession();
  return (
    <header role="banner" className="site-header">
      <div className="wrapper">
        [header] -{' '}
        <Link href="/">
          <a>Home</a>
        </Link>
        <p>
          {!session && (
            <>
              Not signed in <br />
              <a href="/api/auth/signin">Sign in</a>
            </>
          )}
          {session && (
            <>
              Signed in as {session.user.email} <br />
              <a href="/api/auth/signout">Sign out</a>
            </>
          )}
        </p>
      </div>
    </header>
  );
}
