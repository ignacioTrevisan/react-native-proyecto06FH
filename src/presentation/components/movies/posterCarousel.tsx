import React from 'react'
import { Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Movie } from '../../../core/entities/movie.entity'
import { MoviesPoster } from './moviesPoster';

interface Props {
    movies: Movie[];
    height?: number;
}

export const PosterCarousel = ({ movies, height = 440 }: Props) => {
    return (
        <View style={{ height }}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                {movies.map(movie => <MoviesPoster key={movie.id} movie={movie} />)}

            </ScrollView>
        </View>
    )
}
