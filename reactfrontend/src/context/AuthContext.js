import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2"

export const AuthContext = createContext();



export default function AuthProvider({children}) 
{
    const navigate = useNavigate()
    // login
    const login = (username, password) =>{
        fetch("/login",{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username, password
            })
        }
        )
        .then(res=>res.json())
        .then(response=>{
            // utilize
            console.log(response)
            if(response.errors){
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: response.errors,
                    footer: '<a href="">Why do I have this issue?</a>'
                  })
            }
            else if(response.user){
                  navigate("/dashboard")  
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Loggedin Successfully!',
                    showConfirmButton: false,
                    timer: 1500
                    })

            }
            else{
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                  })
            }
        })
    }

     // Register
    const register = () =>{
           console.log("Hello from context")
    }

     // Logout
     const logout = () =>{
           console.log("Hello from context")
    }

    const contextData = {
        login, register, logout
    }

  return (
    <>
     <AuthContext.Provider value={contextData}>
        {children}
     </AuthContext.Provider>
    </>
  )
}

