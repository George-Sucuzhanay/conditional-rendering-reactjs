import UserGreeting from "./UserGreeting";
import GuessGreeting from "./GuestGreeting";

export default function Greeting(props){
    const isLoggedIn  = props.isLoggedIn
    if (isLoggedIn){
        return <UserGreeting/>
    }
    return <GuessGreeting/>
}