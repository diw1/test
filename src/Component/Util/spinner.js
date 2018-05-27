import React from 'react'

const Spinner = props => (
    <svg
        width={60}
        height={60}
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
        className="lds-ring"
        style={{ background: '0 0' }}
        {...props}
    >
        <circle
            cx={50}
            cy={50}
            fill="none"
            r={30}
            stroke="#b6b8b9"
            strokeWidth={5}
        />
        <circle
            cx={50}
            cy={50}
            fill="none"
            r={30}
            stroke="#494E52"
            strokeWidth={5}
            strokeLinecap="square"
            transform="rotate(551.646 50 50)"
        >
            <animateTransform
                attributeName="transform"
                type="rotate"
                calcMode="linear"
                values="0 50 50;180 50 50;720 50 50"
                keyTimes="0;0.5;1"
                dur="2s"
                begin="0s"
                repeatCount="indefinite"
            />
            <animate
                attributeName="stroke-dasharray"
                calcMode="linear"
                values="18.84955592153876 169.64600329384882;94.2477796076938 94.24777960769377;18.84955592153876 169.64600329384882"
                keyTimes="0;0.5;1"
                dur={2}
                begin="0s"
                repeatCount="indefinite"
            />
        </circle>
    </svg>
)

export default Spinner
