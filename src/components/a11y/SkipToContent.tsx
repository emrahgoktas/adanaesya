'use client';

export function SkipToContent() {
  return (
    <a
      href="#main"
      className="skip-to-content"
      onClick={(event) => {
        event.preventDefault();
        const main = document.getElementById('main');
        if (!main) return;
        main.focus();
        main.scrollIntoView();
      }}
    >
      İçeriğe geç
    </a>
  );
}
