import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import * as Location from 'expo-location'
import { use } from 'react';

const useLocation = () => {

  const [errorMsg, setErrorMsg] = useState("");
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");
  const [location, setLocation] = useState("");

  console.log('useLocation');

  const getUserLocation = async () => {

    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      setErrorMsg('Permission to location was not granted');
      console.log(errorMsg);
      return;
    }

    let { coords } = await Location.getCurrentPositionAsync();
    console.log('coords');

    if (coords) {
      const { latitude, longitude } = coords;
      console.log('latitude and longitude is: ', latitude, longitude);
      setLatitude(latitude);
      setLongitude(longitude);
      let response = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });
      console.log('user location is: ', response);
      setLocation(response[0]);
    }
  };

  useEffect(() => {
    getUserLocation();
  }, []);

  return { latitude, longitude, errorMsg, location };
};

export default useLocation;

const styles = StyleSheet.create({})