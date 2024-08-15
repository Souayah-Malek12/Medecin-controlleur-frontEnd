const Footer = () => {

    
    return (
        <footer id="contact" className="bg-gray-100 py-8">
            <div className="container mx-auto">
                <div className="flex justify-center">
                    <div className="w-full text-center">
                        <p className="mb-4">
                            Immeuble Rahma, Bloc A, Appt 2, 2092 El Manar 1, Tunis, Tunisie
                            <br />
                            TEL: <strong>(+216) 74 400 185</strong> / <strong>(+216) 70 861 360</strong> / FAX: <strong>(+216) 70 861 334</strong>
                        </p>

                        <div className="text-justify px-6 py-6 border-4 border-gray-800 rounded-lg">
                            <p className="mb-4">
                                <span className="text-green-500">■</span> Pour toute requête commerciale, veuillez nous contacter sur l'adresse <a href="mailto:commercial@i-sante.tn" className="text-blue-600 hover:underline">commercial@i-sante.tn</a>
                            </p>
                            <p className="mb-4">
                                <span className="text-green-500">■</span> Pour déposer une réclamation, veuillez nous envoyer un email à l'adresse <a href="mailto:reclamation@i-sante.tn" className="text-blue-600 hover:underline">reclamation@i-sante.tn</a> en indiquant le sujet de votre réclamation en objet.
                            </p>
                            <p className="mb-4">
                                <span className="text-green-500">■</span> Adresse de contact générale : <a href="mailto:contact@i-sante.tn" className="text-blue-600 hover:underline">contact@i-sante.tn</a>
                            </p>
                            <p className="text-red-500 font-bold">
                                <strong>*</strong> Pour que votre demande et/ou message soient routés vers la bonne destination et traités dans les délais, nous vous prions de bien vérifier que votre email est envoyé à la bonne adresse.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
