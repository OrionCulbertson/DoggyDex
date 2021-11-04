import Button from "./Button"
import {FaArrowUp} from "react-icons/fa"

const UploadDog = () => {
    return (
        <div>
            <p className="bigText">Upload A Dog Picture!</p>
            <Button contents={<FaArrowUp/>} onClick={() => console.log("Upload")} styleClass="stdButton"/>
        </div>
    )
}

export default UploadDog
