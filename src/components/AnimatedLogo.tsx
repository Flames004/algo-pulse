const AnimatedLogo = () => {
  return (
    <svg
      width="150"
      height="150"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="animated-logo"
    >
      <circle cx="50" cy="50" r="48" stroke="#00C2FF" strokeWidth="4" />

      <polyline
        points="20,60 35,40 50,70 65,30 80,50"
        stroke="#00C2FF"
        strokeWidth="5"
        fill="none"
        className="wave-line"
      />

      <style>
        {`
          .wave-line {
            stroke-dasharray: 200;
            stroke-dashoffset: 200;
            animation: moveWave 8s ease-in-out infinite, colorShift 8s ease-in-out infinite;
          }

          @keyframes moveWave {
            0% {
              stroke-dashoffset: 200;
            }
            62.5% {
              stroke-dashoffset: 0;
            }
            100% {
              stroke-dashoffset: 0;
            }
          }
        `}
      </style>
    </svg>
  );
};

export default AnimatedLogo;
