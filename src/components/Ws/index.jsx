import { LogoWhatsapp } from "../Icons"
function Ws() {
  return (
    <div
        onClick={ () => {window.open('https://api.whatsapp.com/send/?phone=56927022045')}}
        style={{
            position:'fixed', 
            width:'50px', 
            height:'50px', 
            zIndex:10, 
            bottom:'30px', 
            right:'30px', 
            cursor:'pointer'
        }}>
        <LogoWhatsapp />
    </div>
  )
}

export default Ws