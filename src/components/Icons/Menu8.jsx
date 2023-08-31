
// eslint-disable-next-line react/prop-types
function Menu8({width=48, height=48, color='white'}) {
	return (
		<svg style={{backgroundColor:'#000000', padding:'5px', borderRadius:'4px'}} height={height} width={width} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <g fill="#000000" stroke={color} strokeLinecap="square" strokeLinejoin="miter" strokeMiterlimit="10" strokeWidth="2">
                <line fill="none" x1="2" x2="46" y1="24" y2="24"/>
                <line fill="none" stroke={color} x1="2" x2="46" y1="10" y2="10"/>
                <line fill="none" stroke={color} x1="2" x2="46" y1="38" y2="38"/>

            </g>
        </svg>
	);
}

export default Menu8;