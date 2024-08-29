
const About = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 p-8 mt-20">
            <header className="mb-10 text-center">
                <h1 className="text-5xl font-bold text-blue-800">À Propos de I-Santé Expert</h1>
            </header>
            
            <section className="mb-8 p-6 bg-white shadow-lg rounded-lg border border-blue-300">
                <h2 className="text-3xl font-semibold text-blue-700 mb-4">Problématique</h2>
                <p className="text-gray-700">
                    Les médecins contrôleurs gèrent quotidiennement un grand volume de courriers médicaux, ce qui entraîne des pertes, des retards, et des difficultés de recherche en raison du traitement manuel.
                </p>
            </section>
            
            <section className="mb-8 p-6 bg-white shadow-lg rounded-lg border border-green-300">
                <h2 className="text-3xl font-semibold text-green-700 mb-4">Solution</h2>
                <p className="text-gray-700">
                    <strong>I-Santé Expert</strong> simplifie la gestion des courriers médicaux avec des fonctionnalités telles que la traçabilité, une interface utilisateur intuitive, et l'automatisation des processus.
                </p>
            </section>
            
            <section className="mb-8 p-6 bg-white shadow-lg rounded-lg border border-yellow-300">
                <h2 className="text-3xl font-semibold text-yellow-700 mb-4">Acteurs</h2>
                <p className="text-gray-700">
                    Les médecins contrôleurs peuvent s’authentifier, gérer leur profil, consulter les dossiers à traiter, et visualiser l’historique des dossiers traités.
                </p>
            </section>
            
            <section className="mb-8 p-6 bg-white shadow-lg rounded-lg border border-pink-300">
                <h2 className="text-3xl font-semibold text-pink-700 mb-4">Besoins</h2>
                <p className="text-gray-700">
                    <strong>I-Santé Expert  </strong> doit être fiable, ergonomique, efficace, sécurisé, performant, et fournir une traçabilité complète.
                </p>
            </section>
            
            <footer className="mt-12 py-4 border-t border-gray-300 text-center bg-gray-200">
                <p className="text-gray-600">© {new Date().getFullYear()} MedControl. Tous droits réservés.</p>
            </footer>
        </div>
    );
};

export default About;
