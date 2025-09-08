import React from 'react';

const SPARK_COUNT = 30;
const COLORS = ['#4A90E2', '#50E3C2', '#F5A623', '#F8E71C', '#D0021B'];

const Sparks: React.FC = () => {
    const sparks = Array.from({ length: SPARK_COUNT }).map((_, index) => {
        const color = COLORS[Math.floor(Math.random() * COLORS.length)];
        const angle = Math.random() * 360;
        const distance = Math.random() * 150 + 50;
        const translateX = `${Math.cos(angle * (Math.PI / 180)) * distance}px`;
        const translateY = `${Math.sin(angle * (Math.PI / 180)) * distance}px`;
        const delay = `${Math.random() * 0.2}s`;
        const duration = `${Math.random() * 1.5 + 0.5}s`;

        const style: React.CSSProperties = {
            backgroundColor: color,
            '--tx': translateX,
            '--ty': translateY,
            animationDelay: delay,
            animationDuration: duration,
        } as React.CSSProperties;

        return <div key={index} className="spark" style={style}></div>;
    });

    return <div className="sparks-container">{sparks}</div>;
};

export default Sparks;
