import React, {FC} from "react";
import {useForm} from "react-hook-form";

interface IFormProps {
    username: string,
    age: number
    password: string,
}

const FormComponent:FC = () => {
    let form = useForm<IFormProps>();
    console.log(form);

    const save = () => {

    };

    return (
        <div>
            <form>
                <input type="text"/>
                <input type="number"/>
                <input type="text"/>
                <button>save</button>
            </form>
        </div>
    );
};

export default FormComponent;