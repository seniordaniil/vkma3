import * as React from 'react';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={40}
      height={34}
      viewBox="0 0 40 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M40 34H0L13.333 8.5l3.334 8.5 9.166-17L40 34z" fill="#EB5757" />
    </svg>
  );
}

export default SvgComponent;
