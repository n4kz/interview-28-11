import React from 'react';
import {connect} from 'react-redux';
import {RefreshControl, FlatList, SafeAreaView, StyleSheet} from 'react-native';

import api from '../../api';
import Car from '../components/car';
import Button from '../components/button';
import {actions} from '../store';

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});

class MainScreen extends React.Component {
  state = {
    loading: true,
  };

  _onRefresh = () => {
    this.setState(({loading}) => {
      if (!loading) {
        this.loadData();
      }

      return {
        loading: true,
      };
    });
  };

  _onTheme = () => {
    let {toggleTheme} = this.props;

    toggleTheme();
  };

  _renderHeader = () => {
    return <Button title="Toggle theme" onPress={this._onTheme} />;
  };

  _renderItem = ({item: props}) => {
    let {theme} = this.props;

    return <Car {...props} theme={theme} />;
  };

  _keyExtractor = ({brand}) => brand;

  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate(prevProps) {
    let {people} = this.props;

    if (people !== prevProps.people) {
      this.updateCars();
    }
  }

  loadData() {
    let {updatePeople} = this.props;

    api.loadData().then(data => {
      updatePeople(data);
    });
  }

  updateCars() {
    let {people} = this.props;

    let cars = people.reduce((store, {car}) => {
      let amount = store[car.name] || 0;

      store[car.name] = amount + 1;

      return store;
    }, {});

    cars = Object.keys(cars).map(brand => ({brand, amount: cars[brand]}));

    this.setState({cars, loading: false});
  }

  renderRefreshControl() {
    let {loading} = this.state;

    return <RefreshControl onRefresh={this._onRefresh} refreshing={loading} />;
  }

  render() {
    let {cars, loading} = this.state;

    return (
      <SafeAreaView style={styles.flex}>
        <FlatList
          data={cars}
          extraData={loading}
          style={styles.flex}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}
          refreshControl={this.renderRefreshControl()}
          ListHeaderComponent={this._renderHeader}
        />
      </SafeAreaView>
    );
  }
}

export default connect(
  ({people, theme}) => ({
    people,
    theme,
  }),
  actions,
)(MainScreen);
