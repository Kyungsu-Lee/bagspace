import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight,
} from 'react-native'
import React, {Component} from 'react';
import {PagerTabIndicator, IndicatorViewPager, PagerTitleIndicator, PagerDotIndicator} from 'rn-viewpager';

import MyScene from './Main';
import Loading from './Loading';

export default class ViewPagerPage extends Component {
  constructor(props) {
    super(props);
    this.state = {showText: true};
  }
  
   changeView(){
     this.setState({
       viewOne: !this.state.viewOne
     })
  }

  getInitialState(){
    return {
      viewOne: true
    }
  }
  
    render() {
          if(!this.state.viewOne)
        return (
            <View style={{flex:1}}>
                <IndicatorViewPager
                    style={
                      {
                        flex: 1,
                      }
                    }
                    indicator={this._renderDotIndicator()}
                >
                   
                  <View
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "rgba(74,144,226,1)",
                    }}>
                    <Image 
                      style={{
                          flex: 1,
                      }}
                      resizeMode={"contain"}
           source={require('../img/loading_bg1.png')}
                    />
                  </View>
                     <View
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "rgba(74,144,226,1)",
                    }}>
                    <Image 
                      style={{
                          flex: 1,
                      }}
                      resizeMode={"contain"}
           source={require('../img/loading_bg2.png')}
                    />
                  </View>
                    <View
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "rgba(74,144,226,1)",
                    }}>
                    <Image 
                      style={{
                          flex: 1,
                      }}
                      resizeMode={"contain"}
           source={require('../img/loading_bg3.png')}
                    />
                  </View>
                    <View
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "rgba(74,144,226,1)",
                    }}>
                    <Image 
                      style={{
                          flex: 1,
                      }}
                      resizeMode={"contain"}
           source={require('../img/loading_bg4.png')}
                    />
                  </View>
                  
                    <View
                    style={{
                      flex: 1,
                      justifyContent:  "center" ,
                      alignItems:  "center" ,
                      backgroundColor:  "rgba(74,144,226,1)" ,
                    }}>
                  <TouchableHighlight
                    onPress={() => this.changeView()
                        }
                    activeOpacity={100 / 100}
                    underlayColor={"rgb(210,210,210)"}>
                    <Image 
                      style={{
                          flex: 1,
                      }}
                      resizeMode={ "contain" }
           source={require('../img/loading_bg5.png')}
                    />
                  </TouchableHighlight>
                  
                  </View>
                </IndicatorViewPager>

                
            </View>
        );
      return(
        <Loading/>
      );
    }

    _renderTitleIndicator() {
        return <PagerTitleIndicator titles={['', '', '', '', '']} />;
    }

    _renderDotIndicator() {
        return <PagerDotIndicator pageCount={5} />;
    }
    
    _renderTabIndicator() {
        let tabs = [{
                text: 'Home',
            },{
                text: 'Message',
            },{
                text: 'Profile',
        }];
        return <PagerTabIndicator tabs={tabs} />;
    }

}