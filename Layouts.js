import React from 'react';

export const Columns = count => ({ children }) => (
    <div
        className="columns"
        style={{
            maxHeight: '95vh',
            maxWidth: '95vw',
            // backgroundColor: 'tomato',
            // padding: '5%',
            // margin: "0 auto",
            display: 'grid',
            gridTemplateColumns: `repeat(${count}, max-content)`, // What's the difference between min and max content?
            gridAutoRows: 'min-content',
            gridColumnGap: '30px',
            gridRowGap: '30px',
            fontSize: 'smaller'
        }}
    >
        {React.Children.toArray(children)[0].props.children}
    </div>
);

Columns.two = Columns(2);
Columns.three = Columns(3);
Columns.four = Columns(4);
