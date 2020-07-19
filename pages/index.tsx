import Head from 'next/head';
import { useSession } from 'next-auth/client';

export default function Home(): JSX.Element {
  const [session, loading] = useSession();
  return (
    <div className="container">
      <Head>
        <title>Movie App</title>
      </Head>

      <main>
        <h1 data-testid="title">Welcome to The Movie App, 1</h1>
        <button type="button">Test button</button>
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
      </main>
    </div>
  );
}
