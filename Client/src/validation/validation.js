export const validation = (data) => {
    let error = {}
    const nameRegex = /^([a-zA-Z0-9]+|[a-zA-Z0-9]+\s{1}[a-zA-Z0-9]{1,}|[a-zA-Z0-9]+\s{1}[a-zA-Z0-9]{3,}\s{1}[a-zA-Z0-9]{1,})$/
    const emailRegex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/
    const phoneRegex = /^\d{10}$/
    //validation for First name
    if(data.name.length <= 4){
        error.name ='Name must be 4 letters'
    }else if(!nameRegex.test(data.name)){
        error.name ='Invalid Name'
    }
    //validation for email
    if (!emailRegex.test(data.email)) {
        error.email = 'Invalid email'
    }
    //validation for Phone number
    if (!phoneRegex.test(parseInt(data.phone))) {
        error.phone = 'Invalid Phone number'
    }
    if (data.message.length <=10){
        error.message='Message must be 10 letters'
    }
    return error
}