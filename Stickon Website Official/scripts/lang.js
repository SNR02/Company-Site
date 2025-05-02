let defaultLocale = "en";
const supportedLanguages = ["en", "fr"];
const translations = {
  "en": {
    "home":"Home",
    "about":"About",
    "projects":"Projects",
    "contact":"Contact",
    "visit-us":"Visit Us",
    "app-header": "Empowering businesses by delivering world-class solutions.",
    "app-desc": "We help organisations thrive, by building innovative & bespoke software solutions.",
    "find-more": "Find Out More",
    "choose-us-header":"Why You Should",
    "cu-tag":"Choose Us?",
    "section-header1":"Experience reliability redefined with StickOn.",
    "cu-tb1":"Contact Us",
    "cu-p1":"Get in touch for inquiries and support.",
    "cu-tb2":"Brainstroming",
    "cu-p2":"Innovative and creative ideas tailored for you.",
    "cu-tb3":"Find the Solution",
    "cu-p3":"Practical solutions for your challenges.",
    "cu-tb4":"Project Done",
    "cu-p4":"Proven success in completed projects.",
    "about-us":"About Us",
    "section-header2":"Stickon Technologies: Innovating for a Better Tomorrow",
    "about-desc":"At Stickon Technologies, we create affordable solutions to real-world problems, bridging innovative technology with practical applications. Our skilled team excels across diverse domains, driving positive change and delivering sustainable value. Committed to excellence, we develop robust software, enhance business processes, and offer expert consultancy. Join us to achieve your goals with our reliable and innovative solutions.",
    "cc-h1":"Let's Make Your Place Better",
    "cc-p1":"At Stickon Technologies, we're dedicated to transforming spaces with innovative solutions. Our expertise ensures every project enhances functionality and aesthetics, providing real value.",
    "cc-h2":"Make Your Intelligent Choice Today",
    "cc-p2":"Choose Stickon Technologies for smart, effective solutions. Our diverse domain expertise guarantees tailored, cutting-edge approaches to meet your unique needs and drive your success.",
    "our-tech-stack":"Our Technology Stack",
    "section-header3":"We are concerned about the security of our customers. That's why we always keep updating and use best technologies in our products.",
    "our-projects":"Our Projects",
    "ph1":"AI Content Generator",
    "pp1":"A web app that uses AI to generate text and images based on user prompts",
    "ph2":"OneShop",
    "pp2":"A platform where users can search for products, view legit reviews, and compare prices",
    "ph3":"Virtual Document Assistant",
    "pp3":"Virtual Document Assistant is an application where you can upload files and chat with your applications.",
    "ph4":"WebTalk",
    "pp4":"A web-based video conferencing application that allows users to join rooms, participate in video calls, raise hands, send chat messages, share screens, and more.",
    "ph5":"VidConnect",
    "pp5":"Real-time web chat app with integrated video conferencing using VideoSDK.",
    "contact-tag":"Building Digital Excellence",
    "section-header4":"Plugging great Ideas into your brand!",
    "contact-para":"Transforming your brand with innovative ideas, Effortlessly integrating creativity into your identity.",
    "full-name-placeholder":"Full Name",
    "your-email-placeholder":"Your Email",
    "your-phone-placeholder":"Your Phone",
    "your-message-placeholder":"Your Message",
    "contact-form-submit":"Send Message",
    "contact-form-success":"Thank you! Your submission has been received!",
    "contact-form-failure":"Oops! Something went wrong while submitting the form.",
    "section-header5":"Visit our office",
    "visit-us-para":"Step into our space and witness the dedication that defines our brand.",
    "visit-btn":"Visit our location",
    "subscribe-now":"Subscribe Now",
    "section-header6":"Want to get updates ?",
    "subscribe-para":"Stay informed with the latest news and exclusive insights, delivered directly to your inbox, ensuring you never miss a thing.",
    "subscribe-email-placeholder":"Enter your email",
    "subscribe-form-success":"Thank you! Your subscription has been received!",
    "subscribe-form-failure":"Oops! Something went wrong while submitting the form.",
    "footer-para":"Ready to bring your ideas to life? Let's create something amazing together. Reach out to us today and start your project journey with our expert team. We are committed to turning your vision into reality with innovative solutions and dedicated support. Whether it's a new concept or an improvement to an existing one, we're here to help every step of the way. Partner with us and watch your project thrive.",
    "get-started":"Get Started",
    "quick-links":"Quick Links"
  },
  "fr": {
    "home": "Maison",
    "about": "À propos",
    "projects": "Projets",
    "contact": "Contact",
    "visit-us": "Visitez-nous",
    "app-header": "Donner du pouvoir aux entreprises en proposant des solutions de classe mondiale.",
    "app-desc": "Nous aidons les organisations à prospérer en créant des solutions logicielles innovantes et sur mesure.",
    "find-more": "En savoir plus",
    "choose-us-header": "Pourquoi",
    "cu-tag": "nous choisir?",
    "section-header1": "Découvrez la fiabilité redéfinie avec StickOn.",
    "cu-tb1": "Contactez-nous",
    "cu-p1": "Contactez-nous pour toute demande de renseignements et d'assistance.",
    "cu-tb2": "Remue-méninges",
    "cu-p2": "Des idées innovantes et créatives adaptées à vos besoins.",
    "cu-tb3": "Trouver la solution",
    "cu-p3": "Des solutions pratiques à vos défis.",
    "cu-tb4": "Projet terminé",
    "cu-p4": "Succès prouvé dans les projets terminés.",
    "about-us": "À propos de nous",
    "section-header2": "Stickon Technologies : Innover pour un avenir meilleur",
    "about-desc": "Chez Stickon Technologies, nous créons des solutions abordables aux problèmes du monde réel, en associant une technologie innovante à des applications pratiques. Notre équipe qualifiée excelle dans divers domaines, en favorisant des changements positifs et en offrant une valeur durable. Engagés envers l'excellence, nous développons des logiciels robustes, améliorons les processus commerciaux et proposons des conseils d'experts. Rejoignez-nous pour atteindre vos objectifs grâce à nos solutions fiables et innovantes.",
    "cc-h1": "Améliorons votre environnement",
    "cc-p1": "Chez Stickon Technologies, nous nous engageons à transformer les espaces avec des solutions innovantes. Notre expertise garantit que chaque projet améliore la fonctionnalité et l'esthétique, offrant une réelle valeur ajoutée.",
    "cc-h2": "Faites votre choix intelligent aujourd'hui",
    "cc-p2": "Choisissez Stickon Technologies pour des solutions intelligentes et efficaces. Notre expertise diversifiée dans le domaine garantit des approches sur mesure et de pointe pour répondre à vos besoins uniques et favoriser votre réussite.",
    "our-tech-stack": "Notre pile technologique",
    "section-header3": "Nous nous soucions de la sécurité de nos clients. C'est pourquoi nous continuons à mettre à jour et utilisons les meilleures technologies dans nos produits.",
    "our-projects": "Nos projets",
    "ph1": "AI Content Generator",
    "pp1": "Une application Web qui utilise l'IA pour générer du texte et des images en fonction des invites de l'utilisateur",
    "ph2": "oneShop",
    "pp2": "Une plateforme où les utilisateurs peuvent rechercher des produits, consulter des avis légitimes et comparer les prix",
    "ph3": "Virtual Document Assistant",
    "pp3": "Virtual Document Assistant est une application où vous pouvez télécharger des fichiers et discuter avec vos applications.",
    "ph4": "WebTalk",
    "pp4": "Une application de visioconférence basée sur le Web qui permet aux utilisateurs de rejoindre des salles, de participer à des appels vidéo, de lever la main, d'envoyer des messages de discussion, de partager des écrans, etc.",
    "ph5": "VidConnect",
    "pp5": "Application de chat Web en temps réel avec vidéoconférence intégrée utilisant VideoSDK.",
    "contact-tag": "Construire l'excellence numérique",
    "section-header4": "Intégrez de bonnes idées à votre marque ! ",
    "contact-para": "Transformez votre marque avec des idées innovantes, en intégrant sans effort la créativité dans votre identité.",
    "full-name-placeholder":"Nom et prénom",
    "your-email-placeholder":"Votre e-mail",
    "your-phone-placeholder":"Votre téléphone",
    "your-message-placeholder":"Votre message",
    "contact-form-submit":"Envoyer un message",
    "contact-form-success": "Merci! Votre soumission a été reçue !",
    "contact-form-failure": "Oups ! Une erreur s'est produite lors de l'envoi du formulaire.",
    "section-header5": "Visitez notre bureau",
    "visit-us-para": "Entrez dans notre espace et soyez témoin du dévouement qui définit notre marque.",
    "visit-btn": "Visitez notre emplacement",
    "subscribe-now": "Abonnez-vous maintenant",
    "section-header6": "Vous souhaitez recevoir des mises à jour ?",
    "subscribe-para": "Restez informé des dernières nouvelles et des informations exclusives, livrées directement dans votre boîte de réception, pour ne rien manquer.",
    "subscribe-email-placeholder":"Entrez votre email",
    "subscribe-form-success": "Merci! Votre abonnement a été reçu !",
    "subscribe-form-failure": "Oups ! Une erreur s'est produite lors de l'envoi du formulaire.",
    "footer-para": "Prêt à donner vie à vos idées ? Créons quelque chose d'extraordinaire ensemble. Contactez-nous dès aujourd'hui et démarrez votre projet avec notre équipe d'experts. Nous nous engageons à concrétiser votre vision grâce à des solutions innovantes et à un accompagnement dédié. Qu'il s'agisse d'un nouveau concept ou d'une amélioration d'un concept existant, nous sommes là pour vous aider à chaque étape du processus. Devenez notre partenaire et regardez votre projet prospérer.",
    "get-started": "Commencer",
    "quick-links": "Liens rapides"
  },
};
document.addEventListener("DOMContentLoaded", () => {
  const navLang = navigator ? navigator.language : "en-US";
  defaultLocale = navLang.split("-").length > 1 ? navLang.split("-")[0] : 'en';
  document
    .querySelectorAll("[data-i18n-key]")
    .forEach(translateElement);
});

function translateElement(element) {
    if(defaultLocale !== "en" && supportedLanguages.indexOf(defaultLocale) > -1) {
      const key = element.getAttribute("data-i18n-key");
      const translation = translations[defaultLocale][key];
       // If it's an input or textarea, translate the placeholder
      if (element.tagName.toLowerCase() === 'input' || element.tagName.toLowerCase() === 'textarea') {
        element.placeholder = translation;
      }
      if(element.tagName.toLowerCase() === 'input' && element.type === 'submit'){
        element.value=translation;
      } 
      else {
        element.innerText = translation;
      }
    }
}
