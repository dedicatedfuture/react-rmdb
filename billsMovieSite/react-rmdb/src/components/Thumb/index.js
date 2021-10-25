import React from 'react';

//styles

import { Image } from './Thumbs.styles';

const Thumb = ({ image, movieId, clickable }) => (
    <div>
        <Image src={image} alt='movie-thumb' />
    </div>
);

export default Thumb;