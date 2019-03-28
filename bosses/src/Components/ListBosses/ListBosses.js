import React from 'react';
import BossViewItem from '../BossViewItem/BossViewItem';
const BossView = (props) => {
    return (
        <ul className="list-view">
            { props.list.map(item => <BossViewItem key={ item.id } bossItem={ item } />) }
        </ul>
    );
};

export default BossView;