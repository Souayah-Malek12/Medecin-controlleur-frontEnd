import toast from 'react-simple-toast'

export const alertSuccess  = (message)=> {
    toast(message, {className: 'toast-success'})
}   

export const alertError  = (error) => {
    toast(error, {className: 'toast-error'})
}