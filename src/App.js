import React, { Component } from 'react';

import './styles';

import PROFILES from './profiles.json';

import Ranking from './components/Ranking';
import Modal from './components/Modal';
import UserInfo from './components/UserInfo';


class App extends Component {
  state = {
    profiles: [],
    modalOpen: false, //
    user: { //
      picture: '', //
      name: '', //
      points: 0, //
    },
  };

  componentWillMount() {
    this.setState({
      profiles: PROFILES,
    });
  }

  render() {
    const { modalOpen, user } = this.state; //
    return (
      <div>
        <Ranking
          profiles={this.state.profiles}
          onSelectProfile={
            user => this.setState({ //
              modalOpen: true, //
              user, //
            })
           }
        />
        <Modal
          show={modalOpen}
          onHide={() => this.setState({ modalOpen: false })}
        >
          <UserInfo
            picture={user.picture} //
            name={user.name} //
            points={user.points} //
          />
        </Modal>
      </div>
    );
  }
}

export default App;
