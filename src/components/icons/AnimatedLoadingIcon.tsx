import { SVGProps } from "react";

 const AnimatedLoadingIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
        <svg 
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 50"
        preserveAspectRatio="xMidYMid"
        >
        <circle
        cx="25"
        cy="25"
        strokeWidth="3"
        r="15"
        strokeDasharray="47.123889803846895 16.041189668484067"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          repeatCount="indefinite"
          dur="0.5s"
          values="0 25 25;360 25 25"
          keyTimes="0;1"
        ></animateTransform>
      </circle>
        </svg>
  )
}

export default AnimatedLoadingIcon
