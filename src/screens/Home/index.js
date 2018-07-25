import React, { Component } from 'react';
import { Image, FlatList,StyleSheet, View, ActivityIndicator } from 'react-native';
import { Content, Card, CardItem, Thumbnail, Text, Button, Left, Body, Right } from 'native-base';
import axios from 'axios'

const API_NEWS = `https://newsapi.org/v2/top-headlines?country=us&apiKey=bed55e63078b41cf87108bfb00b5d203`

// import './style.css'
export default class Home extends Component {
    static navigationOptions = {
        title: 'Home',
    };

    constructor(){
        super()
        this.state = {
            article: [],
            animating: true,
        }
    }

    getData () {
        axios.get(API_NEWS)
        .then(({data})=> this.setState({ article: data.articles }) ).catch((err)=> console.log(err))
    }

    closeActivityIndicator = () => {
        setTimeout(() =>
            this.setState({
                animating: false }), 6000)

    }

    componentDidMount(){
        this.getData()
        this.closeActivityIndicator()
    }

  render() {
      const { article, animating } = this.state
    return (
       <View style={[styles.container, styles.horizontal]}>
            <Content style={styles.articleStyle}>
            {animating == true && (
                <ActivityIndicator size="large" color="#0000ff"/>
            )}
            <FlatList
                data={article}
                renderItem={({item})=> (
                    <Card>
                    <CardItem>
                        <Left>
                        <Thumbnail source={{uri: 'https://image.flaticon.com/icons/png/512/235/235298.png'}} />
                        <Body>
                            <Text>{item.title}</Text>
                            <Text note>{item.author}</Text>
                        </Body>
                        </Left>
                    </CardItem>
                    <CardItem cardBody>
                        <Image source={{uri: item.urlToImage}} style={{height: 200, width: null, flex: 1}}/>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Text>
                                {item.description}
                            </Text>
                            <Left>
                                <Button bordered success
                                    onPress={()=> this.props.navigation.navigate('Detail', { text: item })}
                                >
                                    <Text>Detail</Text>
                                </Button>
                            </Left>
                            <Right>
                                <Text>{item.publishedAt.substring(0, 50)}</Text>
                            </Right>
                        </Body>
                    </CardItem>
                    </Card>
                )}
            />
        </Content>
       </View>
    );
  }
}

const styles = StyleSheet.create({
    articleStyle:{
         margin: 10,
    },
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10
    }
 })