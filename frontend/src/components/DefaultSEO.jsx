import React from 'react';
import { Helmet } from 'react-helmet-async';

const DefaultSEO = () => {
    return (
        <Helmet>
            {/* Basic Meta */}
            <title>Medo Surgicals | Trusted Surgical Supply Store</title>
            <meta name="description" content="Buy surgical and medical supplies online at Medo Surgicals. Serving hospitals, dealers, and customers since 2015 with trusted quality and fast delivery." />
            <meta name="keywords" content="medical supplies, surgical products, hospital equipment, gloves, syringes, Medo Surgicals" />
            <meta name="author" content="Medo Surgicals" />
            <meta name="robots" content="index, follow" />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Medo Surgicals | Trusted Surgical Supply Store" />
            <meta property="og:description" content="Serving 500+ healthcare institutions across India. Shop certified surgical and medical products today!" />
            <meta property="og:url" content="https://www.medosurgicals.com/" />
            <meta property="og:image" content="https://res.cloudinary.com/${process.env.CLOUDINARY_NAME}/image/upload/v1743791862/Preview_pwmfhl.jpg" />

            {/* Twitter Cards */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Medo Surgicals | Trusted Surgical Supply Store" />
            <meta name="twitter:description" content="Explore our certified surgical products. Reliable, fast, and affordable medical solutions since 2015." />
            <meta name="twitter:image" content="https://res.cloudinary.com/${process.env.CLOUDINARY_NAME}/image/upload/v1743791862/Preview_pwmfhl.jpg" />
            <meta name="twitter:site" content="@medosurgicals" />
        </Helmet>
    );
};

export default DefaultSEO;
