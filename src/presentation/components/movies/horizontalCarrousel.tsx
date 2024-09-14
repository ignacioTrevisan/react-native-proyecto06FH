import React, { useEffect, useRef } from 'react'
import { NativeScrollEvent, NativeSyntheticEvent, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { Movie } from '../../../core/entities/movie.entity';
import { MoviesPoster } from './moviesPoster';

interface Props {
    movie: Movie[],
    title?: string,
    loadNextPage?: () => void;
}
export const HorizontalCarrousel = ({ movie, title, loadNextPage }: Props) => {


    const isLoading = useRef(false);
    useEffect(() => {
        setTimeout(() => {
            isLoading.current = false;
        }, 200);
    }, [movie])

    const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {

        if (isLoading.current) return;
        const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;

        const isEnded = (contentOffset.x + layoutMeasurement.width + 600) >= contentSize.width;

        if (!isEnded) return;

        loadNextPage && loadNextPage();
        isLoading.current = true;
    }
    return (
        <View
            style={{
                height: title ? 260 : 220
            }}>
            {title && <Text
                style={{
                    fontSize: 30,
                    fontWeight: '300',
                    marginLeft: 10,
                    marginBottom: 10
                }}
            >{title}</Text>}
            <FlatList
                data={movie}
                renderItem={({ item }) => (<MoviesPoster movie={item} width={140} height={200} />)}
                keyExtractor={(item, index) => (item.id - index).toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                onScroll={(event) => onScroll(event)}
            />
        </View>
    )
}
