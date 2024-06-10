Mern Blog Project

github.com/sahandghavidel/mern-blog

PARTIE 1
----------------------------------------------------------------
Install React.js and tailwind css & create the first template

npm create vite@latest
name : client => JS & SWC

npm install 
install tailwind css vite

Extension : ES7+ , Github Copilot , Multiple cursor server preserve , Tailwind css intellisense

Push on github

---------------------------------------------------------------
Create pages & routes

Client/src/pages
About.jsx
Signin.jsx
Signup.jsx
Dashboard
Homes.jsx
Projects.jsx

npm i react-router-dom

App.jsx : import {BrowserRouter, Routes, Route} from 'react-router-dom'

<BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/abour" element={<About/>} />
        ...
    </Routes>
</BrowserRouter>

--------------------------------------------------------------
Create Header Components

client/src/Components

Flowbite react UI - install
npm i flowbite-react

add : 'node_modules/flowbite-react/**/............' => Tailwind.config.js
add plugins 


----------------------------------------------------------

Create & run a server


----------------------------------------------

Connect to database

Connecter la base de donner

install mongoose

username : Beellally

Password : wZdFoB10yRorGfDT

Connection String 'mongodb+srv://Beellally:<password>@blog00.yhz4zex.mongodb.net/'

------------------------------------------------------------------

Users Models

Un modèle (ou modèle de données) fait référence à une représentation structurée des données utilisées par une application web. Les modèles sont essentiels pour organiser et gérer les données de manière cohérente, notamment dans le contexte des applications basées sur des architectures MVC (Modèle-Vue-Contrôleur) ou similaires.

Voici quelques-uns des rôles et des fonctions principaux d'un modèle dans le développement web :

Structurer les données : Les modèles définissent la structure des données utilisées par l'application. Cela peut inclure la définition des différents types de données, des relations entre les données (par exemple, les relations de clé étrangère dans une base de données relationnelle) et des contraintes de validation.

Abstraction des données : Les modèles fournissent une abstraction des données sous-jacentes. Cela permet aux développeurs d'interagir avec les données de manière plus orientée objet ou conceptuelle, sans avoir à se soucier des détails d'implémentation sous-jacents.

Manipulation des données : Les modèles fournissent des méthodes pour créer, lire, mettre à jour et supprimer (CRUD) des données. Ces méthodes abstraites permettent aux développeurs d'effectuer des opérations de base sur les données de manière cohérente et sécurisée.

Validation des données : Les modèles intègrent souvent des règles de validation pour s'assurer que les données saisies par les utilisateurs respectent les critères définis (par exemple, des formats de date spécifiques, des longueurs minimales ou maximales pour les champs, etc.).

Intégration avec la logique métier : Les modèles sont souvent associés à la logique métier de l'application. Cela signifie que les modèles peuvent encapsuler la logique nécessaire pour traiter les données et effectuer des opérations spécifiques en fonction des règles métier de l'application.

Interactions avec la source de données : Dans le contexte des applications web qui utilisent des bases de données, les modèles facilitent les interactions avec la source de données sous-jacente (par exemple, l'exécution de requêtes SQL pour récupérer ou mettre à jour des données).


-----------------------------------------------------------------------------

API Testing

-----------------------------------------------------------------------------

S-up API routes

routes </>
import express
import signup from controllers
const router = express.router();
router.post('/signup', signup)
export router

Controllers</>
export const signup = async(req, res) => {
    console(req.body)
}

index</>

import authroute from route
app.use('/api/auth', authroutes)


Installer Insomnia pour tester l'API

Add app.use(express.json()) pour qu'il acccepte de fichier json