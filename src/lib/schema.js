import {z} from 'zod'

export const FormDataSchema = z.object({
    name:z.string().nonempty('Se requiere el nombre'),
    message:z.string().nonempty('Se requiere el mensaje').min(6, {message: 'El mensaje debe contar con al minimo 6 caracteres'}),

})

export const ContactFormSchema = z.object({
    name:z.string().nonempty('Se requiere el nombre'),
    email:z.string().nonempty('Se requiere el email').email('Email invalido'),
    message:z.string().nonempty('Se requiere el mensaje').min(6, {message: 'El mensaje debe contar con al minimo 6 caracteres'}),

})