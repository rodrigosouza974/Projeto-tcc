import React, { useState } from "react";
import * as  C from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Signup = () => {
    const[email,setEmail] = useState("");
    const[emailConfig,setEmailConfig] = useState("");
    const[senha,setSenha] = useState("");
    const[error,setError] = useState("");
    const navigate = useNavigate();

    const {signup} = useAuth();

    const handleSignup =() => {
        if(!email |!emailConfig | !senha){
            setError("Preencha todos os campos!!!");
            return;
        }else if(email !== emailConfig){
            setError("E-mails não são iguais");
            return;
        }
        const res = Signup(email,senha);
        
        if(res){
            setError(res);
            return;
        }
        alert("Usuário não cadastrado");
        navigate("/");
    };
    
    return(
        <C.Container>
          <C.Content>
            <C.Label>Sistema de Login</C.Label>

            <Input
                type="email"
                placeholder="Digite seu E-mail"
                value = {email}
                onChange={(e) =>[setEmail(e.target.value),setError("")]}
              />  

            <Input
                type="email"
                placeholder="Confirme seu E-mail"
                value = {emailConfig}
                onChange={(e) =>[setEmailConfig(e.target.value),setError("")]}
              />  

            <Input
                type="password"
                placeholder="Digite sua Senha"
                value = {senha}
                onChange={(e) =>[setSenha(e.target.value),setError("")]}
              />

            <C.LabelError>{ error }</C.LabelError>
              <Button Text="Inscrever-se" onClick = {handleSignup}/> 
              <C.LabelSignun>
                Já tem uma conta?
                <C.Strong>
                    <Link to= "/signup">&nbsp;Entre</Link>
                </C.Strong>
              </C.LabelSignun>
              </C.Content>
        </C.Container>
    );
};

export default Signup;