import express from 'express'
import cors from 'cors'
import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

// conectar a Supabase
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
)

// endpoint compatible con Platzi API
app.get('/products', async (req, res) => {

  const { categoryId } = req.query;

  let query = supabase
    .from('productos')
    .select(`
      id,
      nombre,
      categoria_id,
      categorias (
        id,
        nombre
      )
    `);

  if (categoryId) {
    query = query.eq('categoria_id', categoryId);
  }

  const { data, error } = await query;

  if (error) {
    return res.status(500).json(error);
  }

  const formatted = (data || []).map(p => ({
    id: p.id,
    title: p.nombre,
    price: 0,
    description: "",
    images: [p.image_url],
    category: {
      id: p.categorias.id,
      name: p.categorias.nombre
    }
  }));

  res.json(formatted);
});

app.get('/categories', async (req, res) => {

  const { data, error } = await supabase
    .from('categorias')
    .select('*')

  if (error) {
    return res.status(500).json(error)
  }

  res.json(data)
})

app.listen(3000, () => {
  console.log('API running on port 3000')
})