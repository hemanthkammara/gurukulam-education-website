import {createContext} from "react"
import {useState} from "react"
import { Navigate } from "react-router-dom"
export const AuthContext =createContext()

export default function AuthContextProvider({children}) {

    const [isAuth,setIsAuth]=useState(false)
    const [token,setToken]=useState(false)
    const [openCourse,setOpenCourse]=useState(false)
  
    const [data,setData]=useState({})

       const[lectures,setLectures]=useState(false)



 //---------------------------localStrorage-------------------------
      //  let buyPackage = [];
      //  let cardArr = [];
      //  let cartLs = localStorage.getItem("cartData");
     
      //  if (cartLs == null) {
      //    cartArr = [];
      //    // getData()
      //  } else {
      //    cartArr = JSON.parse(cartLs);
      //    //displayCart(cartArr)
      //  }
       
      //  buyPackage.push(item.name);
      //  console.log("item.packages", item.packages);
      //  displayCart(item.packages);

      //  cartArr = item.packages;
      //  localStorage.setItem("cartData", JSON.stringify(cartArr));
      //  console.log("cartArr", cartArr);

//-------------------local end------------------------------

    const login=async(email,password)=>{
     console.log("Auth1")
      try{
        const res=await fetch(`https://reqres.in/api/login`,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({email,password})
        })
        const data = await res.json()
        setIsAuth(true)
        console.log("check",isAuth)

        if(res.ok){
         setToken(data.token)
          console.log("Auth2")
         
        }
        else{
          setIsAuth(false)
        }
     
      }
        catch(err){
        console.log(err)
      }
    }
  
  {isAuth==true && <Navigate to="/" />}
  console.log("outer",isAuth)
    return (
      
      <AuthContext.Provider value={{data,setData,lectures,setLectures,openCourse,setOpenCourse}}>
        <div>
          {children}
        </div>
      </AuthContext.Provider>
  
    )
  }
  