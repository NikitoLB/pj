export function Icon({ name, className = "icon" }) {
  const paths = {
    home: <path d="M3 10.5 12 3l9 7.5v8a1 1 0 0 1-1 1h-5.5v-6h-5v6H4a1 1 0 0 1-1-1z" />,
    info: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 10v6" />
        <path d="M12 7.5h.01" />
      </>
    ),
    server: (
      <>
        <rect x="4" y="5" width="16" height="6" rx="2" />
        <rect x="4" y="13" width="16" height="6" rx="2" />
        <path d="M8 8h.01" />
        <path d="M8 16h.01" />
      </>
    ),
    trophy: (
      <>
        <path d="M8 4h8v3a4 4 0 0 1-8 0z" />
        <path d="M8 6H5a2 2 0 0 0 2 3" />
        <path d="M16 6h3a2 2 0 0 1-2 3" />
        <path d="M12 11v4" />
        <path d="M9 19h6" />
      </>
    ),
    store: (
      <>
        <path d="M5 8h14l-1 10H6z" />
        <path d="M8 8V6a4 4 0 0 1 8 0v2" />
      </>
    ),
    shield: <path d="M12 3 5 6v5c0 4.5 3 7.8 7 10 4-2.2 7-5.5 7-10V6z" />,
    gamepad: (
      <>
        <rect x="3" y="9" width="18" height="8" rx="4" />
        <path d="M8 13H6" />
        <path d="M7 12v2" />
        <path d="M16 12h.01" />
        <path d="M18 14h.01" />
      </>
    ),
    link: (
      <>
        <path d="M10 13a3 3 0 0 1 0-4l2-2a3 3 0 1 1 4 4l-1 1" />
        <path d="M14 11a3 3 0 0 1 0 4l-2 2a3 3 0 1 1-4-4l1-1" />
      </>
    ),
    users: (
      <>
        <path d="M16 19v-1a4 4 0 0 0-8 0v1" />
        <circle cx="12" cy="10" r="3" />
        <path d="M19 19v-1a3 3 0 0 0-2-2.82" />
        <path d="M5 19v-1a3 3 0 0 1 2-2.82" />
      </>
    ),
    instagram: (
      <>
        <rect x="5" y="5" width="14" height="14" rx="4" />
        <circle cx="12" cy="12" r="3.2" />
        <path d="M16.5 7.5h.01" />
      </>
    ),
    twitter: <path d="M20 7.5a6.3 6.3 0 0 1-1.8.5 3.1 3.1 0 0 0 1.4-1.7 6.5 6.5 0 0 1-2 .8A3.2 3.2 0 0 0 12 9.8a9 9 0 0 1-6.5-3.3 3.2 3.2 0 0 0 1 4.2 3 3 0 0 1-1.4-.4v.1a3.2 3.2 0 0 0 2.6 3.1 3 3 0 0 1-1.4.1 3.2 3.2 0 0 0 3 2.2A6.4 6.4 0 0 1 5 17.2a9.1 9.1 0 0 0 4.9 1.4c5.9 0 9.2-5 9.2-9.2v-.4A6.7 6.7 0 0 0 20 7.5z" />,
    youtube: (
      <>
        <path d="M20.5 8.5a2.5 2.5 0 0 0-1.8-1.8C17.2 6.3 12 6.3 12 6.3s-5.2 0-6.7.4A2.5 2.5 0 0 0 3.5 8.5 25 25 0 0 0 3 12a25 25 0 0 0 .5 3.5 2.5 2.5 0 0 0 1.8 1.8c1.5.4 6.7.4 6.7.4s5.2 0 6.7-.4a2.5 2.5 0 0 0 1.8-1.8A25 25 0 0 0 21 12a25 25 0 0 0-.5-3.5z" />
        <path d="m10 15 5-3-5-3z" />
      </>
    ),
    discord: (
      <>
        <path d="M7.5 8.5c2-1.4 7-1.4 9 0" />
        <path d="M7 16c2.2 1.5 7.8 1.5 10 0" />
        <path d="M8 9.5 6.5 15l2.5 1" />
        <path d="M16 9.5 17.5 15 15 16" />
        <circle cx="9.5" cy="12.5" r=".8" fill="currentColor" stroke="none" />
        <circle cx="14.5" cy="12.5" r=".8" fill="currentColor" stroke="none" />
      </>
    ),
    coins: (
      <>
        <ellipse cx="10" cy="7" rx="4.5" ry="2.5" />
        <path d="M5.5 7v5c0 1.4 2 2.5 4.5 2.5s4.5-1.1 4.5-2.5V7" />
        <path d="M14 10c.5-.1 1-.1 1.5-.1 2.2 0 4 1 4 2.2v3.7c0 1.2-1.8 2.2-4 2.2-.4 0-.8 0-1.2-.1" />
      </>
    ),
    "coins-stack": (
      <>
        <ellipse cx="9" cy="8" rx="4.5" ry="2.5" />
        <path d="M4.5 8v4c0 1.4 2 2.5 4.5 2.5s4.5-1.1 4.5-2.5V8" />
        <ellipse cx="15.5" cy="11" rx="4.5" ry="2.5" />
        <path d="M11 11v4c0 1.4 2 2.5 4.5 2.5S20 16.4 20 15v-4" />
      </>
    ),
    bag: (
      <>
        <path d="M9 8a3 3 0 0 1 6 0" />
        <path d="M6 10h12l-1.2 8.5A2 2 0 0 1 14.8 20h-5.6a2 2 0 0 1-2-1.5z" />
        <path d="M12 13v3" />
      </>
    ),
    box: (
      <>
        <path d="M4 8.5 12 4l8 4.5v7L12 20l-8-4.5z" />
        <path d="M12 20v-8" />
        <path d="M4 8.5 12 13l8-4.5" />
      </>
    ),
    gem: (
      <>
        <path d="M7 8 9.5 4h5L17 8l-5 10z" />
        <path d="M7 8h10" />
        <path d="m9.5 4 2.5 4 2.5-4" />
      </>
    ),
    crown: <path d="m4 17 1.5-8 4.5 4 2-6 2 6 4.5-4L20 17z" />,
    star: <path d="m12 4 2.4 4.9 5.4.8-3.9 3.8.9 5.5-4.8-2.6-4.8 2.6.9-5.5-3.9-3.8 5.4-.8z" />
  };

  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {paths[name]}
    </svg>
  );
}
