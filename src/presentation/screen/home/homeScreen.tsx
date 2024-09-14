import React from 'react'
import { Text, View } from 'react-native'
import { UseMovies } from '../../hooks/useMovies'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native-gesture-handler'
import { PosterCarousel } from '../../components/movies/posterCarousel'
import { HorizontalCarrousel } from '../../components/movies/horizontalCarrousel'
import { Movie } from '../../../core/entities/movie.entity';

export const HomeScreen = () => {
    const { top } = useSafeAreaInsets();
    const { isLoading, nowPlaying, mostPopular, upComing, topRated, mostPopularNextPage, topRatedNextPage, upCommingNextPage } = UseMovies();
    if (!isLoading) {
        return (<Text>Cargando....</Text>)
    }
    return (


        <ScrollView>

            <View style={{ marginTop: top + 20, paddingBottom: 30 }}>
                <PosterCarousel movies={nowPlaying} />
                <HorizontalCarrousel movie={mostPopular} loadNextPage={mostPopularNextPage} title='Populares' />
                <HorizontalCarrousel movie={topRated} loadNextPage={topRatedNextPage} title='Mejor calificadas' />
                <HorizontalCarrousel movie={upComing} loadNextPage={upCommingNextPage} title='Proximamente' />

            </View>
        </ScrollView>

    )
}
