import * as React from 'react';
import cn from 'classnames';

import './Block.scss'


type BlockProps = {
    className: string
}

const Block: React.FC<any>  = ({children, className }) => {
    return (
        <div className="block__parent">
            <div className={cn("block", className)}>
                {children}
            </div>
        </div>
    );
}

export default Block;
