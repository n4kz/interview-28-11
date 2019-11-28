import React from 'react';
import {connect} from 'react-redux';
import {View, RefreshControl, ScrollView, TouchableOpacity, Text, SafeAreaView} from 'react-native';
import api from './api';

class Screen extends React.Component {
  state = {
    loading: true,
  }

  constructor(props) {
    super(props)
    api
      .loadData()
      .then(data => {
        console.log(this.props)
        this.props.updatePeople(data);
        this.setState({ loading: false })
      });
  }

  render() {
    let cars = this.props.people
      .map(x => x.car.name)
      .filter((x, i, arr) => arr.indexOf(x) === i);

    let amounts = cars.map(car => this.props.people.reduce((result, p) => p.car.name === car ? result + 1 : result, 0));

    return (
      <SafeAreaView style={{ flex:1 }}>
        <ScrollView
          style={{ flex:1 }}
          refreshControl={<RefreshControl onRefresh={() => this.refresh()} refreshing={this.state.loading}/>}>
          <TouchableOpacity onPress={() => this.props.toggleTheme()}>
            <Text style={{ borderRadius: 4, margin: 8, padding: 8, backgroundColor: '#cae', alignSelf: 'stretch', textAlign: 'center' }}>Toogle theme</Text>
          </TouchableOpacity>
          {cars.map((car, i) => {
            return (
              <View style={{ padding: 15, backgroundColor: this.props.theme === 'light' ? 'white' : '#aaa' }}>
                <Text style={{fontSize: 16}}>Brand: {car}</Text>
                <Text style={{marginTop: 4}}>Amount: {amounts[i]}</Text>
              </View>
            )
          })}
        </ScrollView>
      </SafeAreaView>
    )
  }

  async refresh() {
    this.setState({loading: true});
    let data = await api.loadData();
    this.props.updatePeople(data);
    this.setState({loading: false});
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
