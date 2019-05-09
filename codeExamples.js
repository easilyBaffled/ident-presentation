export const tapDefinition = `
    console.tap = v => {
        console.log( v )
        return v
    };    
`;

export const tapDefinitionExpanded = `
    console.tap = v => {
        console.log( v )
        return v
    };
    
    // or, for the bold   
    console.tap = v => ( console.log( v ), v );
`;
export const chainStart = `
    const result = arr
        .map( parseNumbers )
        .filter( removeOdds )
        .reduce( average );
`;
export const chainLog = `
    const filtered = arr
        .map( parseNumbers )
        .filter( removeOdds );
    console.log( filtered );
    
    const res = filtered.reduce( average );
`;
export const chainTap = `
    const result = console.tap( arr
        .map( parseNumbers )
        .filter( removeOdds ) )
        .reduce( average );
`;
export const parseStart = `
    const userID = getUserId(
        JSON.parse( localStorage.getItem( 'user' ) )
    );
`;
export const parseLog = `
    const user = localStorage.getItem( 'user' );
    console.log( user )
    
    const userID = getUserId(
        JSON.parse( user )
    );
`;
export const parseTap = `
    const userID = getUserId(
        JSON.parse( 
            console.tap( localStorage.getItem( 'user' ) ) 
        )
    );
`;
export const objectStart = `
    const pickAndFormatTransaction = ( {
        description,
        date,
        amount,
        ...details
     } ) => ( {
        description,
        date: moment( date ).format( 'DD/MM/YYY ' ),
        amount: Number( amount )
            ? formatCurrency( amount )
            : amount
     } );
`;
export const objectLog = `
        ...
     } ) => {
        console.log( data );
        const amt = Number( amount ) ? formatCurrency( amount ) : amount
        console.log( Number( amount ), amt )
        
        const res = {
            description,
            date: moment( date ).format( 'DD/MM/YYY ' ),
            amount: amt
         }
        console.log( res )
        return res;
    };
`;
export const objectTap = `
    const pickAndFormatTransaction = ( {
        description,
        date,
        amount,
        ...details
     } ) => console.tap( {
        description,
        date: moment( console.tap(date) ).format( 'DD/MM/YYY ' ),
        amount: console.tap(Number( amount ))
            ? formatCurrency( amount )
            : amount
     } );
`;
