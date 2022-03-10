import React, {useEffect, useState, useRef} from 'react';
import {View, Dimensions, TouchableOpacity, Text, Image} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import COLORS from '../utilities/colors';

const {width, height} = Dimensions.get('window');

export default function MapScreen({route}) {
  const mapView = useRef();

  const [region, setRegion] = useState(null);

  useEffect(() => {
    let mapRegion = {
      latitude: route.params.latitude,
      longitude: route.params.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    };
    setRegion(mapRegion);
  }, []);

  function LocationMarker() {
    return <Marker coordinate={route.params}></Marker>;
  }

  function RenderMap() {
    return (
      <View style={{flex: 1}}>
        <MapView
          ref={mapView}
          style={{flex: 1}}
          provider={PROVIDER_GOOGLE}
          initialRegion={region}>
          <LocationMarker />
        </MapView>
      </View>
    );
  }

  function zoomIn() {
    let newRegion = {
      latitude: region.latitude,
      longitude: region.longitude,
      latitudeDelta: region.latitudeDelta / 2,
      longitudeDelta: region.longitudeDelta / 2,
    };
    setRegion(newRegion);
    mapView.current.animateToRegion(newRegion, 200);
  }

  function zoomOut() {
    let newRegion = {
      latitude: region.latitude,
      longitude: region.longitude,
      latitudeDelta: region.latitudeDelta * 2,
      longitudeDelta: region.longitudeDelta * 2,
    };
    setRegion(newRegion);
    mapView.current.animateToRegion(newRegion, 200);
  }

  function goToLocation() {
    mapView.current.animateToRegion(region, 200);
  }

  function RenderButtons() {
    return (
      <View
        style={{
          position: 'absolute',
          bottom: height * 0.35,
          right: 20,
          width: 60,
          height: 200,
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          style={{
            width: 60,
            height: 60,
            borderRadius: 30,
            backgroundColor: COLORS.white,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => zoomIn()}>
          <Text style={{fontSize: 30, color: COLORS.black}}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 60,
            height: 60,
            borderRadius: 30,
            backgroundColor: COLORS.white,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => zoomOut()}>
          <Text style={{fontSize: 30, color: COLORS.black}}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 60,
            height: 60,
            borderRadius: 30,
            backgroundColor: COLORS.white,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => goToLocation()}>
          <Image
            source={require('../../assets/located.png')}
            style={{width: 30, height: 30}}
          />
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={{flex: 1}}>
      <RenderMap />
      <RenderButtons />
    </View>
  );
}
