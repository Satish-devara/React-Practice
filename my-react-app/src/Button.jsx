

function Button({buttonText, ReqType, setReqType}){

    
    return(
        <button className={buttonText === ReqType ? 'selected' : null}
        type="button"
        onClick={() => setReqType(buttonText)}>
            {buttonText}
            </button>
    )
}

export default Button