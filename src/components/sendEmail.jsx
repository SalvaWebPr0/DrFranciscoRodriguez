
import { Resend } from "resend"

const resend = new Resend([process.env.RESEND_API_KEY]);

export const sendEmail = async (data) => {
    console.log("Running on server", data);
    console.log(data.senderEmail);
    console.log(data.message);

    resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: 'emprendomex@gmail.com',
        subject: 'Message from contact form',
        text: 'Hello World!',
    })
}