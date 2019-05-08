import React from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import theme from './theme';

const CodeBlock = ( { children } ) =>
    <SyntaxHighlighter language='javascript' style={theme.prism.style}>
        {
            children
                .replace(/^\n/, '')
                .replace(/^(\t|    |  )(.*)/gm, '$2')
        }
    </SyntaxHighlighter>;

export default CodeBlock;

export const tag = ( [ str ] ) => () => <CodeBlock>{str}</CodeBlock>;
