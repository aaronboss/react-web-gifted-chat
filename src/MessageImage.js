import React from 'react';
import PropTypes from 'prop-types';

import {
  Image,
  StyleSheet,
  View,
  ViewPropTypes,
  Dimensions,
} from 'react-native';

export default class MessageImage extends React.Component {
  render() {
    const {width, height} = Dimensions.get('window');

    return (
      <View style={[styles.container, this.props.containerStyle]}>
        <Image
          {...this.props.imageProps}
          style={[styles.image, this.props.imageStyle]}
          source={{uri: this.props.currentMessage.image}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  image: {
    width: 150,
    height: 100,
    borderRadius: 13,
    margin: 3,
    resizeMode: 'cover',
  },
  imageActive: {
    resizeMode: 'contain',
  },
});

MessageImage.defaultProps = {
  currentMessage: {
    image: null,
  },
  containerStyle: {},
  imageStyle: {},
  imageProps: {},
  lightboxProps: {},
};

MessageImage.propTypes = {
  currentMessage: PropTypes.object,
  containerStyle: ViewPropTypes.style,
  imageStyle: Image.propTypes.style,
  imageProps: PropTypes.object,
  lightboxProps: PropTypes.object,
};
