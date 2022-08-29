import Image from 'next/image'
import { useEffect, useState } from 'react'
import Cards from '../Cards'
import {Container, Titulo, Button, Input, Section, Header, Strong, SectionImg} from './style'


export default function container() {
   

    const [name, setName] = useState('')
    const [student, setStudent] = useState([])
    const [user, setUser] = useState( {name: '', avatar: ''})

    function handleAddStudant() {
        const newStudent = {
            name: name,
            time: new Date().toLocaleTimeString("pt-br", {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            })
        }

        setStudent(prevState => [...prevState, newStudent])
    }

   useEffect(() => {
        
    async function effectData() {
       const responseJson = await (await fetch('https://api.github.com/users/fabriciofcastro')).json()
        
                setUser({
                    name: responseJson.name,
                    avatar: responseJson.avatar_url,
                })
        }
        effectData()
}, [])
    
    return (

        <Container >
            <Header>
                 <Titulo>Lista de Presença</Titulo>

                 <Section>
                    <Strong>{user.name}</Strong>
                    <SectionImg src={user.avatar} alt='avatar que representa a foto do perfil'/>
                 </Section>
            </Header>
           
            <Input 
                type="text"
                placeholder="Digite seu nome" 
                onChange={e => setName(e.target.value)}
            />
            <Button type="button" onClick={handleAddStudant} >Adicionar</Button>

           {
                student.map( student => <Cards name={student.name} time={student.time} key={ student.time}  /> )
           }
            

        </Container>

    )
}