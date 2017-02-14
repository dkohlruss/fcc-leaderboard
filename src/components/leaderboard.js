import React from 'react';
import LeaderBoardEntry from './leaderboard_entry';

const LeaderBoard = (props) => {
    const leaderEntries = props.content.map((entry) => {
        return <LeaderBoardEntry key={entry[0]} entry={entry}/>
    });

    return (
    <div>

        <ul>
            {leaderEntries}
        </ul>
    </div>
    );
}

export default LeaderBoard;