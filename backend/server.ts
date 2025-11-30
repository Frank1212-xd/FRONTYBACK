import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

// --- BASE DE DATOS FALSA (MOCK) ---
// Nota: Como es una variable en memoria, si apagas el servidor, 
// los usuarios nuevos se borran. (Se solucionará con Prisma después).
const USUARIOS_FALSOS: any[] = [
    { username: "streamer", password: "123", rol: "streamer" },
    { username: "espectador", password: "123", rol: "espectador" }
];

app.post('/api/login', (req: Request, res: Response): void => {
    const { username, password } = req.body;
    const usuario = USUARIOS_FALSOS.find(u => u.username === username && u.password === password);

    if (usuario) {
        res.json({ success: true, message: "Bienvenido", user: { username: usuario.username, rol: usuario.rol }, token: "token123" });
    } else {
        res.status(401).json({ success: false, message: "Credenciales incorrectas" });
    }
});


app.get('/api/regalos', (req: Request, res: Response) => {
    const REGALOS = [
        { id: 'g1', nombre: 'Tiki tikis', costoMonedas: 10, puntos: 30, imagen: 'https://c0.klipartz.com/pngpicture/166/191/gratis-png-corazon-amor-corazon-computadora-iconos-simbolo-emoticon-fondo-de-amor-thumbnail.png' },
        { id: 'g2', nombre: 'Rositas', costoMonedas: 100, puntos: 50, imagen: 'https://www.acheterlikeetfollow.fr/wp-content/uploads/2023/07/prix-rose-tiktok.png' },
        { id: 'g3', nombre: 'Galaxias', costoMonedas: 5000, puntos: 1000, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh5YznOlmSmL-jhWgLiPp3YDFBjxdjT7JWPA&s' },
    ];
    res.json(REGALOS);
});

app.post('/api/register', (req: Request, res: Response): void => {
    const { username, password, correo } = req.body;

    // Validar si ya existe
    const existe = USUARIOS_FALSOS.find(u => u.username === username);
    if (existe) {
        res.status(400).json({ success: false, message: "El usuario ya existe" });
        return;
    }
    // Guardar en la (Memoria)
    const nuevoUsuario = { username, password, correo, rol: "espectador" }; 
    USUARIOS_FALSOS.push(nuevoUsuario);
    
    console.log("Nuevo usuario registrado:", nuevoUsuario);
    res.json({ success: true, message: "Usuario registrado correctamente" });
});
app.listen(3000, () => console.log('Servidor corriendo en http://localhost:3000'));