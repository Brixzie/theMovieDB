import React from "react";
//styles
import { Image } from './Thumb.styles';
//test2
const Thumb = ({ image, movieId, clickable }) => (
    <div>
        <Image src={image} alt='movie-thumb' />
    </div>
)


export default Thumb;