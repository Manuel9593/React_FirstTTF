import Person from "../../types/person"
import logo from "../../logo.svg"
import { CardBody, CardHeader, Center, Heading, Text, Avatar } from "@chakra-ui/react"

type CardContentProps = {
    person: Person,
    size: number
}

export default function CardContent(props : CardContentProps) {
    const { person, size } = props;
    console.log(person)
    return (
        <>  
            <CardHeader>
                <Center>
                    <Avatar name={person.name} src={logo}/>
                    <Heading as={"h5"} size={"md"}>{person.name}</Heading>
                </Center>
            </CardHeader>
            <CardBody>
                <Text>Questo è il size: {size}</Text>
            </CardBody>
        </>
    );
}