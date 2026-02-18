import React from 'react';

const StatusBadge = ({ status }) => {
    let colorClass = 'badge-gray';

    switch (status?.toLowerCase()) {
        case 'confirmed':
        case 'replied':
            colorClass = 'badge-green';
            break;
        case 'pending':
        case 'unread':
            colorClass = 'badge-orange';
            break;
        case 'cancelled':
        case 'read':
            colorClass = 'badge-red'; // Or gray for read
            break;
        default:
            colorClass = 'badge-gray';
    }

    if (status?.toLowerCase() === 'read') colorClass = 'badge-blue';

    return (
        <span className={`status-badge ${colorClass}`}>
            {status || 'Unknown'}
        </span>
    );
};

export default StatusBadge;
