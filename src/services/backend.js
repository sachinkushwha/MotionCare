export const service=async()=>{
    const response=await fetch("https://motioncarebackend.onrender.com/service");
    const data =await response.json();
    return data;
}

export const servarr=async()=>{
    const response = await fetch("https://motioncarebackend.onrender.com/serv");
    const data =await response.json();
    return data;
}

export const doctor=async()=>{
    const response = await fetch("https://motioncarebackend.onrender.com/doctor");
    const data =await response.json();
    return data;
}

export const Appointmentdata=async(formdata)=>{
    console.log(formdata,"aaya")
    const response=await fetch("https://motioncarebackend.onrender.com/appointment",{
        method:'POST',headers:{'Content-type':'application/json'},body:JSON.stringify(formdata)
    })
    const reply=await response.json();
    console.log("reply",reply);
    return reply;
}