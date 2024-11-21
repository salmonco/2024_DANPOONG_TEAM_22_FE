import React from 'react';
import { Dimensions } from 'react-native';
import Card from './Card';
import { FlatList, GestureHandlerRootView } from 'react-native-gesture-handler';

const Carousel= ({entries}:{entries:any[]})=>{
    const pageWidth = 352
    const gap = 28
    const offset = 0
    return (
    <GestureHandlerRootView style={{width:Dimensions.get('window').width,height:333}} >
        <FlatList
        automaticallyAdjustContentInsets={false}
        contentContainerStyle={{
            paddingHorizontal: offset + gap / 2,
        }}
        data={entries}
        decelerationRate="fast"
        horizontal
        // keyExtractor={(item: any) => `page__${item.color}`}
        // onScroll={onScroll}
        pagingEnabled
        renderItem={({item,index})=>{
            return <Card key={index} mx={gap/2} width={pageWidth} head={item.head}/>
        }}        
        snapToInterval={pageWidth + gap}
        snapToAlignment="start"
        showsHorizontalScrollIndicator={true}
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