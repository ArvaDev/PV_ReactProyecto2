import './Component.css'

function Button({text, onClick}) {
    return ( 
    <button className="comp btn" onClick={onClick}>
        {text}
    </button> );
}

export default Button;