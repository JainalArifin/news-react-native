import React, { Component } from 'react'
import { View, Image } from 'react-native'
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';



export default class Detail extends Component {
    static navigationOptions = {
        title: 'Deatil'
    }

    render() {
        const getParam = this.props.navigation.getParam('text', ' ini kalo defAULTNY')
        return (
            <Container>
                <Content>
                    <Card style={{ flex: 0 }}>
                        <CardItem>
                            <Left>
                                <Thumbnail source={{ uri: 'https://image.flaticon.com/icons/png/512/235/235298.png' }} />
                                <Body>
                                    <Text>{getParam.title}</Text>
                                    <Text note>{getParam.publishedAt}</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Image source={{ uri: getParam.urlToImage}} style={{ height: 200, width: 200, flex: 1 }} />
                                <Text>
                                {getParam.description}
                                </Text>
                            </Body>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        )
    }
}