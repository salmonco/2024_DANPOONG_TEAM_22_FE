import React from 'react';
import { Dimensions } from 'react-native';
import {default as MyCarousel} from 'react-native-reanimated-carousel';
import Card from './Card';
const Carousel = ({ entries }: { entries: any[] }) => {
    const width = Dimensions.get('window').width;
    return (
        <MyCarousel
        loop={true}
        scrollAnimationDuration={1000}
        mode="parallax"
        modeConfig={{
            parallaxScrollingScale: 0.85,
            parallaxScrollingOffset: 68,
        }}
        width={width}
        height={302}
        data={entries}
        // onSnapToItem={(index) => console.log('current index:', index)}
        renderItem={({ item,index}) => (
            <Card key={index} head={item.head}/>
            )}
        />
    );
};

export default Carousel;