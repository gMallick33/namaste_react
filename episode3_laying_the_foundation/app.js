import React from 'react';
import ReactDOM from 'react-dom/client';

const jsxHeading = (
    <h1 className='head' tabIndex="5">
        Namaste React from jsxHeading
    </h1>
);
const spanElem = (
    <span>
        this is a span element
    </span>
)
const Title = () => (
    <h1>
        {spanElem}
        Namaste Title
    </h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading);

const HeadingComponent = () => (
    <div>
        <Title/>
        {Title()}
        <Title></Title>
        {jsxHeading}
        <h1 className="head">
            Namaste functional component
        </h1>
    </div>
);

// To render functional component:
root.render(<HeadingComponent/>);