const express = require('express');
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const app = express();
app.use(express.json());

// Initialize Supabase client from environment variables
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY;
if (!supabaseUrl || !supabaseKey) {
  throw new Error("Supabase URL and Service Key must be defined in .env file");
}
const supabase = createClient(supabaseUrl, supabaseKey);

// Middleware to protect routes
const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorized: No token provided' });
  }

  const token = authHeader.split(' ')[1];
  const { data: { user }, error } = await supabase.auth.getUser(token);

  if (error || !user) {
    return res.status(401).json({ error: 'Unauthorized: Invalid token' });
  }

  req.user = user;
  next();
};


// --- AUTHENTICATION ROUTES ---

// Register a new user
app.post('/auth/register', async (req, res) => {
  const { email, password, username } = req.body;
  if (!email || !password || !username) {
    return res.status(400).json({ error: 'Email, password, and username are required.' });
  }

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        username: username, // This will be used by the trigger to create a profile
      }
    }
  });

  if (error) {
    return res.status(400).json({ error: error.message });
  }
  res.status(201).json({ message: "User registered successfully. Please check your email to confirm.", user: data.user });
});

// Login a user
app.post('/auth/login', async (req, res) => {
  const { email, password } = req.body;
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return res.status(400).json({ error: error.message });
  }
  res.status(200).json({ message: "Logged in successfully", session: data.session });
});


// --- PHOTOS API ROUTES (PROTECTED) ---

// GET all photos
app.get('/photos', async (req, res) => {
  const { data, error } = await supabase
    .from('photos')
    .select('*, profiles(username, avatar_url)'); // Join with profiles to get username

  if (error) {
    return res.status(500).json({ error: error.message });
  }
  res.status(200).json(data);
});

// POST a new photo
app.post('/photos', authMiddleware, async (req, res) => {
  const { title, description, image_url } = req.body;
  if (!title || !image_url) {
    return res.status(400).json({ error: 'Title and image_url are required.' });
  }

  const { data, error } = await supabase
    .from('photos')
    .insert([{ 
      title, 
      description, 
      image_url, 
      user_id: req.user.id 
    }])
    .select();

  if (error) {
    return res.status(500).json({ error: error.message });
  }
  res.status(201).json(data[0]);
});

// DELETE a photo
app.delete('/photos/:id', authMiddleware, async (req, res) => {
    const { id } = req.params;
    
    // The RLS policy ensures users can only delete their own photos
    const { error } = await supabase
        .from('photos')
        .delete()
        .eq('id', id)
        .eq('user_id', req.user.id);

    if (error) {
        return res.status(500).json({ error: error.message });
    }

    res.status(204).send(); // 204 No Content for successful deletion
});


// --- SERVER ---
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});