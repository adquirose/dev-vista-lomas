
// eslint-disable-next-line react/prop-types
function Email({width=36, height=36, color="#4c4c4a"}) {
	return (
		<svg height={height} width={width} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <g fill="#000000" stroke={color} strokeLinecap="square" strokeLinejoin="miter" strokeMiterlimit="10" strokeWidth="2">
                <polyline fill="none" points="39 13 24 28 9 13"/>
                <rect height="36" width="44" fill="none" rx="4" stroke={color} x="2" y="6"/>
                <line fill="none" x1="16" x2="9" y1="28" y2="35"/>
                <line fill="none" x1="32" x2="39" y1="28" y2="35"/>
            </g>
        </svg>
	);
}

export default Email;