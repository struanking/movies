import { useState } from 'react';
import { useRouter } from 'next/router';

export function Search() {
  const router = useRouter();
  const [query, setQuery] = useState('');

  function doSearch(e) {
    e.preventDefault();
    router.push(`/search?query=${query}`);
  }

  return (
    <form onSubmit={doSearch}>
      <label htmlFor="search">Search</label>
      <input
        type="text"
        id="search"
        placeholder="movie name, tv show, actor"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}
