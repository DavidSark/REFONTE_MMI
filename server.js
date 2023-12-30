import express from 'express';
import bodyParser from 'body-parser';
import { MongoClient } from 'mongodb';
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

async function main() {
	const uri="mongodb+srv://admin-mmi:admin-mmi2812@form-test.nhchzgf.mongodb.net/?retryWrites=true&w=majority"

    const client= new MongoClient(uri);
    try {
        await client.connect();
        console.log ('Connected to Mongo DB');
        app.post('/contact', async (req, res) => {
            const { nom, email, message } = req.body;

            try {
                const database = client.db('form-test'); 
                const collection = database.collection('contacts'); // Collection pour stocker les formulaires de contact

                // Insérer les données du formulaire dans la collection MongoDB
                const result = await collection.insertOne({ nom, email, message });


                res.redirect('https://refonte-mmi-davidsark.vercel.app/contact');
                // res.redirect('/contact');
                // Envoyer une réponse au client
                // res.send(`
                //     <h1>Formulaire de contact</h1>
                //     <p>Nom: ${nom}</p>
                //     <p>Email: ${email}</p>
                //     <p>Message: ${message}</p>
                //     <p>Formulaire envoyé avec succès et enregistré dans la base de données !</p>
                // `);
            } catch (error) {
                console.error('Error inserting contact form data:', error);
                res.status(500).send('Erreur lors de l\'enregistrement du formulaire.');
            }
        });

        const PORT = process.env.PORT || 3001;
        app.listen(PORT, () => {
            console.log(`Server is running on port http://localhost:${PORT}`);
        });

    } catch (e) {
        console.error(e);
    }
}

main().catch(console.error);