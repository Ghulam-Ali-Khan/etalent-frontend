import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface UnStyledLinkProps {
    link: string;
    children: ReactNode;
}

const UnStyledLink: React.FC<UnStyledLinkProps> = ({ link, children }) => {
    return (
        <Link to={link} style={{ color: 'black', textDecoration: 'none' }}>
            {children}
        </Link>
    );
};

export default UnStyledLink;
