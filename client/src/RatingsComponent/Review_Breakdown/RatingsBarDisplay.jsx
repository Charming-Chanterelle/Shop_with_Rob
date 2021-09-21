import React from 'react';

const RatingBar = ({ rating, name }) => (
  <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="minus" className="svg-inline--fa fa-minus fa-w-14" role="img" viewBox="0 0 448 512" width="auto" height="50">
    <defs>
      <linearGradient id={`half_grad-bar-${name}`}>
        <stop offset={rating} stopColor="#f8e07ebd" />
        <stop offset={rating} stopColor="rgb(228, 222, 222)" />
      </linearGradient>
    </defs>
    <path
      d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
      fill={`url(#half_grad-bar-${name})`}
      // strokeWidth="2"
      // stroke="black"
    />
  </svg>
);

export default RatingBar;
