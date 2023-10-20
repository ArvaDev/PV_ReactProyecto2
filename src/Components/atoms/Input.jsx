function Input({type, name, placeholder, onChange, onBlur}) {
    return ( 
        <input type={type} className='comp int' placeholder={placeholder} name={name} onBlur={onBlur} onChange={onChange}></input> 
    );
}

export default Input;