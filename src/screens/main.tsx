import React, {ReactElement} from 'react';
import {connect} from 'react-redux';
import {RefreshControl, FlatList, SafeAreaView, StyleSheet, ViewStyle} from 'react-native';

import api from '../../api';
import Car, {CarProps} from '../components/car';
import Button from '../components/button';
import {actions} from '../store';

interface Props {
  people: Array<object>;
  theme: string;
  toggleTheme: Function;
  updatePeople: Function;
}

interface State {
  loading: boolean;
  cars: Array<object> | null;
}

interface Styles {
  flex: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  flex: {
    flex: 1,
  },
});

class MainScreen extends React.Component<Props, State> {
  state: State = {
    loading: true,
    cars: null,
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

  _renderHeader: any = () => {
    return <Button title="Toggle theme" onPress={this._onTheme} />;
  };

  _renderItem = (args: any) => {
    let props = args.item;
    let theme = this.props.theme;

    return <Car {...props} theme={theme} />;
  };

  _keyExtractor = (item: any) => item.brand;

  componentDidMount(): void {
    this.loadData();
  }

  componentDidUpdate(prevProps: Props): void {
    let {people} = this.props;

    if (people !== prevProps.people) {
      this.updateCars();
    }
  }

  loadData(): void {
    let {updatePeople} = this.props;

    api.loadData().then(data => {
      updatePeople(data);
    });
  }

  updateCars(): void {
    let people: Array<object> = this.props.people;

    let cars = people.reduce((store: any, item: any) => {
      let amount = store[item.car.name] || 0;

      store[item.car.name] = amount + 1;

      return store;
    }, {});

    cars = Object.keys(cars).map(brand => ({brand, amount: cars[brand]}));

    this.setState({cars, loading: false});
  }

  renderRefreshControl(): ReactElement {
    return (
      <RefreshControl
        onRefresh={this._onRefresh}
        refreshing={this.state.loading}
      />
    );
  }

  render(): ReactElement {
    return (
      <SafeAreaView style={styles.flex}>
        <FlatList
          data={this.state.cars}
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
  (state: any) => ({
    people: state.people,
    theme: state.theme,
  }),
  actions,
)(MainScreen);
