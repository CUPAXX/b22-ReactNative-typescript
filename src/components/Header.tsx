import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntIcon from 'react-native-vector-icons/AntDesign';

interface Props {
  navigation: any;
  scene: any;
}

const Header = (props: Props) => {
  return (
    <React.Fragment>
      <View style={HeaderStyles.header}>
        {props.scene.route.name === 'Home' ? (
          <View />
        ) : (
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <Icon
              name={'chevron-left'}
              size={25}
              // color="#000"
              color={props.scene.route.name === 'detail' ? '#fff' : '#fff'}
            />
          </TouchableOpacity>
        )}

        {props.scene.route.name === 'Home' ? (
          <View />
        ) : (
          <React.Fragment>
            {props.scene.route.name === 'Topup' ? (
              <Text style={HeaderStyles.textHeader}>CUANKU Balance</Text>
            ) : (
              <Text style={HeaderStyles.textHeader}>
                {props.scene.route.name}
              </Text>
            )}
          </React.Fragment>
        )}

        <TouchableOpacity
          style={HeaderStyles.right}
          onPress={() => props.navigation.navigate('Transaction History')}>
          {props.scene.route.name === 'Topup' ? (
            <AntIcon
              name={'barschart'}
              size={25}
              color="#fff"
              // color={scene.route.name === 'detail3' ? '#fff' : '#000'}
            />
          ) : (
            <AntIcon name={''} />
          )}
        </TouchableOpacity>
      </View>
    </React.Fragment>
  );
};

const HeaderStyles = StyleSheet.create({
  header: {
    backgroundColor: '#00bfff',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  textHeader: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
    paddingLeft: 20,
  },
  right: {
    marginLeft: 130,
  },
});

export default Header;
