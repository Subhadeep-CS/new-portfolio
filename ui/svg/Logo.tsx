import React from "react";

export interface TextToSvgComponentProps extends React.SVGProps<SVGSVGElement> {
  fill?: string;
}

const TextToSvgComponent: React.FC<TextToSvgComponentProps> = ({
  className = "",
  style,
  fill = "#000000",
  ...props
}) => {
  return (
    <svg
      className={className}
      style={style}
      fill={fill}
      viewBox="0 14.449999809265137 52.54999923706055 32.14999771118164"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      data-asc="0.92"
      {...props}
    >
      <g>
        <path d="M4.55 46.60L4.55 42.10L0 42.10L0 37.05L5.05 37.05L5.05 41.60L18.15 41.60L18.15 33L4.55 33L4.55 28.50L0 28.50L0 19L4.55 19L4.55 14.45L18.65 14.45L18.65 19L23.25 19L23.25 24L18.15 24L18.15 19.50L5.05 19.50L5.05 28.05L18.65 28.05L18.65 32.50L23.25 32.50L23.25 42.10L18.65 42.10L18.65 46.60L4.55 46.60ZM29.30 46.60L29.30 14.45L43.45 14.45L43.45 19L47.95 19L47.95 23.50L52.55 23.50L52.55 37.55L47.95 37.55L47.95 42.10L43.45 42.10L43.45 46.60L29.30 46.60M34.35 41.60L42.95 41.60L42.95 37.05L47.45 37.05L47.45 24L42.95 24L42.95 19.50L34.35 19.50L34.35 41.60Z" />
      </g>
    </svg>
  );
};

export default TextToSvgComponent;
