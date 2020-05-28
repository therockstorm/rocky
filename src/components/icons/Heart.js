import React from "react"

const Heart = (props) => (
  <svg
    aria-hidden="true"
    focusable="false"
    data-prefix="fad"
    data-icon="heart"
    className="svg-inline--fa fa-heart fa-w-16"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    {...props}
  >
    <g className="fa-group">
      <path
        className="fa-secondary"
        fill="currentColor"
        d="M462.32 62.63C407.5 15.94 326 24.33 275.69 76.23L256 96.53l-19.69-20.3c-50.21-51.9-131.8-60.29-186.61-13.6-62.78 53.6-66.09 149.81-9.88 207.9l193.5 199.79a31.31 31.31 0 0 0 45.28 0l193.5-199.79c56.31-58.09 53-154.3-9.78-207.9zm-52.8 185l-143.1 143.85a15.29 15.29 0 0 1-21.7 0l-140-140.78c-28.37-28.52-33.78-75-8.37-106.23a76.44 76.44 0 0 1 113.77-5.88l45.49 45.7 42.37-42.58c28.38-28.52 74.65-34 105.71-8.45a77.35 77.35 0 0 1 5.83 114.36z"
        opacity="0.4"
      ></path>
      <path
        className="fa-primary"
        fill="currentColor"
        d="M244.72 391.48l-140-140.78c-28.37-28.52-33.78-75-8.36-106.23a76.43 76.43 0 0 1 113.76-5.88l45.49 45.7 42.37-42.58c28.38-28.51 74.65-34 105.71-8.45a77.35 77.35 0 0 1 5.87 114.36L266.41 391.48a15.28 15.28 0 0 1-21.69 0z"
      ></path>
    </g>
  </svg>
)

export default Heart
