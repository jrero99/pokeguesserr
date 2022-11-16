import correct from "../assets/correct.png";
import wrong from "../assets/wrong.png";
import up from "../assets/up.png";
import down from "../assets/down.png";
import wrongpos from "../assets/wrongpos.png"

const Pokeball = (props) => {
    const checkStatus = () => {
        switch(props.status){
            case 'correct':
                return correct;
            break;
            case 'wrong':
                return wrong;
            break;
            case 'up':
                return up;
            break;
            case 'down':
                return down;
            break;
            case 'wrongpos':
                return wrongpos;
            break;
        }
        
    }
    return (
        <img className="mx-auto" src={checkStatus()}/>
    )
}

export default Pokeball