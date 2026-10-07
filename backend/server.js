const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const path = require("path");
const app = express();

require("dotenv").config();
// ========================================
// MIDDLEWARES
// ========================================

app.use(cors());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "../frontend")));
 
app.get("/", (req, res) => {
res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

// ========================================
// CONEXÃO COM MONGODB
// ========================================

mongoose.connect(process.env.MONGODB_URI + "/loginDB")
    .then(() => {
        console.log("MongoDB conectado com sucesso!");
    })
    .catch((error) => {
        console.error("Erro ao conectar ao MongoDB:", error);
    });


// ========================================
// MODELO DE USUÁRIO
// ========================================

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    }
});

const User = mongoose.model("User", UserSchema);

// ========================================
// ROTA DE CADASTRO
// ========================================

app.post("/register", async (req, res) => {

    const { email, password } = req.body;

    try {

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            email,
            password: hashedPassword
        });

        await newUser.save();

        res.json({
            success: true,
            message: "Usuário registrado com sucesso!"
        });

    } catch (error) {

        console.error("Erro ao registrar usuário:", error);

        res.status(500).json({
            success: false,
            message: "Erro ao registrar usuário."
        });
    }
});


// ========================================
// ROTA DE LOGIN
// ========================================

app.post("/login", async (req, res) => {

    const { email, password } = req.body;

    try {

        const user = await User.findOne({ email });

        if (!user) {
            return res.json({
                success: false,
                message: "Email ou senha inválidos."
            });
        }

        const passwordMatch = await bcrypt.compare(
            password,
            user.password
        );

        if (!passwordMatch) {
            return res.json({
                success: false,
                message: "Email ou senha inválidos."
            });
        }

        res.json({
            success: true,
            message: "Login válido!"
        });

    } catch (error) {

        console.error("Erro no login:", error);

        res.status(500).json({
            success: false,
            message: "Erro no servidor."
        });
    }
});

// ========================================
// SERVIDOR
// ========================================

app.listen(3000, () => {

    console.log("Servidor rodando na porta 3000");

});

