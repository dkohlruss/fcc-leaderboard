import React from 'react';

const LeaderBoardEntry = (props) => {
    const username = props.entry[0];
    const image = props.entry[1];
    const recent = props.entry[2];
    const alltime = props.entry[3];

    return (
        <div className="newline-leader">
            <div className="leader-entry fixed-width" id="username"><strong>{username}</strong></div>
            <div className="leader-entry fixed-width" id="image"><img src={image} alt={username} height="50" width="50"/></div>
            <div className="leader-entry fixed-width" id="recent-points">{recent}</div>
            <div className="leader-entry fixed-width" id="alltime-points">{alltime}</div>
        </div>
    );
};

export default LeaderBoardEntry;