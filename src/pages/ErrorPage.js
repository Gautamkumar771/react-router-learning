 import { useEffect } from "react"
 import {useNavigate} from 'react-router-dom'





function ErrorPage() {
    const navigate = useNavigate();

    useEffect(() =>{
        setTimeout(()=> navigate(-1),3000);
    },[navigate]);
return(
    <>
    <h1>something went wrong </h1>
    </>
)
}
export default ErrorPage;