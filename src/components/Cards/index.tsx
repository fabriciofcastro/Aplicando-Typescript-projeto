import { Small, Strong, CardsContainer } from './style'


export default function Cards({name, time}) {

    return (

        <CardsContainer>
            <Strong>{name}</Strong>
            <Small>{time}</Small>
        </CardsContainer>

 
    )
}