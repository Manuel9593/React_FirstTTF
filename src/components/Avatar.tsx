import { PersonType } from "./Profile";

type AvatarProps = {
    person: PersonType,
    size: number
}

export default function Avatar(props : AvatarProps) {
    const { person, size } = props;
    console.log(person)
    return (
        <>
            <p>Mi chiamo {person.name}</p>
            <p>Questo è il size: {size}</p>
        </>
    );
}