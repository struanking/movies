import { Children } from 'react';

export function Grid({ children }) {
  return (
    <ol className="auto-grid">
      {Children.map(children, (child) => (
        <li key={child.key}>{child}</li>
      ))}
    </ol>
  );
}
