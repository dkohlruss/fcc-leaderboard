import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import LeaderBoard from './components/leaderboard';
import './style/index.css'; // Style import

class App extends Component {
     constructor(props) {
         super(props);

         this.state = {
             current: []
         };

         this.getSelection();
     }

    getSelection(event) {
        let recent = new Request('https://fcctop100.herokuapp.com/api/fccusers/top/recent');
        let alltime = new Request('https://fcctop100.herokuapp.com/api/fccusers/top/alltime');
        let request = alltime;

        if (event) {
            document.querySelector('.triangle-recent').classList.remove('is-active');
            document.querySelector('.triangle-alltime').classList.remove('is-active');
            event.selectedBoard.target.children[0].classList.toggle('is-active');
            // Removes is-active class from both and re-sets to current
        }

        if (!event || event.selectedBoard.target.id === 'recent-header') {
            request = recent;
        }

        fetch(request).then(response => {
            return response.json();
        }).then(result => {
            let res = result.map(entry =>
                [entry.username, entry.img, entry.recent, entry.alltime]
            );
            this.setState({ current: res });
        });
    }

    render() {
        return (
            <div>
                <div className="top-page"><img src="https://s3.amazonaws.com/freecodecamp/freecodecamp_logo.svg" alt="FCC LOGO" height="50"/></div>
                <LeaderBoard
                    content={this.state.current}
                    onBoardSelect={selectedBoard => this.getSelection({selectedBoard}) } />
            </div>
        );
    }
}

ReactDOM.render(
  <App />,
  document.getElementById('container')
);
