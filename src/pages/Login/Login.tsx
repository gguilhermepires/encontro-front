import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import LoaderComponent from '../../helpers/loader/loaderComponent';

import 'react-toastify/dist/ReactToastify.css';
import {
    Box,
    Button,
    Input,
    FormControl,
    FormLabel,
    Stack,
    Heading,
    Text,
} from '@chakra-ui/react';
import { useContext } from "react";
import { useAuth } from '../../contexts/AuthProvider';

export default function LoginPage() {
    const { createCookie } = useAuth();
    const history = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loader, setShowHideLoader] = useState(false);
    // const { updateLoginContext} = useContext(Context);

    const formValidation = () => {
        let isValid = true;

        if (!email) {
            toast.warn('Username is required');
            isValid = false
        }

        if (!password) {
            toast.warn('User password is required');
            isValid = false
        }

        return isValid
    }

    const submitUserLogin = async () => {
        try {

            // before submit, we need to check validation
            if (formValidation()) {
                // we need to add loading spinner to wait server to response.
                // let create loader component
                setShowHideLoader(true);
                const reqBody = {
                    "email": email,
                    "password": password
                }

                const response = await axios.post('http://localhost:3001/api/v1/login', reqBody);
                if (response.status === 200 && response.data.code === 200) {
                    createCookie(response.data.data);
                    history('/home');
                } else {
                    toast.error('Email or password wrong');
                }
            }
        }
        catch (e: any) {
            toast.error('Email or password wrong');
        }
        finally {
            setShowHideLoader(false);
        }
    }

    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100vh"
        >
            <Stack spacing={4} width="300px">
                <Heading textAlign="center">Login</Heading>
                <FormControl id="email" isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input
                        type="email"
                        placeholder="Seu endereço de email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </FormControl>
                <FormControl id="password" isRequired>
                    <FormLabel>Senha</FormLabel>
                    <Input
                        type="password"
                        placeholder="Sua senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </FormControl>
                <Button colorScheme="teal" size="lg" onClick={() => submitUserLogin()}>
                    Entrar
                </Button>
                <Text textAlign="center">
                    Ainda não tem uma conta? <a onClick={() => submitUserLogin()} >Registre-se</a>
                </Text>
            </Stack>
            <ToastContainer />
            {loader && <LoaderComponent />}
        </Box>
    )
}