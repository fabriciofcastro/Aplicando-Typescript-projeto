import { Small, Strong, CardsContainer } from './style'

export type CardProps = {
    name: string,
    time: string
}

export function Cards( { name, time }: CardProps) {

    return (

        <CardsContainer>
            <Strong>{ name } </Strong>
            <Small> { time } </Small>
        </CardsContainer>

 
    )
}