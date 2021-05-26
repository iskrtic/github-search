import "./App.css";
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { user, repos, reset } from "./redux/actions";

import User from "./components/User";
import Repos from "./components/Repos";
import { Button } from "react-bootstrap";

import Search from "./components/Search";

class App extends React.Component {
  setUser = (userName) => {
    const { getUser, getRepos } = this.props;

    Promise.all([getUser(userName), getRepos(userName)]).catch((error) =>
      alert(error)
    );
  };

  handleResetUser = () => {
    const { resetUser } = this.props;
    resetUser();
  };

  componentDidUpdate() {
    console.log("Update Komponente.");
  }
  render() {
    const { name, listaRepos } = this.props;

    if (!name) {
      return (
        <div className='app'>
          <Search setUser={this.setUser} />
        </div>
      );
    }

    return (
      <div className='app'>
        <User gname={name} />
        <Repos listaRepos={listaRepos} />
        <Button
          variant='secondary'
          onClick={this.handleResetUser}
          type='submit'
          size='lg'
          block
          className='mt-5'
          style={{ width: "100%" }}>
          Reset
        </Button>
      </div>
    );
  }
}

App.propTypes = {
  name: PropTypes.object,
  listaRepos: PropTypes.array,
  getUser: PropTypes.func,
  getRepos: PropTypes.func,
  resetUser: PropTypes.func,
};

function mapStateToProps(state) {
  return {
    name: state.name,
    listaRepos: state.listaRepos,
  };
}

const mapDispatchToProps = {
  getUser: user,
  getRepos: repos,
  resetUser: reset,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
