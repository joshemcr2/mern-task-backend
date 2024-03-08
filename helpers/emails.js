import nodemailer from "nodemailer";

export const emailRegistro = async (datos) => {
  const { email, nombre, token } = datos;
  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
  // informacion del email
  const info = await transport.sendMail({
    from: "UpTask - Administrador de Proyectos <jamc19962222@gmail.com>",
    to: email,
    subject: "UpTask - Confirma tu cuenta",
    text: "Confirma tu cuenta en Uptask",
    html: `<p>Hola ${nombre} porfavor confirma tu cuenta enb UpTask</p>
    <p>Tu cuenta ya esta  casi lista, solo debes comprobarla en el siguiente enlace</p>
    <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Confirmar Cuenta</a>
    <p>Si tu no creaste esta cuenta, puedes ignorar el mensaje</p>
    `,
  });
};
export const emailOlvidePassword = async (datos) => {
  const { email, nombre, token } = datos;

  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
  // informacion del email
  const info = await transport.sendMail({
    from: "UpTask - Administrador de Proyectos <jamc19962222@gmail.com>",
    to: email,
    subject: "UpTask - Restablece tu password",
    text: "Restablece tu password",
    html: `<p>Hola ${nombre} has solicitado restablecer tu password</p>
    <p>Sigue el siguiente enlace para generar un nuevo password</p>
    <a href="${process.env.FRONTEND_URL}/olvide-password/${token}">Resatablecer Password</a>
    <p>Si tu no solicistaste este email, puedes ignorar el mensaje</p>
    `,
  });
};
