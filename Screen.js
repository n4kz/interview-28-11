import React from 'react';
import {connect} from 'react-redux';
import {View, RefreshControl, ScrollView, TouchableOpacity, Text, SafeAreaView} from 'react-native';

import api from './api';
import Car from './src/components/car';
import Button from './src/components/button';

class Screen extends React.Component {
  state = {
    loading: true,
  };

  _onRefresh = () => {
    this.setState(({ loading }) => {
      if (!loading) {
        this.loadData();
      }

      return {
        loading: true,
      };
    });
  };

  _onTheme = () => {
    let { toggleTheme } = this.props;

    toggleTheme();
  };

  _renderRefreshControl = () => {
    let { loading } = this.state;

    return (
      <RefreshControl onRefresh={this._onRefresh} refreshing={loading} />
    );
  };

  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate(prevProps) {
    let { people } = this.props;
    let { loading } = this.state;

    if (loading && people !== prevProps.people) {
      this.setState({ loading: false });
    }

    if (people !== prevProps.people) {
      this.updateCars();
    }
  }

  loadData() {
    let { updatePeople } = this.props;

    api
      .loadData()
      .then((data) => {
        updatePeople(data);
      });
  }

  updateCars() {
    let { people } = this.props;

    let cars = people
      .reduce((store, { car }) => {
        let amount = store[car.name] || 0;

        store[car.name] = amount + 1;

        return store;
      }, {});

    cars = Object.keys(cars)
      .map((brand) => ({ brand, amount: cars[brand] }));

    this.setState({ cars });
  }

  render() {
    let { theme } = this.props;
    let { cars = [] } = this.state;

    return (
      <SafeAreaView style={{ flex:1 }}>
        <ScrollView
          style={{ flex:1 }}
          refreshControl={this._renderRefreshControl}>
          <Button title='Toggle theme' onPress={this._onTheme} />
          {cars.map((props) => <Car {...props} theme={theme} />)}
        </ScrollView>
      </SafeAreaView>
    )
  }
}

export default connect(
  state => ({
    people: state.people,
    theme: state.theme,
  }),
  dispatch => ({
    updatePeople: people => dispatch({type: 'UPDATE_PEOPLE', people}),
    toggleTheme: () => dispatch({type: 'TOGGLE_THEME'}),
  }),
)(Screen);
