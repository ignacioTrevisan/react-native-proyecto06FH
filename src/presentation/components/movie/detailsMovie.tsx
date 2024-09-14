import React from 'react'
import { Text, View } from 'react-native'
import { FullMovie } from '../../../core/entities/movie.entity'
import { Formatter } from '../../../config/helpers/formatter'
import { CastEntity } from '../../../core/entities/cast.entity'
import { FlatList } from 'react-native-gesture-handler'
import { Cast } from './cast'


interface Props {
    movie: FullMovie,
    cast: CastEntity[]
}


export const DetailsMovie = ({ movie, cast }: Props) => {
    return (
        <View style={{ marginHorizontal: 20, flexDirection: 'column', marginBottom: 50 }}>
            <View style={{ flexDirection: 'row' }}>
                <Text>{movie.rating}</Text>
                <Text>-{movie.genres.join(',')}</Text>
            </View>
            <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 10 }}>Historia</Text>
            <Text >{movie.description}</Text>
            <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 10 }}>Presupuesto</Text>
            <Text >{Formatter.currentcy(movie.budget)}</Text>
            <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 10 }}>Actores</Text>
            <FlatList
                data={cast}
                keyExtractor={(item) => item.id.toString()}
                horizontal
                renderItem={({ item }) => <Cast nombre={item.name} photoUrl={item.avatar} />}
            />
        </View>
    )
}
