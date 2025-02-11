import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface UnStyledLinkProps {
    link: string;
    color?: string;
    children: ReactNode;
}

const UnStyledLink: React.FC<UnStyledLinkProps> = ({ link, color, children }) => {
    return (
        <Link to={link} style={{ color: color || 'black', textDecoration: 'none' }}>
            {children}
        </Link>
    );
};

export default UnStyledLink;
