import { SVGProps } from "react";

const ImageIcon = ({ width = "24", ...props }: SVGProps<SVGSVGElement>) => {
  const height: number = (Number(width) * 24) / 24;

  return (
    <svg
      fill="currentColor"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M22,3H2A1,1,0,0,0,1,4V20a1,1,0,0,0,1,1H22a1,1,0,0,0,1-1V4A1,1,0,0,0,22,3ZM21,19H3v-.531l5.033-4.2,1.3.977L8.293,16.293a1,1,0,0,0,1.414,1.414l6.185-6.185L21,18.333Zm0-4L16.8,9.4a1,1,0,0,0-1.507-.107l-4.53,4.53L8.6,12.2a1,1,0,0,0-1.24.031L3,15.865V5H21ZM5,9a2,2,0,1,1,2,2A2,2,0,0,1,5,9Z" />
    </svg>
  );
};

export default ImageIcon;