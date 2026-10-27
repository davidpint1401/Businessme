// Devuelve el país del visitante según su IP. Vercel agrega el encabezado
// x-vercel-ip-country en cada petición; no se guarda ni se registra nada.
module.exports = (req, res) => {
  res.setHeader('Cache-Control', 'private, no-store');
  res.status(200).json({ country: req.headers['x-vercel-ip-country'] || null });
};
