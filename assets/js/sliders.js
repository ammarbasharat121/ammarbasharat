<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>MAISON DU LYS | Contact</title>
    
    <!-- Same head content as index.html -->
    <link rel="stylesheet" href="./assets/css/style.css">
    <style>
        .contact-page {
            padding-top: 120px;
            min-height: 100vh;
            background-color: #f8f5f0;
        }
        
        .contact-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 40px 20px;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 60px;
        }
        
        .contact-form, .contact-info {
            background: white;
            padding: 40px;
            border-radius: 20px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }
        
        .contact-form h2, .contact-info h2 {
            font-family: 'BurgoyneInitials', serif;
            color: #976F3B;
            font-size: 2.5rem;
            margin-bottom: 30px;
            text-align: center;
        }
        
        .form-group {
            margin-bottom: 25px;
        }
        
        .form-group input,
        .form-group textarea {
            width: 100%;
            padding: 15px;
            border: 2px solid #e8e0d5;
            border-radius: 10px;
            font-family: 'QuinoaSC-Medium', serif;
            font-size: 16px;
            color: #333;
            transition: border-color 0.3s ease;
        }
        
        .form-group input:focus,
        .form-group textarea:focus {
            outline: none;
            border-color: #976F3B;
        }
        
        .submit-btn {
            background-color: #976F3B;
            color: white;
            border: none;
            padding: 15px 40px;
            border-radius: 25px;
            font-family: 'QuinoaSC-Medium', serif;
            font-size: 18px;
            cursor: pointer;
            transition: background-color 0.3s ease;
            width: 100%;
        }
        
        .submit-btn:hover {
            background-color: #7a5a2f;
        }
        
        .info-item {
            margin-bottom: 25px;
            padding-left: 30px;
            position: relative;
        }
        
        .info-item i {
            position: absolute;
            left: 0;
            top: 5px;
            color: #976F3B;
            font-size: 20px;
        }
        
        .info-item h3 {
            font-family: 'QuinoaSC-Semibold', serif;
            color: #333;
            margin-bottom: 10px;
        }
        
        .info-item p {
            font-family: 'QuinoaSC-Medium', serif;
            color: #666;
            line-height: 1.6;
        }
        
        @media (max-width: 768px) {
            .contact-container {
                grid-template-columns: 1fr;
                gap: 40px;
            }
            
            .contact-form, .contact-info {
                padding: 30px 20px;
            }
        }
    </style>
</head>
<body>
    <!-- Same fixed header as index.html -->
    <header class="fixed-header">
        <div class="header-container">
            <nav class="main-nav">
                <ul>
                    <li><a href="index.html">Accueil</a></li>
                    <li><a href="index.html#concept">Concept</a></li>
                    <li><a href="index.html#produits">Produits</a></li>
                    <li><a href="index.html#partenaires">Partenaires</a></li>
                    <li><a href="index.html#projets">Projets</a></li>
                    <li><a href="/contact.html" class="active">Contact</a></li>
                    <li><a href="/mention-lEgales.html">Mentions Légales</a></li>
                </ul>
            </nav>
            <div class="language-switch">
                <a href="index.html" class="active">FR</a> | 
                <a href="/Eng-version/index.html">ENG</a>
            </div>
        </div>
    </header>
    
    <section class="contact-page">
        <div class="contact-container">
            <div class="contact-form">
                <h2>Contactez-Nous</h2>
                <form id="contactForm">
                    <div class="form-group">
                        <input type="text" placeholder="Votre Nom*" name="name" required>
                    </div>
                    <div class="form-group">
                        <input type="email" placeholder="Votre Email*" name="email" required>
                    </div>
                    <div class="form-group">
                        <input type="text" placeholder="Sujet" name="subject">
                    </div>
                    <div class="form-group">
                        <textarea placeholder="Votre Message*" rows="6" name="message" required></textarea>
                    </div>
                    <button type="submit" class="submit-btn">Envoyer le Message</button>
                </form>
            </div>
            
            <div class="contact-info">
                <h2>Informations de Contact</h2>
                <div class="info-item">
                    <i class="fas fa-map-marker-alt"></i>
                    <h3>Adresse</h3>
                    <p>
                        ÔLAB GROUP, Maison du Lys Est.Paris<br>
                        34, Avenue Champs-Élysées<br>
                        75008 Paris, France
                    </p>
                </div>
                <div class="info-item">
                    <i class="fas fa-clock"></i>
                    <h3>Horaires</h3>
                    <p>
                        Lundi - Vendredi: 8h - 19h<br>
                        Samedi: 9h - 17h<br>
                        Dimanche: Fermé
                    </p>
                </div>
                <div class="info-item">
                    <i class="fas fa-envelope"></i>
                    <h3>Email</h3>
                    <p>contact@maisondulys.fr</p>
                </div>
                <div class="info-item">
                    <i class="fas fa-phone"></i>
                    <h3>Téléphone</h3>
                    <p>+33 1 XX XX XX XX</p>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Same footer as index.html -->
    <footer class="main-footer">
        <div class="footer-container">
            <div class="footer-links">
                <a href="index.html">Accueil</a>
                <a href="index.html#concept">Concept</a>
                <a href="index.html#produits">Produits</a>
                <a href="index.html#partenaires">Partenaires</a>
                <a href="index.html#projets">Projets</a>
                <a href="/contact.html">Contact</a>
                <a href="/mention-lEgales.html">Mentions Légales</a>
                <a href="/licence.html">Licence</a>
            </div>
            <div class="footer-info">
                <p>ÔLAB GROUP, Maison du Lys Est.Paris</p>
                <p>34, Avenue Champs-Élysées, 75008 Paris, France</p>
                <p>Horaires: 8H - 19H Paris, France</p>
                <div class="social-icons">
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-linkedin-in"></i></a>
                </div>
                <p class="copyright">© 2024 Maison du Lys. Tous droits réservés.</p>
            </div>
        </div>
    </footer>
    
    <script src="./assets/js/parallax.js"></script>
    <script>
        // Contact form submission
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Add your form submission logic here
            // You can use AJAX to submit to your PHP backend
            
            alert('Merci pour votre message! Nous vous répondrons bientôt.');
            this.reset();
        });
    </script>
</body>
</html>