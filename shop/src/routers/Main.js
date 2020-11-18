import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { MainStyle, ListStyle } from '../styled';
import { ListItems, MainBanner, SortButton, MoreButton } from '../components';
import { sortAction, detailAction } from '../actions';
import { api } from '../utils/api';

const Main = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const Items = useSelector(({ sortReducer }) => sortReducer.Items, []);
    const [state, setState] = useState({
        low: false,
        high: false,
    })
    const [more, setMore] = useState(0);

    const onSortLow = () => {
        dispatch(sortAction.onSortLow());
        setState({
            ...state,
            low: !state.low,
            high: false
        })
        if (state.low) {
            dispatch(sortAction.onOrigin());
        }
    };

    const onSortHigh = () => {
        dispatch(sortAction.onSortHigh());
        setState({
            ...state,
            low: false,
            high: !state.high
        })
        if (state.high) {
            dispatch(sortAction.onOrigin());
        }
    };

    const onDetail = (id) => {
        dispatch(detailAction.onDetail(id));
        history.push('/detail');
    }

    async function fetchItems() {
        const data = await api.fetchItems();
        console.log(data);
    }

    const onLoadMore = () => {
        if (more == 0) {
            fetchItems();
        }
    };

    return (
        <MainStyle>
            <MainBanner />
            <SortButton state={state} onSortLow={onSortLow} onSortHigh={onSortHigh} />
            <ListStyle>
                {
                    Items.map(item => <ListItems onDetail={onDetail} item={item} key={`item${item.id}`} />)
                }
            </ListStyle>
            <MoreButton onLoadMore={onLoadMore} />
        </MainStyle>
    )
};

export default Main;
