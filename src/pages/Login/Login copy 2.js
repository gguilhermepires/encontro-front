import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoaderComponent from '../../helpers/loader/loaderComponent';
import { Button, ButtonGroup } from '@chakra-ui/react'

export default function LoginPage() {
    const history = useNavigate();

    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [loader, setShowHideLoader] = useState(false);

    const formValidation = () => {
        let isValid = true;

        if (!userName) {
            toast.warn('Username is required');
            isValid = false
        }

        if (!userPassword) {
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
                    "username": userName,
                    "password": userPassword
                }
                const response = await axios.post('http://localhost:3001/api/v1/login', reqBody);
                if (response) {
                console.log('teste', response.data)
                    // here we need to store data as temp and navigate to home page
                    history.push({
                        pathname: '/home',
                        state: { userData: response.data }
                    });

                    // now we navigated to home but with static data.
                    // let us go to home page.
                    // data will go to home page as props.
                }
            }

        }
        catch (e) {
            // log error in case of invalid user login username and password
            // we will use Toaster to show the error to user
            toast.error(e.response.data.message);
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
          <Heading textAlign="center">Faça Login</Heading>
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
          <Button colorScheme="teal" size="lg" onClick={handleLogin}>
            Entrar
          </Button>
          <Text textAlign="center">
            Ainda não tem uma conta? <a href="#">Registre-se</a>
          </Text>
        </Stack>
      </Box>
        // <div className='login-screen'>
        //     <div className='login-form'>
        //         <div className='left-part' />
        //         <div className='right-part'>
        //             <h3>Login </h3>
        //             <div className='input-group'>
        //                 <label>Username</label>
        //                 <input
        //                     type='text'
        //                     className='form-control'
        //                     placeholder='Enter username'
        //                     value={userName}
        //                     onChange={(e) => setUserName(e.target.value)}
        //                 />
        //             </div>
        //             <div className='input-group'>
        //                 <label>Password</label>
        //                 <input
        //                     type='password'
        //                     className='form-control'
        //                     placeholder='Enter password'
        //                     value={userPassword}
        //                     onChange={(e) => setUserPassword(e.target.value)}
        //                 />
        //             </div>
        //             <div className='submit-action'>
        //             <Button colorScheme='blue' onClick={() => submitUserLogin()}>Entrar</Button>
        //             </div>
        //         </div>
        //     </div>
        //     <ToastContainer />
        //     {loader && <LoaderComponent />}
        // </div>
    )
}