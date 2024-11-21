import React from 'react';
import { Dimensions } from 'react-native';
import Card from './Card';
import { FlatList, GestureHandlerRootView } from 'react-native-gesture-handler';
import { RCD } from '@apis/RCDApis/getRCDList';
const Carousel= ({entries}:{entries:RCD[]})=>{
    const pageWidth = Dimensions.get('window').width-60
    const gap = 28
    const offset = 0
    return (
    <GestureHandlerRootView style={{width:Dimensions.get('window').width,height:333}} >
        <FlatList
        style={{width:'100%',height:'100%'}}
        automaticallyAdjustContentInsets={false}
        contentContainerStyle={{
            paddingHorizontal: offset + gap / 2,
        }}
        data={entries}
        decelerationRate="fast"
        horizontal
        pagingEnabled
        renderItem={({item,index})=>{
            return <Card key={index} item={item}/>
        }}        
        snapToInterval={pageWidth + gap}
        snapToAlignment="start"
        showsHorizontalScrollIndicator={false}
        />
    </GestureHandlerRootView>
     )
}

export default Carousel;


// import React from 'react';
// import { Dimensions } from 'react-native';
// import {default as MyCarousel} from 'react-native-reanimated-carousel';
// import Card from './Card';
// const Carousel = ({ entries }: { entries: any[] }) => {
//     const width = Dimensions.get('window').width;
//     return (
//         <MyCarousel
//         loop={true}
//         scrollAnimationDuration={1000}
//         mode="parallax"
//         modeConfig={{
//             parallaxScrollingScale: 0.85,
//             parallaxScrollingOffset: 68,
//         }}
//         width={width}
//         height={302}
//         data={entries}
//         // onSnapToItem={(index) => console.log('current index:', index)}
//         renderItem={({ item,index}) => (
//             <Card key={index} head={item.head}/>
//             )}
//         />
//     );
// };

// export default Carousel;