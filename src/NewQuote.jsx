function NewQuote(props) {
    return(
        <>
            <button id="new-quote" onClick={props.onClick} style={{backgroundColor: props.bgColor, transition: props.transition}}>New Quote</button>
        </>
    );
}

export default NewQuote;