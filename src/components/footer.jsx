const Footer = () => {
    return (
        <footer id="contact" className="bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 py-8">
            <div className="container mx-auto px-6">
                <div className="flex justify-center">
                    <div className="w-full max-w-4xl text-center bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                        <p className="mb-6 text-gray-700">
                            Immeuble Rahma, Bloc A, Appt 2, 2092 El Manar 1, Tunis, Tunisie
                            <br />
                            TEL: <strong className="text-blue-600">(+216) 74 400 185</strong> / <strong className="text-blue-600">(+216) 70 861 360</strong> / FAX: <strong className="text-blue-600">(+216) 70 861 334</strong>
                        </p>

                        <div className="text-left px-6 py-6 border-4 border-blue-500 rounded-lg bg-blue-50">
                            <p className="mb-4 text-gray-800">
                                <span className="text-green-600">■</span> Pour toute requête commerciale, veuillez nous contacter sur l'adresse <a href="mailto:commercial@i-sante.tn" className="text-blue-700 hover:underline">commercial@i-sante.tn</a>
                            </p>
                            <p className="mb-4 text-gray-800">
                                <span className="text-green-600">■</span> Pour déposer une réclamation, veuillez nous envoyer un email à l'adresse <a href="mailto:reclamation@i-sante.tn" className="text-blue-700 hover:underline">reclamation@i-sante.tn</a> en indiquant le sujet de votre réclamation en objet.
                            </p>
                            <p className="mb-4 text-gray-800">
                                <span className="text-green-600">■</span> Adresse de contact générale : <a href="mailto:contact@i-sante.tn" className="text-blue-700 hover:underline">contact@i-sante.tn</a>
                            </p>
                            <p className="text-red-600 font-semibold">
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
