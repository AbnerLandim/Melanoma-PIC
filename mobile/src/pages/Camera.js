import React, { useState, useEffect, useRef } from 'react';
import { Text, View, TouchableOpacity, TouchableWithoutFeedback, StyleSheet, Modal, Image } from 'react-native';
import { Camera } from 'expo-camera';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import * as FileSystem from 'expo-file-system';


const { FlashMode: CameraFlashModes, Type: CameraTypes } = Camera.Constants;

export default function App({ 
  capturing = false, 
  cameraType = CameraTypes.back, 
  flashMode = CameraFlashModes.off, 
  setFlashMode, setCameraType, 
  onCaptureIn, onCaptureOut, onLongCapture, onShortCapture,  
}) {

  const camRef = useRef(null);
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [capturedPhoto, setCapturedPhoto] = useState(null);
  const [open, setOpen] = useState(false); 

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  async function takePicture(){
    if(camRef){
      const data = await camRef.current.takePictureAsync();
      setCapturedPhoto(data.uri);
      setOpen(true);
      const base64 = await FileSystem.readAsStringAsync(data.uri, { encoding: 'base64' });
      console.log(base64);
      console.log(data);
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} type={type} ref= {camRef}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            flexDirection: 'row',
          }}></View>
    <Grid style={styles.bottomToolbar}>
        <Row>
            <Col style={styles.alignCenter}>
                <TouchableOpacity onPress={() => setFlashMode( 
                    flashMode === CameraFlashModes.on ? CameraFlashModes.off : CameraFlashModes.on 
                )}>
                    <Ionicons
                        name={flashMode == CameraFlashModes.on ? "md-flash" : 'md-flash-off'}
                        color="white"
                        size={30}
                    />
                </TouchableOpacity>
            </Col>
            <Col size={2} style={styles.alignCenter}>
                <TouchableWithoutFeedback
                    onPress={ takePicture}
                    >
                    <View style={[styles.captureBtn, capturing && styles.captureBtnActive]}>
                        {capturing && <View style={styles.captureBtnInternal} />}
                    </View>
                </TouchableWithoutFeedback>
            </Col>
            <Col style={styles.alignCenter}>
                <TouchableOpacity onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
                    <Ionicons
                        name="md-reverse-camera"
                        color="white"
                        size={30}
                    />
                </TouchableOpacity>
            </Col>
        </Row>
    </Grid>
    </Camera>
    { capturedPhoto && 
       <Modal
         animationType="slide"
         transparent ={false}
         visible={open}
         >


          <View style={{flex: 1, justifyContent: "center", alignItems: "center", margin: 20}}>
            <TouchableOpacity style={{margin: 10}} onPress ={() => setOpen(false)}>
              <FontAwesome name = "window-close" size={50} color = "#FF0000"/>
            </TouchableOpacity>

            <Image
             style ={{width: '100%', height: 300, borderRadius: 20}}
             source={{uri : capturedPhoto}}
             />

          </View>
       </Modal>
    }
    </View>
  );
}
const styles = StyleSheet.create(
  {

    // src/styles.js file
// ... previously written code
alignCenter: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
},
bottomToolbar: {
  width: "100%",
  position: 'absolute',
  height: 100,
  bottom: 0,
},
captureBtn: {
  width: 60,
  height: 60,
  borderWidth: 2,
  borderRadius: 60,
  borderColor: "#FFFFFF",
},
captureBtnActive: {
  width: 80,
  height: 80,
},
captureBtnInternal: {
  width: 76,
  height: 76,
  borderWidth: 2,
  borderRadius: 76,
  backgroundColor: "red",
  borderColor: "transparent",
},
//... previously written code
  });