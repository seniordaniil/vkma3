import * as React from 'react';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={44}
      height={24}
      viewBox="0 0 44 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11 21.333L11.688 24H0l4.125-12-2.75-5.333L9.625 0 16.5 4h11l6.875-4 8.25 6.667L39.875 12 44 24H32.312L33 21.333l-11-8-11 8z"
        fill="#FF730B"
      />
      <path d="M18.563 20l-.688 4h8.25l-.688-4h-6.875z" fill="#FF730B" />
    </svg>
  );
}

export default SvgComponent;
