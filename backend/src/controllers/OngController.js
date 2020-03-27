import connection from '../database/connection';
import generateUniqueId from '../utils/generateUniqueId';

export default {
  async index(req, res) {
    const ongs = await connection('tb_ongs').select('*');

    return res.json(ongs);
  },

  async store(req, res) {
    const { name, email, whatsapp, city, uf } = req.body;

    const id = generateUniqueId();

    await connection('tb_ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf,
    });

    return res.json({ id });
  },
};
