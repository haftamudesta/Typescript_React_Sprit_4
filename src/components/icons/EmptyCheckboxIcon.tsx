import { SVGProps } from "react";

const EmptyCheckboxIcon = (props
: SVGProps<SVGSVGElement>) => {

  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
        <path fill="black" d="M0 0h24v24H0z" />
        <path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
      </g>
    </svg>
  );
};

export default EmptyCheckboxIcon;