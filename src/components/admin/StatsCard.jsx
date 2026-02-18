import React from 'react';

const StatsCard = ({ title, value, subtext, icon: Icon, color }) => {
    return (
        <div className="stats-card">
            <div className="stats-icon" style={{ backgroundColor: `${color}20`, color: color }}>
                <Icon size={24} />
            </div>
            <div className="stats-info">
                <h3 className="stats-value">{value}</h3>
                <p className="stats-title">{title}</p>
                {subtext && <span className="stats-subtext">{subtext}</span>}
            </div>
        </div>
    );
};

export default StatsCard;
