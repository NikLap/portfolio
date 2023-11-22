import nodemailer from "nodemailer";
import config from "@/app/[lang]/config";

const { SMPT_USERNAME, SMPT_PASSWORD, SMTP_HOST } = config;

const transporter = nodemailer.createTransport({
	pool: true,
	host: SMTP_HOST,
	port: 465,
	auth: {
		user: SMPT_USERNAME,
		pass: SMPT_PASSWORD,
	},
});

export default transporter;
