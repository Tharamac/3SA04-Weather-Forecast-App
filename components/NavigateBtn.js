import React from 'react';
import { Button } from 'react-native';
import { withNavigation } from 'react-navigation';

class NavigateBtn extends React.Component {
  render() {
    return (
      <Button
        title="Change ZIP"
        onPress={() => {
          this.props.navigation.navigate('ZipCode');
        }}
      />
    );
  }
}

// withNavigation returns a component that wraps MyBackButton and passes in the
// navigation prop
export default withNavigation(NavigateBtn);