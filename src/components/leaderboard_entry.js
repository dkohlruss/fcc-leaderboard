import React from 'react';

const LeaderBoardEntry = (props) => {
    return (
        <div>
            <div><strong>{props.entry[0]}</strong></div>
            <div><img src={props.entry[1]} alt={props.entry[0]} /></div>
            <div>{props.entry[2]}</div>
            <div>{props.entry[3]}</div>
        </div>
    );
};

export default LeaderBoardEntry;