import { useNavigate } from "react-router";
import { Button } from "../../components/button"
import { logIn } from "./service"
import { useState, type ChangeEvent, type FormEvent } from "react"



export const LogInPage = () => {
    
    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
    });

    const navigate = useNavigate();
    
    function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setCredentials((prevCredentials) => ({
        ...prevCredentials,
        [event.target.name]: event.target.value,
        }));
    }


    const submit = (event:FormEvent<HTMLFormElement>) =>{
        
        
        
        try {
            event.preventDefault();
            logIn(credentials)
            navigate("/")
        }
        catch {

        }
    }

    return (
    
    <form onSubmit={submit}>
        <h1 className="text-4xl font-bold text-pink-700" >Log in</h1>
        <br></br>
        <label htmlFor="Email">Email</label>
        <input onChange={handleChange} name="email" className="bg-white text-black" type="text" />
        <label htmlFor="Password">Password</label>
        <input onChange={handleChange} name="password" className="bg-white text-black" type="text" />
        <Button type="submit" classes="bg-sky-600 border-4 border-indigo-500/100 rounded bg-primary px-4 py-2 text-white hover:bg-primary/90 focus:ring-2 focus:ring-primary/50 focus:outline-none" text="Log in"/>
    </form>
    )   
}