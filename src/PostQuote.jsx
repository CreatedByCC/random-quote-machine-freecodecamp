import {FaTwitter} from 'react-icons/fa'

function PostQuote(props) {
    return (
        <>
            <a id="tweet-quote" href="twitter.com/intent/tweet" style={{backgroundColor: props.bgColor, transition: props.transition}}><FaTwitter /></a>
        </>
    );
}

export default PostQuote;