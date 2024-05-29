import React, {FC, FormEvent, useState} from "react";

interface IFormProps {
    username: string;
    password: string;
}

const FormComponentUncotrollable: FC = () => {

    const [formState, setFormState] = useState<IFormProps>({
        username: 'default',
        password: 'default'
    })

    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
      e.preventDefault();
        let user = {
            username: formState.username,
            password: formState.password,
        }
        console.log(user);
    }

    const handleChange = (e:FormEvent<HTMLInputElement>) => {
        let input = e.currentTarget;
        setFormState({...formState, [input.name]: input.value});

    }

    // const handlePasswordChange = (e:FormEvent<HTMLInputElement>) => {
    //     let input = e.target as HTMLInputElement;
    //     setFormState({...formState, password: input.value})
    // }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name={'username'} value={formState.username} onChange={handleChange}/>
                <input type="text" name={'password'} value={formState.password} onChange={handleChange}/>
                <button>save</button>
            </form>
        </div>
    );
};

export default FormComponentUncotrollable;