
// eslint-disable-next-line react/prop-types
function ShoppingBag({height=32, width=32, color="white"}) {
	return (
		<svg height={height} width={width} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <g fill="#000000" stroke={color} strokeLinecap="square" strokeLinejoin="miter" strokeMiterlimit="10" strokeWidth="2">
                <path d="M38.469,46H9.531a4,4,0,0,1-3.969-4.5L9,14H39l3.438,27.5A4,4,0,0,1,38.469,46Z" fill="none" stroke={color}/>
                <path d="M17,20V9a7,7,0,0,1,7-7h0a7,7,0,0,1,7,7V20" fill="none"/>
            </g>
        </svg>
	);
}

export default ShoppingBag;