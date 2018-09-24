import { StyleSheet, Platform, Dimensions } from 'react-native';
import { white } from 'ansi-colors';

var screen = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 22,
        backgroundColor: 'rgba(255,255,255,1)'
    },
    view1:{
        backgroundColor: 'rgb(25,41,56)',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    view2:{
        backgroundColor: 'rgb(28,44,59)',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    view3:{
        marginVertical: 10,
    },
    view4: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderRadius: 5,
        marginVertical: 5,
    },
    text1: {
        color: '#fff',
        fontSize: 20,
        margin: 10,
    },
    text2: {
        color: '#fff',
        fontSize: 15,
    },
    text3: {
        color: 'rgb(74,91,107)',
        fontSize: 15,
    },
    text4: {
        color: 'rgb(48,244,188)',
        fontSize: 30,
    },
    text5: {
        color: '#fff',
        fontSize: 15,
    },
    subTextModal: {
        color: 'rgb(137,137,137)',
        fontSize: 12,
    },
    icon1: {
        width: 30,
        height: 30,
    },
    img1: {
        marginTop: 5,
        marginHorizontal: 5,
        width: Dimensions.get("screen").width - 10,
        height: 180,
        borderRadius: 5,
        backgroundColor: 'transparent',
    },
    circle: {
        width: 180,
        height: 180,
        borderRadius: 90,
        backgroundColor: 'rgba(0,0,0,0.3)',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5,
        marginHorizontal: 5,
        borderColor: 'rgb(74,91,107)',
        borderWidth: 3,
    },
});

export default styles;