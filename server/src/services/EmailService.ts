import nodemailer from 'nodemailer';
import sendgrid from 'nodemailer-sendgrid-transport'

import config from '../config';
import IVerifyUser from '../interfaces/IVerifyUser';

const transporter = nodemailer.createTransport(sendgrid({
    auth: {api_key: config.sendGridApiKey }
}));

class EmailService {
    public static async varifyEmailAddress(verifyUser: IVerifyUser): Promise<void> {
        const buttonStyle = `
            padding: 8px 10px;
            background: radial-gradient(#1D8E75, #186B59);
            border-radius: 5px;
            color: #F5F5F5;
            transition: color 0.3s ease;
            text-transform: uppercase;
            font-weight: bold;
            font-size: 14px;
            text-decoration: none;
            cursor: pointer;
        `;

        const options = {
            to: verifyUser.email,
            from: config.emailFrom,
            subject: 'Подтверждение адреса электронной почты',
            html: `
                <h1>Здравствуйте, ${verifyUser.name}!</h1>
                <h3>Пожалуйста, подтвердите свой адрес электронной почты чтобы мы знали, что это действительно вы!</h3>
                <p><a href="${config.clientBaseUrl}/verifyemail/${verifyUser.verifyToken}" style="${buttonStyle}">Подтвердить</a></p>
                <hr />
            `
        };
        await transporter.sendMail(options);
    }
}

export default EmailService