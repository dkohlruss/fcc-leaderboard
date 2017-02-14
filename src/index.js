import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import LeaderBoard from './components/leaderboard';
// import './index.css'; // Style import

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

        if (!event || event.target.id === 'recent') {
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
                <div id="alltime" onClick={event => this.getSelection(event)}>FJDISFJDLKJDS</div>
                <div id="recent" onClick={event => this.getSelection(event)}>f1j818jd18jh18djd19</div>
                <LeaderBoard content={this.state.current} />
            </div>
        );
    }
}

ReactDOM.render(
  <App />,
  document.getElementById('container')
);
