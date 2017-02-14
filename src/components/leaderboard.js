import React from 'react';
import LeaderBoardEntry from './leaderboard_entry';

const LeaderBoard = (props) => {
    // props.onBoardSelect now available

    const leaderEntries = props.content.map((entry) => {
        return <LeaderBoardEntry key={entry[0]} entry={entry}/>
    });

    return (
    <div className="leaderboard">
        <div className="leader-header fixed-width">Username</div>
        <div className="leader-header fixed-width">Image</div>
        <div className="leader-header fixed-width" id="recent-header" onClick={(event) => props.onBoardSelect(event)}>RECENT
            <div className="triangle-recent is-active"></div>
        </div>
        <div className="leader-header fixed-width" id="alltime-header" onClick={(event) => props.onBoardSelect(event)}>ALL TIME
            <div className="triangle-alltime"></div>
        </div>
        <div className="leader-list">
            {leaderEntries}
        </div>
    </div>
    );
}

export default LeaderBoard;