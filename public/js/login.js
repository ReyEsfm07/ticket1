let login=document.getElementById('form')

let loginSesion= async (e)=>{
    e.preventDefault();
    let datos=new FormData(login);
    let bodyLogin={
         correo:datos.get('emailLogin'),
         password:datos.get('passwordLogin')
    } 
    // console.log(bodyLogin)
    let result=await fetch('http://localhost:3000/api/user/new_sesion',{
                    method:'POST',
                    body:JSON.stringify(bodyLogin),
                    headers: {
                        "Accept": "application/json, text/plain, *,*",
                        "Content-Type": "application/json"
                        }
                        // ,    
                    // body:JSON.stringify({
                    //     'correo':bodyLogin.correo,
                    //     'password':bodyLogin.password
                    // })
                })
                // 

    
    let resultFinal=await result.json()
    console.log(resultFinal)
    alert(resultFinal.menssage)
    // if(resultFinal.menssage==='Bienvenido'){
    //     window.location.href="google.com"
    // }
    // alert(JSON.stringify(await result.json().details[0].menssage))

}
 
login.addEventListener('submit', loginSesion, false)