export const validationData =(valus)=>{
    let eroors ={};
    if(valus.name.trim()==""){
        eroors.name="username is required";

    }else if (valus.name.length <3){
        eroors.name="username must be at least 3 characters";
    }

    if(valus.email.trim()==""){
        eroors.email="email is required";

    }else if (valus.email.length <10){
        eroors.email="email must be at least 10 characters";
    }


    if(valus.password.trim()==""){
        eroors.password="password is required";

    }else if (valus.name.length <3){
        eroors.password="password must be at least 3 characters";
    }
    return eroors;

}