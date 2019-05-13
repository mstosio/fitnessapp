import React from 'react';
import { StyledAvatar } from '../layout/styled/index';


const Avatar = (props) => {
    console.log(props);
    return (
        <StyledAvatar src={props.src}></StyledAvatar>
    );
};

export default Avatar;