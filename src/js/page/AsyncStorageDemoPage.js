import React, {Component} from 'react';
import {AsyncStorage, StyleSheet, Text, TextInput, View} from 'react-native';


type Props = {};
const KEY="save_key";
export default class AsyncStorageDemoPage extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            showText: ''
        }
    }


    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>AsyncStorage   </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={text => {
                        this.value = text;
                    }}
                />
                <View style={styles.input_container}>
                    <Text onPress={() => {
                        this.doSave();
                    }}>
                        store
                    </Text>
                    <Text onPress={() => {
                        this.doRemove();
                    }}>
                        delete
                    </Text>
                    <Text onPress={() => {
                        this.getData();
                    }}>
                        get
                    </Text>

                </View>

                <Text>
                    {this.state.showText}
                </Text>
            </View>
        );
    }

    /**
     * @returns {Promise.<void>}
     */
    async doSave() {
        AsyncStorage.setItem(KEY, this.value, error => {
            error && console.log(error.toString());
        });

        // AsyncStorage.setItem(KEY, this.value)
        //     .catch(error => {
        //         error && console.log(error.toString());
        //     });
        //
        // try {
        //     await  AsyncStorage.setItem(KEY, this.value);
        // } catch (error) {
        //     error && console.log(error.toString());
        // }
    }

    /**
     * 
     * @returns {Promise.<void>}
     */
    async doRemove() {
        //
        AsyncStorage.removeItem(KEY,error => {
            error && console.log(error.toString());
        });

        // 
        // AsyncStorage.removeItem(KEY)
        //     .catch(error => {
        //         error && console.log(error.toString());
        //     });
        //
        // 
        // try {
        //     await  AsyncStorage.removeItem(KEY);
        // } catch (error) {
        //     error && console.log(error.toString());
        // }
    }

    /**
     * 
     */
    async getData() {
        AsyncStorage.getItem(KEY, (error, value) => {
            this.setState({
                showText: value
            });
            console.log(value);
            error && console.log(error.toString());
        });
        // 
        // AsyncStorage.getItem(KEY)
        //     .then(value => {
        //         this.setState({
        //             showText: value
        //         });
        //         console.log(value);
        //
        //     })
        //     .catch(error => {
        //         error && console.log(error.toString());
        //     });
        // 
        // try {
        //     const value = await  AsyncStorage.getItem(KEY);
        //     this.setState({
        //         showText: value
        //     });
        //     console.log(value);
        // } catch (error) {
        //     error && console.log(error.toString());
        // }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    input: {
        height: 30,
        borderColor: 'black',
        borderWidth: 1,
        marginRight: 10
    },
    input_container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    }
});
