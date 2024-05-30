import React, {FC, useState} from "react";
import {useForm} from "react-hook-form";
import {postService} from "../services/api.jsonplaceholder";
import {IPostModel} from "../models/IPostModel";
import {joiResolver} from "@hookform/resolvers/joi";
import {postValidator} from "../validators/post.validator";

export interface IProps {
    title: string,
    body: string,
    userId: number
}

const FormPostComponent:FC = () => {
    
    let {register, handleSubmit, formState:{errors, isValid}} = useForm<IProps>({mode: "all", resolver: joiResolver(postValidator)})

    const [post, setPost] = useState<IPostModel | null>(null)

    // const save = ({title, body, userId}: IProps) => {
    //     fetch('https://jsonplaceholder.typicode.com/posts', {
    //         method: 'POST',
    //         body: JSON.stringify({
    //             title: title,
    //             body: body,
    //             userId: userId,
    //         }),
    //         headers: {
    //             'Content-type': 'application/json; charset=UTF-8',
    //         },
    //     })
    //         .then((response) => response.json())
    //         .then(value => setPost(value));
    // }

    const save = ({title, body, userId}: IProps) => {
        postService
            .postSave({title, body, userId})
            .then(value => setPost(value.data));
    }

    return (
        <div>
            <form onSubmit={handleSubmit(save)}>
                <input type="text" {...register('title')}/>
                {errors.title && <span>{errors.title.message}</span>}
                <br/>
                <input type="text" {...register('body')}/>
                {errors.body && <span>{errors.body.message}</span>}
                <br/>
                <input type="number" {...register('userId')}/>
                {errors.userId && <span>{errors.userId.message}</span>}
                <br/>
                <button>Save post</button>
                {post && <div><h3>{post.id}. {post.title}</h3> <h4>posted by userId {post.userId}</h4> <p>{post.body}</p></div>}
            </form>
        </div>
    );
};

export default FormPostComponent;