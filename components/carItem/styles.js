import  {StyleSheet, Dimensions} from "react-native";

const styles = StyleSheet.create({
    carContainer:{
        width: '100%',
        height:Dimensions.get('screen').height,
    },
    titles:{
        marginTop:'30%',
        width: '100%',
        alignItems: 'center',
    },
    title: {
        fontSize:40,
        fontWeight: 'bold'
    },
    subTitle:{
        fontSize:18,
        color:'#5c5e62'
    },
    linkSubTitle:{
        fontSize:18,
        color: '#393C41',
        textDecorationLine: "underline",
    },
    image:{
        width:'100%',
        height: '100%',
        resizeMode: 'cover',
        position:'absolute'
    },
    buttonsContainer:{
        position: 'absolute',
        bottom:50,
        width:'100%',
    }
});


export  default styles;