export const service=async()=>{
    const response=await fetch("http://localhost:3000/service");
    const data =await response.json();
    return data;
}

export const servarr=async()=>{
    const response = await fetch("http://localhost:3000/serv");
    const data =await response.json();
    return data;
}

export const doctor=async()=>{
    const response = await fetch("http://localhost:3000/doctor");
    const data =await response.json();
    return data;
}

export const Appointmentdata=async(formdata)=>{
    console.log(formdata,"aaya")
    const response=await fetch("http://localhost:3000/appointment",{
        method:'POST',headers:{'Content-type':'application/json'},body:JSON.stringify(formdata)
    })
    const reply=await response.json();
    console.log("reply",reply);
    return reply;
}