import CardContent from "../CardContent/CardContent"
import Person from "../../types/person";
import { Center, Card, VStack, Heading, Text } from "@chakra-ui/react";

type PersonProps = {
    person: Person
}

export const Profile = ({ person }: PersonProps) => {
    const size : number = 100;
    return (
        <Center textColor={'white'} padding={4}>
            <VStack>
                <Heading as={'h3'}>Profile</Heading>
                <Text fontSize={'md'}>Questa è la pagina del profilo</Text>
                <Text fontSize={'md'}>Benvenuto Manuel9593</Text>
                <Card bg={'lightgreen'}>
                    <CardContent
                        person={person}
                        size={size}
                    />
                </Card>
            </VStack>
        </Center>
    )
}
export default Profile