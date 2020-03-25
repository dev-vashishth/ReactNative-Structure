//LIBRARIES
import React, { Component } from 'react'
import {
    Text, View, StyleSheet, ScrollView, TextInput, TouchableOpacity, ImageBackground,
    AsyncStorage, Image, TouchableWithoutFeedback, Keyboard, Button
} from 'react-native'
import { connect } from 'react-redux'
//ASSETS
import { Matrics } from '@Assets';
import { loginRequest } from '@Redux/Actions/AuthActions'
// import { SimpleButton, TextInputView, LoadWheel, GlobalVar } from '@Components'
// import { loginRequest, forgotPasswordRequest } from '@Redux/Actions/AuthActions'

//====CLASS DECLARATION====//

class Login extends Component {

    //--->>>Specify Navigation Properties for screen------>>>
    static navigationOptions = () => ({
        header: null,
        gesturesEnabled: false,
    })

    //--------->>>State Initilization----------->>>
    state = {
        email: '',
        password: '',
        loading: false,
        isError: false,
        clearId: '',
        forgotPassModal: false,
        forgotPassEmail: ''
    }

    //------------>>>LifeCycle Methods------------->>>


    //------------->>>Controllers/Functions------------>>>>
    login(){
        
        console.log("email", this.state.email)
        this.props.loginRequest({
            email: this.state.email,
            password: this.state.password
        })
        // console.log("email", this.state.email)
    }

    //----------->>>Render Method-------------->>>

    render() {
        return (
            <View>
                <TextInput
                    style={styles.textContainer}
                    onChangeText={(text) => this.setState({ email: text })}
                    value={this.state.email}
                    autoComplete={'off'}
                    autoCorrect={false}
                />
                <TextInput
                    style={styles.textContainer}
                    onChangeText={(text) => this.setState({ password: text })}
                    value={this.state.password}
                    autoComplete='off'
                    autoCorrect={false}
                />
                <Button
                    onPress={() => this.login()}
                    title="Login"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>
        )

    }

}



//Props Connection
const mapStateToProps = (state) => {
    return {
        auth: state.Auth,
    };
}
//Redux Connection  
export default connect(mapStateToProps, { loginRequest })(Login);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textContainer: {
        marginHorizontal: Matrics.doubleBaseMargin,
        marginVertical: Matrics.bigMargin,
        borderColor: 'black',
        borderWidth: 1,
        height: 40
    },
})
