import React from 'react';
import {connect} from 'react-redux';
import {View, RefreshControl, ScrollView, TouchableOpacity, Text, SafeAreaView} from 'react-native';
import api from './api';
import Car from './src/components/car';

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

  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate(prevProps) {
    let { people } = this.props;
    let { loading } = this.state;

    if (loading && people !== prevProps.people) {
      this.setState({ loading: false });
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

  render() {
    let { theme } = this.props;

    let cars = this.props.people
      .map(x => x.car.name)
      .filter((x, i, arr) => arr.indexOf(x) === i);

    let amounts = cars.map(car => this.props.people.reduce((result, p) => p.car.name === car ? result + 1 : result, 0));

    return (
      <SafeAreaView style={{ flex:1 }}>
        <ScrollView
          style={{ flex:1 }}
          refreshControl={<RefreshControl onRefresh={this._onRefresh} refreshing={this.state.loading}/>}>
          <TouchableOpacity onPress={() => this.props.toggleTheme()}>
            <Text style={{ borderRadius: 4, margin: 8, padding: 8, backgroundColor: '#cae', alignSelf: 'stretch', textAlign: 'center' }}>Toogle theme</Text>
          </TouchableOpacity>
          {cars.map((car, index) => <Car brand={car} amount={amounts[index]} theme={theme} />)}
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
