import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Text, View } from 'react-native'
import { RootStackParams } from '../../navigation/navigation'
import { Movie } from '../../../core/entities/movie.entity';
import { UseMovie } from '../../hooks/useMovie';
import { HeaderMovie } from '../../components/movie/headerMovie';
import { DetailsMovie } from '../../components/movie/detailsMovie';
import { ScrollView } from 'react-native-gesture-handler';


interface Props extends StackScreenProps<RootStackParams, 'Details'> { };
export const DetailsScreen = ({ route }: Props) => {
    const { movieId } = route.params;

    const { MovieData, CastData, Loading } = UseMovie(movieId);

    if (Loading) {
        return <Text>Cargando...</Text>
    }
    return (
        <ScrollView>
            <HeaderMovie movie={MovieData!} />
            <DetailsMovie movie={MovieData!} cast={CastData} />
        </ScrollView>
    )
}
