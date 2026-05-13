"use client";

import { authClient } from "@/lib/auth-client";
// import {Check} from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { FaGoogle } from "react-icons/fa";



const signUpPage = () => {
    const signInGoogle = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    };
    const onSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const userData = Object.fromEntries(formData)
        console.log(userData)
        const { data, error } = await authClient.signUp.email(userData);
        console.log(error, 'error')
        console.log(data, 'data')
    }
    return (
        <div className="max-w-100 mx-auto border mt-15 p-5 shadow rounded-2xl">
            <Form className="flex  flex-col gap-4" onSubmit={onSubmit}>
                <TextField
                    isRequired

                    name="name"
                    type="text"

                >
                    <Label>Name</Label>
                    <Input placeholder="Enter your Name" />

                    <FieldError />
                </TextField>
                <TextField
                    isRequired
                    name="email"
                    type="email"
                    validate={(value) => {
                        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                            return "Please enter a valid email address";
                        }

                        return null;
                    }}
                >
                    <Label>Email</Label>
                    <Input placeholder="john@example.com" />
                    <FieldError />
                </TextField>

                <TextField
                    isRequired
                    minLength={8}
                    name="password"
                    type="password"
                    validate={(value) => {
                        if (value.length < 8) {
                            return "Password must be at least 8 characters";
                        }
                        if (!/[A-Z]/.test(value)) {
                            return "Password must contain at least one uppercase letter";
                        }
                        if (!/[0-9]/.test(value)) {
                            return "Password must contain at least one number";
                        }

                        return null;
                    }}
                >
                    <Label>Password</Label>
                    <Input placeholder="Enter your password" />
                    <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                    <FieldError />
                </TextField>

                <div className="flex gap-2">
                    <Button type="submit" variant="outline" className={'w-full'}>
                        {/* <Check /> */}
                        SignIn
                    </Button>
                    <Button type="reset" variant="secondary">
                        Reset
                    </Button>
                </div>
            </Form>


            <Button onClick={signInGoogle} className="w-full mt-5 text-orange-300 "><FaGoogle />Login With Google</Button>
        </div>
    );
};

export default signUpPage;