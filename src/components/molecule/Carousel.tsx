import React from 'react';
import { Dimensions } from 'react-native';
import Carousel  from 'react-native-reanimated-carousel';
import Card from './Card';
const MyCarousel = ({ entries }: { entries: any[] }) => {
    const width = Dimensions.get('window').width;
    return (
        <Carousel
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
        onSnapToItem={(index) => console.log('current index:', index)}
        renderItem={({ index }) => (
            <Card key={index} head={entries[index].head} sub={entries[index].sub}/>
            )}
        />
    );
};

export default MyCarousel;