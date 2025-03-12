    import React, { useRef } from 'react';
    import styles from './TicketCard.module.scss';

    interface TicketCardProps {
        title: string;
        content: string;
    };

    function TicketCard({ title, content }: TicketCardProps) {
        return (
            <div>
                <h3>{title}</h3>
                <p>{content.substring(0,100)}...</p>
            </div>
        );
    };
    
    export default TicketCard;