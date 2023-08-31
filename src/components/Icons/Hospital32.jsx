
// eslint-disable-next-line react/prop-types
function Hospital32({height=32, width=32, color="white"}) {
	return (
		<svg height={height} width={width} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <g fill="#000000" stroke={color} strokeLinecap="square" strokeLinejoin="miter" strokeMiterlimit="10" strokeWidth="2">
                <polygon fill="none" points="46,16 32,16 32,2 16,2 16,16 2,16 2,32 16,32 16,46 32,46 32,32 46,32 " stroke={color}/>
            </g>
        </svg>
	);
}

export default Hospital32;