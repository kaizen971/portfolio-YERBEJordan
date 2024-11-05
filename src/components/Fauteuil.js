import React, { useState } from 'react';

const Fauteuil = () => {
    const [activeDetail, setActiveDetail] = useState(null);

    const fauteuils = [
        {
            nom: "Titan 2",
            description: "Nos fauteuils massants sont équipés dernières technologies pour vous offrir un massage complet et relaxant. Chaque séance est pensée pour vous procurer une détente maximale.",
            caracteristiques: [
                {
                    titre: "24 programmes automatiques",
                    details: {
                        Focus: ["Taille et fessiers", "Nuque et épaules", "Dos et colonne", "Jambes et pieds"],
                        Sport: ["Pré-entraînement", "Post-entraînement", "Après la course", "Après le ménage"],
                        Moment: ["Buz matinal", "Après la sieste", "Beaux rêves", "Méditation"],
                        Classique: ["Thaï", "Chinois", "Pression", "Ancien"],
                        Utilisateur: ["Pro", "Pour lui", "Pour elle", "Senior"],
                        Particulier: ["Doux câlin", "Libération profonde", "Étirement", "Respiration profonde"]
                    }
                },
                {
                    titre: "6 techniques de massage",
                    details: ["Pétrissage", "Percussion", "Shiatsu", "Synchrone", "Tapotement", "Shiatsu 3D"]
                },
                {
                    titre: "Position Zéro-Gravité",
                    details: "C'est celle qui exerce le moins de pression sur colonne vertébrale et les membres. Cette position favorise la circulation du sang et la relaxation."
                },
                {
                    titre: "Écran tactile 8 pouces",
                    details: "Titan2 intègre une tablette à écran tactile Led de 8 pouce avec laquelle vous pouvez contrôler toute l'expérience de massage."
                },
                {
                    titre: "Bluetooth et chargeur sans fil",
                    details: "4 haut-parleurs intégrés. La connexion bluetooth est également accessibles au fauteuil. Inclut un chargeur sans fil rapide."
                }
            ]
        },
        {
            nom: "Médiform",
            description: "Un massage complet, de la tête aux pieds.",
            caracteristiques: [
                {
                    titre: "Analyse corporelle",
                    details: "Le scan analyse corporelle avant chaque début de massage en programme automatique. La fonction 'Auto Scanning' s'active et cartographie votre morphologie."
                },
                {
                    titre: "Massage à l'air comprimé",
                    details: {
                        description: "Un massage complet, de la tête aux pieds. 48 coussinets d'air recouvrent l'intégralité du fauteuil",
                        zones: ["Main et bras", "Pieds et mollets", "Épaules", "Hanches et cuisses", "Massage des genoux"]
                    }
                },
                {
                    titre: "Chaleur pour les lombaires",
                    details: "Un système chauffant est installé au niveau des vertèbres lombaires, diffusant une chaleur douce et réparatrice sur l'ensemble de votre dos."
                },
                {
                    titre: "Position Zéro-Gravité",
                    details: "Une position où les jambes sont surélevées par rapport au cœur, améliorant le flux sanguin et réduisant la pression sur la colonne vertébrale."
                },
                {
                    titre: "Contrôle par télécommande",
                    details: "Interface en français avec touche et écran interactif pour un contrôle total du massage."
                }
            ]
        }
    ];

    const toggleDetail = (index) => {
        setActiveDetail(activeDetail === index ? null : index);
    };

    return (
        <section id="section-fauteuil" className="fauteuils-massage">
            <div className="container">
                <div className="intro-section">
                    <h2>Nos Fauteuils de Massage</h2>
                    <p className="intro-text">
                        Nous offrons une expérience unique de relaxation avec nos 2 fauteuils massant ultra-modernes, 
                        conçus pour vous offrir un confort absolu.
                    </p>
                    <p className="intro-description">
                        Nos fauteuils massants sont équipés dernières technologies pour vous offrir un massage complet 
                        et relaxant. Chaque séance est pensée pour vous procurer une détente maximale.
                    </p>
                </div>
                
                <div className="fauteuils-grid">
                    {fauteuils.map((fauteuil, index) => (
                        <div key={index} className="fauteuil-card">
                            <h3>{fauteuil.nom}</h3>
                            <p>{fauteuil.description}</p>
                            <ul>
                                {fauteuil.caracteristiques.map((carac, idx) => (
                                    <li key={idx} onClick={() => toggleDetail(index + '-' + idx)} className="caracteristique-item">
                                        <span>{carac.titre}</span>
                                        {activeDetail === (index + '-' + idx) && (
                                            <div className="details-panel">
                                                {typeof carac.details === 'string' ? (
                                                    <p>{carac.details}</p>
                                                ) : typeof carac.details === 'object' && !Array.isArray(carac.details) ? (
                                                    Object.entries(carac.details).map(([key, value]) => (
                                                        <div key={key} className="detail-section">
                                                            <h4>{key}</h4>
                                                            <ul>
                                                                {Array.isArray(value) ? value.map((item, i) => (
                                                                    <li key={i}>{item}</li>
                                                                )) : <p>{value}</p>}
                                                            </ul>
                                                        </div>
                                                    ))
                                                ) : (
                                                    <ul>
                                                        {carac.details.map((detail, i) => (
                                                            <li key={i}>{detail}</li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </div>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .fauteuils-massage {
                    padding: 4rem 0;
                    background-color: #f8f9fa;
                }

                .container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 1rem;
                }

                h2 {
                    text-align: center;
                    margin-bottom: 3rem;
                    color: #333;
                    font-size: 2.5rem;
                }

                .fauteuils-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 2rem;
                }

                .fauteuil-card {
                    background: white;
                    padding: 2rem;
                    border-radius: 10px;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                }

                .fauteuil-card h3 {
                    color: #0066cc;
                    margin-bottom: 1rem;
                    font-size: 1.5rem;
                }

                .fauteuil-card p {
                    color: #666;
                    margin-bottom: 1.5rem;
                }

                .fauteuil-card ul {
                    list-style: none;
                    padding: 0;
                }

                .fauteuil-card ul li {
                    padding: 0.5rem 0;
                    color: #555;
                    position: relative;
                    padding-left: 1.5rem;
                }

                .fauteuil-card ul li:before {
                    content: "•";
                    color: #0066cc;
                    position: absolute;
                    left: 0;
                }

                .caracteristique-item {
                    cursor: pointer;
                    transition: all 0.3s ease;
                }

                .caracteristique-item:hover {
                    color: #0066cc;
                }

                .details-panel {
                    background: #f5f5f5;
                    padding: 1rem;
                    margin-top: 0.5rem;
                    border-radius: 5px;
                    font-size: 0.9rem;
                }

                .detail-section {
                    margin-bottom: 1rem;
                }

                .detail-section h4 {
                    color: #0066cc;
                    margin-bottom: 0.5rem;
                }

                .intro-section {
                    text-align: center;
                    max-width: 800px;
                    margin: 0 auto 4rem auto;
                }

                .intro-text {
                    font-size: 1.2rem;
                    color: #333;
                    line-height: 1.6;
                    margin-bottom: 1.5rem;
                }

                .intro-description {
                    font-size: 1.1rem;
                    color: #666;
                    line-height: 1.5;
                }
            `}</style>
        </section>
    );
};

export default Fauteuil; 