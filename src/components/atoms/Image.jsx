import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Image = ({ alt, src, className, width, height }) => (
    <LazyLoadImage
        alt={alt}
        effect="blur"
        src={src}
        width={width}
        height={height}
        className={className}
    />
);

export default Image;