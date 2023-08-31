// eslint-disable-next-line react/prop-types
function Hat3({ height=32, width=32, color='white' }) {
	return (
		<svg height={height} width={width} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <g fill="#000000" stroke={color} strokeLinecap="square" strokeLinejoin="miter" strokeMiterlimit="10" strokeWidth="2">
                <line fill="none" x1="45" x2="45" y1="21" y2="32"/>
                <polygon fill="none" points="24,26 4,15 24,6 44,15 " stroke={color}/>
                <path d="M9,17.75V35c0,3.866,6.716,7,15,7 c8.284,0,15-3.134,15-7V17.75" fill="none" stroke={color} strokeLinecap="butt"/>
            </g>
        </svg>
	);
}

export default Hat3;