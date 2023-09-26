import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa'

function Quote({quote, author}) {
return (
    <div>
        <p id="text"><FaQuoteLeft /> {quote} <FaQuoteRight /></p>
        <p id="author">- {author}</p>
    </div>
);
}

export default Quote;