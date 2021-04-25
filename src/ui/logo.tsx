import * as React from 'react';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={126}
      height={16}
      viewBox="0 0 126 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M46.156 7.363c.305.14.586.324.844.551.21.195.402.453.574.774.18.312.27.71.27 1.195 0 .914-.293 1.664-.88 2.25-.585.578-1.335.867-2.25.867H39.56V2.195h4.804c.446 0 .86.078 1.242.235.383.148.711.36.985.632.273.274.488.594.644.961.164.368.246.758.246 1.172 0 .399-.07.73-.21.996a2.712 2.712 0 01-.458.668 3.186 3.186 0 01-.656.504zm-4.793-3.48v2.754h2.754c.477 0 .856-.125 1.137-.375.281-.258.422-.57.422-.938 0-.414-.14-.758-.422-1.031-.273-.273-.652-.41-1.137-.41h-2.754zm3.117 7.441c.415 0 .778-.156 1.09-.469.313-.312.47-.675.47-1.09 0-.18-.04-.355-.118-.527a1.338 1.338 0 00-.34-.468 1.48 1.48 0 00-.504-.329 1.538 1.538 0 00-.598-.117h-3.117v3h3.117zM59.129 10.117c-.18.383-.406.758-.68 1.125a4.665 4.665 0 01-.96.961 4.977 4.977 0 01-1.243.668c-.46.172-.98.254-1.559.246a4.88 4.88 0 01-3.563-1.547 5.597 5.597 0 01-1.089-1.734c-.265-.672-.394-1.418-.387-2.238 0-.813.13-1.555.387-2.227a5.573 5.573 0 011.078-1.746 4.82 4.82 0 011.57-1.137 4.51 4.51 0 011.887-.41c.657 0 1.274.129 1.852.387a4.506 4.506 0 011.523 1.09 5.32 5.32 0 011.032 1.71c.257.665.386 1.403.386 2.215a3.13 3.13 0 01-.07.692l-.047.27H51.57c.032.382.137.757.317 1.124.187.368.422.688.703.961.281.274.605.493.972.657.368.171.743.257 1.126.257.335 0 .636-.046.902-.14.265-.094.504-.207.715-.34a2.16 2.16 0 00.539-.422c.14-.148.261-.289.363-.422h1.922zM54.57 3.766c-.367 0-.718.078-1.054.234a3.086 3.086 0 00-.891.645 3.645 3.645 0 00-.691.984c-.188.383-.309.8-.364 1.254h5.871c-.125-.961-.457-1.723-.996-2.285-.53-.555-1.156-.832-1.875-.832zM66.793 7.48c.289.157.547.348.773.575.196.195.375.445.54.75.171.304.257.664.257 1.078 0 .445-.09.863-.27 1.254-.171.39-.417.734-.737 1.031a3.5 3.5 0 01-1.172.703c-.453.164-.97.246-1.547.246-1.203 0-2.149-.32-2.836-.96-.688-.641-1.063-1.438-1.125-2.391h1.804c.063.476.27.875.622 1.195.351.32.863.48 1.535.48.61 0 1.082-.156 1.418-.468.336-.313.504-.676.504-1.09 0-.414-.172-.778-.516-1.09-.344-.313-.813-.469-1.406-.469h-.961V6.637h.96c.477 0 .876-.133 1.196-.399.32-.273.48-.62.48-1.043 0-.414-.16-.754-.48-1.02-.313-.273-.71-.41-1.195-.41-.672 0-1.164.157-1.477.47-.312.304-.5.667-.562 1.09h-1.805c.063-.962.418-1.743 1.066-2.345.657-.601 1.582-.902 2.778-.902.515 0 .984.086 1.406.258.422.164.789.39 1.101.68.313.289.551.62.715.996.172.375.258.77.258 1.183 0 .399-.07.739-.21 1.02-.134.281-.286.52-.458.715-.195.226-.414.41-.656.55zM80.598 11.324v4.313H78.91V13h-7.922v2.637h-1.675v-4.313h.597c.242-.18.457-.39.645-.633.18-.21.343-.457.492-.738.156-.289.258-.633.305-1.031l.726-6.727h7.078v9.13h1.442zm-7.442-2.402c-.031.398-.11.742-.234 1.031-.117.29-.242.535-.375.738a5.551 5.551 0 01-.469.633h5.274V3.883h-3.668l-.528 5.039zM91.402 10.117c-.18.383-.406.758-.68 1.125a4.668 4.668 0 01-.96.961 4.975 4.975 0 01-1.243.668c-.46.172-.98.254-1.558.246a4.882 4.882 0 01-3.563-1.547 5.597 5.597 0 01-1.09-1.734c-.265-.672-.394-1.418-.386-2.238 0-.813.129-1.555.387-2.227a5.573 5.573 0 011.078-1.746 4.822 4.822 0 011.57-1.137 4.51 4.51 0 011.887-.41c.656 0 1.273.129 1.851.387a4.506 4.506 0 011.524 1.09 5.32 5.32 0 011.031 1.71c.258.665.387 1.403.387 2.215a3.149 3.149 0 01-.07.692 17.37 17.37 0 01-.047.27h-7.676c.031.382.137.757.316 1.124.188.368.422.688.703.961.281.274.606.493.973.657.367.171.742.257 1.125.257.336 0 .637-.046.902-.14.266-.094.504-.207.715-.34.219-.125.399-.266.54-.422.14-.148.26-.289.363-.422h1.921zm-4.558-6.351c-.367 0-.719.078-1.055.234a3.086 3.086 0 00-.89.645 3.645 3.645 0 00-.692.984c-.188.383-.309.8-.363 1.254h5.87c-.124-.961-.456-1.723-.995-2.285-.531-.555-1.156-.832-1.875-.832zM95.832 13h-1.805V2.195h1.805V13zm4.559 0l-4.559-5.637 4.078-5.168h2.039l-4.078 5.04L102.547 13h-2.156zM104.832 7.598c0 .578.09 1.101.27 1.57.179.469.418.875.714 1.219.305.336.653.593 1.043.773a2.757 2.757 0 002.426 0 3.3 3.3 0 001.031-.773c.297-.336.539-.742.727-1.219a4.05 4.05 0 00.269-1.57 4.35 4.35 0 00-.269-1.57 4.115 4.115 0 00-.727-1.208 3.22 3.22 0 00-1.031-.785 2.64 2.64 0 00-1.207-.27c-.414 0-.82.09-1.219.27-.39.188-.738.45-1.043.785a3.632 3.632 0 00-.714 1.207 4.35 4.35 0 00-.27 1.57zm8.285 0c0 .812-.133 1.558-.398 2.238a5.438 5.438 0 01-1.078 1.734 4.884 4.884 0 01-3.563 1.547 4.88 4.88 0 01-3.562-1.547 5.573 5.573 0 01-1.09-1.734c-.266-.672-.395-1.418-.387-2.238 0-.813.129-1.555.387-2.227a5.45 5.45 0 011.09-1.746 4.88 4.88 0 013.562-1.547 4.885 4.885 0 013.563 1.547 5.41 5.41 0 011.078 1.746c.265.672.398 1.414.398 2.227zM125.246 11.324v4.313h-1.687V13h-7.922v2.637h-1.676v-4.313h.598c.242-.18.457-.39.644-.633.18-.21.344-.457.492-.738.157-.289.258-.633.305-1.031l.727-6.727h7.078v9.13h1.441zm-7.441-2.402c-.032.398-.11.742-.235 1.031a4.29 4.29 0 01-.375.738 5.55 5.55 0 01-.468.633H122V3.883h-3.668l-.527 5.039z"
        fill="#000"
      />
      <path
        fill="#0085FD"
        d="M21 0h5v16h-5zM7 0h3v16H7zM14 0h4v16h-4zM0 0h2v16H0z"
      />
    </svg>
  );
}

export default SvgComponent;