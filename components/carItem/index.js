import React from "react";
import {Text, View ,Linking , ImageBackground  } from "react-native";
import styles from "./styles";
import StyledButton from "../styledButton";

const CarItem= (props) => {


    const {name,image,tagLine,TDTagLine}=props.car;


    return(
        <View style={styles.carContainer}>
            <ImageBackground
                source={image}
                style={styles.image}
            />



            <View style={styles.titles}>

                <Text style={styles.title}>{name}</Text>

                <Text style={styles.subTitle}>{tagLine}<Text style={styles.linkSubTitle} onPress={() => {Linking.openURL('http://www.google.com/')}}>{TDTagLine}</Text></Text>

            </View>

            <View style={styles.buttonsContainer}>

                <StyledButton
                    type="primary"
                    content={"CUSTOM ORDER"}
                    onPress={()=>{
                        console.warn("CUSTOM ORDER")}
                    }
                />

                <StyledButton
                    type="secondery"
                    content={"EXISTING INVENTORY"}
                    onPress={()=>{
                        console.warn("EXISTING INVENTORY")}
                    }
                />

            </View>





        </View>

    );
};

export default CarItem;