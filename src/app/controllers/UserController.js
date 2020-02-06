import Mail from '../../lib/Mail'

export default {
  async store(req, res) {
    const { name, email, password } = req.body;

    const user = {
      name, 
      email, 
      password,
    };
 
    await Mail.sendMail({
      from: "Queue Test <queue@queuetest.com>",
      to: `${name} <${email}>`,
      subject: 'Cadastro de usuário',
      html: `Olá, ${name}, bem-vindo`
    });

    return res.json(user);
  }
}