import React, { useState } from 'react';
import { MainStyle } from '../styled/style';
import { ListStyle } from '../styled/mainItem';
import { Items } from '../data';
import { ListItems, MainBanner } from '../components';

const Main = () => {
    return (
        <MainStyle>
            <MainBanner />
            <ListStyle>
                {
                    Items.map(item => <ListItems item={item} key={`item${item.id}`} />)
                }
            </ListStyle>
        </MainStyle>
    )
};

export default Main;
