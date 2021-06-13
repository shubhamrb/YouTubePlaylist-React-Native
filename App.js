// import {
//   FlatList,
//   Text,
//   ActivityIndicator,
//   View,
//   StyleSheet,
//   TextInput,
// } from 'react-native';

// export default class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isLoading: true,
//       data: [],
//     };
//   }

//   componentDidMount() {
//     return (
//       fetch('https://ai.frenzi.in/spellcheck/', {
//         method: 'POST',
//         headers: {
//           Accept: '*/*',
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           query: 'radhe',
//           type: 'media',
//         }),
//       })
//         .then(response => response.json())
//         .then(result => {
//           this.setState({
//             isLoading: false,
//             data: result,
//           });
//           console.log(result);
//         })

//         //  fetch('https://reactnative.dev/movies.json')
//         //   .then(response => response.json())
//         //   .then(result => {
//         //     this.setState({
//         //       isLoading: false,
//         //       data: result.movies,
//         //     });
//         //   })
//         .catch(error => {
//           console.log(error);
//         })
//     );
//   }

//   render() {
//     if (this.state.isLoading) {
//       return (
//         <View>
//           <ActivityIndicator />
//         </View>
//       );
//     } else {
//       return (
//         (<TextInput value={Number} />),
//         (
//           <FlatList
//             data={this.state.data}
//             renderItem={({item}) => <Text>{item.name}</Text>}
//           />
//         )
//       );
//     }
//   }

//   styles = StyleSheet.create({
//     container: {
//       backgroundColor: '#000',
//     },
//   });
// }

// App.js
import React from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import Routes from './Route';
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
        <Routes />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
