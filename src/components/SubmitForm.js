import { useEffect } from 'react';
import { useNavigate } from "react-router";

const SubmitForm = (formData) => {
    const navigate = useNavigate();
    useEffect((formData) => {
        // eslint-disable-next-line no-undef
        if(submitAPI(formData)) {
            console.log("pressed")
            navigate("/confirmation");
        }
    }, );
}

export default SubmitForm;