import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2"

export const QuestionsContext = createContext();

export default function QuestionsProvider({children}) 
{
    const navigate = useNavigate()
    const [questions, setQuestions] = useState()
    const [change, setOnChange] = useState(false)

    // Adding questions
    const AddQuestion = (title, description) =>{
        fetch("/question",{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title, description
            })
        }
        )
        .then(res=>res.json())
        .then(response=>{
            console.log("add question ",response)
            if(response.errors)
            {
                 
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: response.errors,
                    })
            }
            else if(response.success)
            {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: response.success,
                    showConfirmButton: false,
                    timer: 1500
                  })
                  setOnChange(!change)
                 

            }
            else{
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: "Something went wrong!",
                })

            }
            
        })
    }

   
    // Fetch questions
    useEffect(()=>{
        fetch("/question",{
            method: "GET",
            headers:{
                "Content-Type": "application/json"
            },
        }
        )
        .then(res=>res.json())
        .then(response=>{
            setQuestions(response)
            console.log(response)
        }
        )
    }, [change])

    const contextData = {
      questions,
      AddQuestion
    //   
    }

  return (
    <>
     <QuestionsContext.Provider value={contextData}>
        {children}
     </QuestionsContext.Provider>
    </>
  )
}

