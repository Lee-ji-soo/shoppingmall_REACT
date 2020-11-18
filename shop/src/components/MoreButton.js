import React, { Component } from 'react';
import { ButtonStyle } from '../styled';

class MoreButton extends Component {
    constructor(props) {
        super(props);
        this.onLoadMore = this.props.onLoadMore
    }
    render() {
        return (
            <ButtonStyle>
                <button className="btn" onClick={this.onLoadMore}>상품 더보기</button>
            </ButtonStyle>
        )
    }
};

export default MoreButton;
