import React from "react";
import bg from '../../assets/image/bg-info-resiskom.png';
import './hero.css';


const Hero = ({ textColor, decorationColor, image, title, subtitle }) => {
    return <div className="hero-container"
        style={{
            backgroundImage: `url(${bg})`
        }}
    >
        <div className="hero-content">
            <svg width="104" height="117" viewBox="0 0 104 117" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="4" cy="113" r="4" fill={decorationColor} />
                <circle cx="20" cy="113" r="4" fill={decorationColor} />
                <circle cx="36" cy="113" r="4" fill={decorationColor} />
                <circle cx="52" cy="113" r="4" fill={decorationColor} />
                <circle cx="68" cy="113" r="4" fill={decorationColor} />
                <circle cx="84" cy="113" r="4" fill={decorationColor} />
                <circle cx="100" cy="113" r="4" fill={decorationColor} />
                <circle cx="4" cy="97" r="4" fill={decorationColor} />
                <circle cx="20" cy="97" r="4" fill={decorationColor} />
                <circle cx="36" cy="97" r="4" fill={decorationColor} />
                <circle cx="52" cy="97" r="4" fill={decorationColor} />
                <circle cx="68" cy="97" r="4" fill={decorationColor} />
                <circle cx="84" cy="97" r="4" fill={decorationColor} />
                <circle cx="100" cy="97" r="4" fill={decorationColor} />
                <circle cx="4" cy="81" r="4" fill={decorationColor} />
                <circle cx="20" cy="81" r="4" fill={decorationColor} />
                <circle cx="36" cy="81" r="4" fill={decorationColor} />
                <circle cx="52" cy="81" r="4" fill={decorationColor} />
                <circle cx="68" cy="81" r="4" fill={decorationColor} />
                <circle cx="84" cy="81" r="4" fill={decorationColor} />
                <circle cx="100" cy="81" r="4" fill={decorationColor} />
                <circle cx="4" cy="65" r="4" fill={decorationColor} />
                <circle cx="20" cy="65" r="4" fill={decorationColor} />
                <circle cx="36" cy="65" r="4" fill={decorationColor} />
                <circle cx="52" cy="65" r="4" fill={decorationColor} />
                <circle cx="68" cy="65" r="4" fill={decorationColor} />
                <circle cx="84" cy="65" r="4" fill={decorationColor} />
                <circle cx="100" cy="65" r="4" fill={decorationColor} />
                <circle cx="4" cy="49" r="4" fill={decorationColor} />
                <circle cx="20" cy="49" r="4" fill={decorationColor} />
                <circle cx="36" cy="49" r="4" fill={decorationColor} />
                <circle cx="52" cy="49" r="4" fill={decorationColor} />
                <circle cx="68" cy="49" r="4" fill={decorationColor} />
                <circle cx="84" cy="49" r="4" fill={decorationColor} />
                <circle cx="100" cy="49" r="4" fill={decorationColor} />
                <circle cx="4" cy="33" r="4" fill={decorationColor} />
                <circle cx="20" cy="33" r="4" fill={decorationColor} />
                <circle cx="36" cy="33" r="4" fill={decorationColor} />
                <circle cx="52" cy="33" r="4" fill={decorationColor} />
                <circle cx="68" cy="33" r="4" fill={decorationColor} />
                <circle cx="84" cy="33" r="4" fill={decorationColor} />
                <circle cx="100" cy="33" r="4" fill={decorationColor} />
                <circle cx="4" cy="20" r="4" fill={decorationColor} />
                <circle cx="20" cy="20" r="4" fill={decorationColor} />
                <circle cx="36" cy="20" r="4" fill={decorationColor} />
                <circle cx="52" cy="20" r="4" fill={decorationColor} />
                <circle cx="68" cy="20" r="4" fill={decorationColor} />
                <circle cx="84" cy="20" r="4" fill={decorationColor} />
                <circle cx="100" cy="20" r="4" fill={decorationColor} />
                <circle cx="4" cy="4" r="4" fill={decorationColor} />
                <circle cx="20" cy="4" r="4" fill={decorationColor} />
                <circle cx="36" cy="4" r="4" fill={decorationColor} />
                <circle cx="52" cy="4" r="4" fill={decorationColor} />
                <circle cx="68" cy="4" r="4" fill={decorationColor} />
                <circle cx="84" cy="4" r="4" fill={decorationColor} />
                <circle cx="100" cy="4" r="4" fill={decorationColor} />
            </svg>
            <h1 style={{ color: textColor }}>
                {title}
            </h1>
            <p>
                {subtitle}
            </p>
        </div>
    </div>
}

export default Hero;