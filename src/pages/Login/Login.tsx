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
// import { Context } from '../../contexts/AuthContext';

export default function LoginPage() {
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
                    "username": email,
                    "password": password
                }
                // updateLoginContext( {
                //     "username": email,
                //     "password": password
                // })
                history('/')
                // const response = await axios.post('http://localhost:3001/api/v1/login', reqBody);
                // if (response) {
                //     console.log('teste', response.data)
                //     // here we need to store data as temp and navigate to home page
                //     history.push({
                //         pathname: '/home',
                //         state: { userData: response.data }
                //     });

                //     // now we navigated to home but with static data.
                //     // let us go to home page.
                //     // data will go to home page as props.
                // }
            }

        }
        catch (e) {
            // log error in case of invalid user login username and password
            // we will use Toaster to show the error to user
            // toast.error(e);
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