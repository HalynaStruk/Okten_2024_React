import {useForm} from "react-hook-form";
import {AuthDataModel} from "../models/AuthDataModel";
import {useState} from "react";
import {authService} from "../services/api.service";

const FormComponent = () => {
    const {handleSubmit, register} = useForm<AuthDataModel>({defaultValues:{username:'HalynaStr', password:'Struk30.'}});
    const [isAuthState, setIsAuthState] = useState<boolean>(false);
    const authenticate = async (formData: AuthDataModel) => {
        const isAuth = await authService.authentication(formData);
        setIsAuthState(isAuth);
    }
    return (
        <div>
            <h3>login form</h3>
            <div>
                {
                    isAuthState ? <span>ok</span> : <span>not ok</span>
                }
            </div>
            <form onSubmit={handleSubmit(authenticate)}>
                <input type="text" {...register('username')}/>
                <input type="text" {...register('password')}/>
            </form>
        </div>
    );
};

export default FormComponent;