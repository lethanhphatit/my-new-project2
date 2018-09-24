import React from 'react';
import styles from './styles/styles';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
  Picker,
} from 'react-native';
import { green } from 'ansi-colors';

var screen = Dimensions.get('window');
export default class App extends React.Component {

  state = {
    checked: '1',
    quantity: 0,
    Selected: 'Dhaka (+6:)'
  }

  render() {
    return (
      <View
        style={styles.container}>
        <View style={styles.view1}>
          <TouchableOpacity
            style={{
              margin: 10,
            }}
          >
            <Image
              source={require('./src/icons/menu2.png')}
              style={styles.icon1}
            />
          </TouchableOpacity>
          <Text style={styles.text1}>
            Islamic App
            </Text>
          <TouchableOpacity
            style={{
              margin: 10,
            }}
          >
            <Image
              source={require('./src/icons/share.png')}
              style={styles.icon1}
            />
          </TouchableOpacity>
        </View>
        <View
          style={styles.view2}
        >
          <View
            style={{
              marginLeft: 15,
            }}
          >
            <View
              style={styles.view3}
            >
              <Text style={styles.text2}>Mon 21 Now, 2016</Text>
              <Text style={styles.text3}>22 Safar, 1438 AH</Text>
            </View>
            <View
              style={styles.view3}
            >
              <Picker
                textStyle={{ color: '#fff', }}
                selectedValue={this.state.sizeSelected}
                style={{
                  height: 40,
                  width: 130,
                  marginVertical: 5,
                  justifyContent: 'center',
                  backgroundColor: 'rgb(40,56,71)',
                  borderRadius: 20,
                  color: '#fff'
                }}
                mode="dropdown"
                onValueChange={(itemValue, itemIndex) => this.setState({ sizeSelected: itemValue })}>
                <Picker.Item label="Dhaka (+6:)" value="Dhaka (+6:)" />
                <Picker.Item label="Dhaka (+5:)" value="Dhaka (+5:)" />
              </Picker>
            </View>
            <View style={[styles.view3, {
              flexDirection: 'row'
            }]}>
              <Text
                style={[styles.text3, { marginTop: 5, }]}
              >Notification</Text>
              <TouchableOpacity
                style={{
                  justifyContent: 'flex-end',
                }}
              >
                <Image
                  source={require('./src/icons/ring2.png')}
                  style={[styles.icon1, { marginLeft: 10 }]}
                />
              </TouchableOpacity>
            </View>

          </View>
          <View>
            <View style={styles.circle} >
              <Text style={styles.text5}>Fajr</Text>
              <Text style={styles.text4}>4:50 AM</Text>
              <Text style={styles.text5}>-4:50:32</Text>
            </View>
            <View style={styles.circle2} >

            </View>
          </View>

        </View>
        <ScrollView
          style={styles.scrollView}
        >
          <View
            style={styles.view4}>
            <Image
              source={require('./src/icons/customer.png')}
              style={{
                width: 50,
                height: 50,
                resizeMode: 'contain'
              }} />
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: "white",
              }}
            >
              <View
                style={{
                  justifyContent: 'flex-end',
                  flexDirection: 'column',
                  marginHorizontal: 10,
                  marginVertical: 5
                }}>
                <Text style={[styles.subTextModal,]}>Prayer</Text>
                <Text style={[styles.subTextModal, { color: 'rgba(145,145,145,1)', fontSize: 10, }]}>Learn how to pray</Text>
              </View>
            </View>
          </View>
          <View
            style={styles.view4}>
            <Image
              source={require('./src/icons/customer.png')}
              style={{
                width: 50,
                height: 50,
                resizeMode: 'contain'
              }} />
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: "white",
              }}
            >
              <View
                style={{
                  justifyContent: 'flex-end',
                  flexDirection: 'column',
                  marginHorizontal: 10,
                  marginVertical: 5
                }}>
                <Text style={[styles.subTextModal,]}>Prayer</Text>
                <Text style={[styles.subTextModal, { color: 'rgba(145,145,145,1)', fontSize: 10, }]}>Learn how to pray</Text>
              </View>
            </View>
          </View>
          <View
            style={styles.view4}>
            <Image
              source={require('./src/icons/customer.png')}
              style={{
                width: 50,
                height: 50,
                resizeMode: 'contain'
              }} />
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: "white",
              }}
            >
              <View
                style={{
                  justifyContent: 'flex-end',
                  flexDirection: 'column',
                  marginHorizontal: 10,
                  marginVertical: 5
                }}>
                <Text style={[styles.subTextModal,]}>Prayer</Text>
                <Text style={[styles.subTextModal, { color: 'rgba(145,145,145,1)', fontSize: 10, }]}>Learn how to pray</Text>
              </View>
            </View>
          </View>
          <View
            style={styles.view4}>
            <Image
              source={require('./src/icons/customer.png')}
              style={{
                width: 50,
                height: 50,
                resizeMode: 'contain'
              }} />
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: "white",
              }}
            >
              <View
                style={{
                  justifyContent: 'flex-end',
                  flexDirection: 'column',
                  marginHorizontal: 10,
                  marginVertical: 5
                }}>
                <Text style={[styles.subTextModal,]}>Prayer</Text>
                <Text style={[styles.subTextModal, { color: 'rgba(145,145,145,1)', fontSize: 10, }]}>Learn how to pray</Text>
              </View>
            </View>
          </View>
          <View
            style={styles.view4}>
            <Image
              source={require('./src/icons/customer.png')}
              style={{
                width: 50,
                height: 50,
                resizeMode: 'contain'
              }} />
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: "white",
              }}
            >
              <View
                style={{
                  justifyContent: 'flex-end',
                  flexDirection: 'column',
                  marginHorizontal: 10,
                  marginVertical: 5
                }}>
                <Text style={[styles.subTextModal,]}>Prayer</Text>
                <Text style={[styles.subTextModal, { color: 'rgba(145,145,145,1)', fontSize: 10, }]}>Learn how to pray</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
