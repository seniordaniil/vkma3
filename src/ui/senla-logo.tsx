import * as React from 'react';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={122}
      height={24}
      viewBox="0 0 122 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M108.255 0a6.418 6.418 0 00-6.028 4.214l-4.831 13.231H84.02a.636.636 0 01-.64-.638V.01h-6.413v17.435c0 3.536 2.872 6.403 6.414 6.403l18.49.02 2.355-6.423h8.058l1.573 4.296a3.213 3.213 0 003.004 2.117h4.587l-7.134-19.563A6.407 6.407 0 00108.255 0zm.02 6.403l2.284 6.24h-4.557l2.273-6.24z"
        fill="url(#prefix__paint0_linear)"
      />
      <path
        d="M68.635 0v15.115a.636.636 0 01-.64.639.651.651 0 01-.487-.223L60.374 3.19a6.42 6.42 0 00-5.531-3.17c-3.542 0-6.414 2.866-6.414 6.402v11.043H31.582a.636.636 0 01-.639-.639v-2.482h15.456V9.543H30.943V7.092c0-.385.284-.669.64-.669h14.816V.02H24.53v17.436c0 3.535 2.872 6.402 6.414 6.402h23.9V8.794c0-.355.284-.639.64-.639a.64.64 0 01.547.304c.02.04.03.061.04.071l7.014 12.117a6.429 6.429 0 005.56 3.201c3.543 0 6.415-2.867 6.415-6.403V0h-6.424z"
        fill="url(#prefix__paint1_linear)"
      />
      <path
        d="M6.414.02C2.872.02 0 2.887 0 6.423a6.39 6.39 0 003.897 5.886l9.317 3.951a.64.64 0 01.334.557.648.648 0 01-.588.639H0v6.402h16.35v-.01c3.41-.142 6.14-2.948 6.14-6.392a6.398 6.398 0 00-4.294-6.038l-8.87-3.76a.638.638 0 01-.416-.597c0-.334.264-.608.59-.638h16.947c1.38 0 2.558-.871 3.014-2.097L31.034.02H6.414z"
        fill="url(#prefix__paint2_linear)"
      />
      <defs>
        <linearGradient
          id="prefix__paint0_linear"
          x1={76.967}
          y1={11.934}
          x2={121.448}
          y2={11.934}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0044C6" />
          <stop offset={1} stopColor="#005CF1" />
        </linearGradient>
        <linearGradient
          id="prefix__paint1_linear"
          x1={24.529}
          y1={11.929}
          x2={75.059}
          y2={11.929}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0067DC" />
          <stop offset={1} stopColor="#1D7DE8" />
        </linearGradient>
        <linearGradient
          id="prefix__paint2_linear"
          x1={0}
          y1={11.939}
          x2={31.034}
          y2={11.939}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#49A2FB" />
          <stop offset={1} stopColor="#5BBAFB" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default SvgComponent;
