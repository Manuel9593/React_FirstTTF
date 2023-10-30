import Avatar from "./Avatar";
import "./Profile.css";

export type PersonType = {
    name : string,
    image : string
}

function Card(props : any) {
    const { children } = props;
    return(
        <div className="card">
            {children}
        </div>
    )
}

export const Profile = () => {
  const size : number = 100;
  const person : PersonType = {
    name : "Manuel Parra",
    image : "img/parra"
  }
    return (
        <div className="ProfileContainer">
            <h1>Profile</h1>
            <p>Questa è la pagina del profilo</p>
            <p>Benvenuto Manuel9593</p>
            <Card>
                <Avatar
                    person={person}
                    size={size}
                />
            </Card>
        </div>
    )
}