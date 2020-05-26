import React, {Component} from 'react';
import {
    Text,
    View
} from 'react-native';

var Banner = require('./banner');

export default class UseScrollView extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <Banner/>
                {/*占满屏幕剩余空间  父View必须设置 flex的值（充满屏幕）*/}
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    flex: 1,
                }}>
                    <Text>
                        我是一个会自动轮播的Banner
                    </Text>
                </View>
            </View>
        );
    }
}