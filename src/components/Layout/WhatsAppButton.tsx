import React from 'react';

type Props = {
  phone?: string; // E.164 format without + (e.g. 447700900123)
  message?: string;
};

const WhatsAppButton: React.FC<Props> = ({
  phone = '447000000000',
  message = 'Hi! I would like to get a roofing quote.',
}) => {
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-[70] h-14 w-14 rounded-full shadow-xl bg-[#25D366] hover:bg-[#1eb858] transition-colors flex items-center justify-center"
    >
      {/* WhatsApp SVG icon (brand-safe) */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="h-7 w-7 fill-white"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M19.11 17.42c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.13-.42-2.16-1.34-.8-.71-1.34-1.58-1.5-1.85-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.44-.46-.61-.46-.16 0-.34-.02-.52-.02-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.29 0 1.34.98 2.64 1.12 2.82.14.18 1.92 2.94 4.66 4.11.65.28 1.16.45 1.56.58.65.21 1.24.18 1.7.11.52-.08 1.6-.65 1.83-1.28.23-.63.23-1.18.16-1.29-.07-.11-.25-.18-.52-.32z"/>
        <path d="M26.58 5.42C23.73 2.57 20.03 1 16.09 1 8.2 1 1.9 7.31 1.9 15.19c0 2.51.66 4.95 1.91 7.1L1 31l8.91-2.33c2.09 1.14 4.45 1.73 6.86 1.73 7.9 0 14.2-6.31 14.2-14.19 0-3.93-1.57-7.63-4.41-10.48zM16.77 28.2c-2.2 0-4.36-.59-6.24-1.71l-.45-.27-5.29 1.39 1.41-5.15-.29-.47c-1.19-1.96-1.82-4.21-1.82-6.6C4.09 8.44 9.36 3.16 16.06 3.16c3.2 0 6.21 1.25 8.47 3.51 2.26 2.27 3.5 5.28 3.5 8.48 0 6.7-5.27 11.96-11.26 11.96z"/>
      </svg>
    </a>
  );
};

export default WhatsAppButton;


