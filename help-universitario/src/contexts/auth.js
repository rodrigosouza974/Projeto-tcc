import { createContext,useState, useEffect } from "react";

export const AuthContext = createContext({});
 
export const AuthProvider =({children}) => {
    const [user , setUser] = useState();

    useEffect(() => {
        // Verifique se o usuário está autenticado ao carregar a página
        const userToken = localStorage.getItem("user_token");
        const usersStorage = localStorage.getItem("users_db");
    
        if (userToken && usersStorage) {
            const users = JSON.parse(usersStorage); // Analisa a lista de usuários do localStorage
            const tokenUser = JSON.parse(userToken); // Analisa o token de usuário
    
            const hasUser = users.filter(user => user.email === tokenUser.email);
            if (hasUser.length > 0) {
                setUser(hasUser[0]);
            }
        }
    }, []);
    

const Signin = (email, password) => {
    const usersStorage = JSON.parse(localStorage.getItem("users_db"));

    const hasUser = usersStorage?.filter((user) => user.email === email);

    if(hasUser?.length){
        if(hasUser[0].email === email && hasUser[0].password === password ){
        const token = Math.random().toString(36).substring(2);
        localStorage.setItem("user_token",JSON.stringify({email,token}));
        setUser({email,password});
        return;
        }else{
            return"E-mail ou senha incorretos";
        }
        }else{
            return"Usuário não cadastrado" ;
    }
};

const signup = (email , password) => {
    const usersStorage = JSON.parse(localStorage.getItem("users_db"));

    const hasUser = usersStorage?.filter((user) => user.email === email);

    if(hasUser?.length){ 
        return "já tem uma conta com esse E mail";
        }
        let newUser;

        if(usersStorage){
            newUser = [...usersStorage,{email,password}];
        }else{
            newUser = [{email,password}];
        }
            localStorage.setItem("users_db",JSON.stringify(newUser));
            return;
};

const signout = () => {
    setUser(null);
    localStorage.removeItem("user_token");
};

return (<AuthContext.Provider
    value ={{user,signed: !!user,Signin,signup,signout}}
>
    {children}
    </AuthContext.Provider>
    );
};
 