Intalation du projet 7 : Groupomania

Dossier Principal :

Nous avons la licence pour les images avatars & la licence pour le fond jaune
Un fichier texte avec le compte Modérateur pour le site
Un fichier SQL pour créer la Base de Donnée Mysql
Le fichier Readme
Un dossier Back-End
Un dossier Front-End


/////////////////////////////////////////////////////////

Avant Apropos :

Vous devez avoir installé sur votre machine :

- Un serveur Web avec MYSQL et PhpMyAdmin en Local (localhost)
- Avoir installer NodeJS

/////////////////////////////////////////////////////////

Dossier Principal installation de la Base de donner :

Pour créer la base de donner MySql du projet 7 : Groupomania
Vous devez aller dans phpmyadmin sur votre serveur
puis créer une nouvelle base de donner avec le bouton : "Nouvelle base de données"
Nomer là : projet7 et valider

une fois créer cliquer sur la BDD projet7 et aller dans Importer puis clicher,
sur "Choisir un fichier" et aller chercher le fichier dans dossier principal nommée : projet7.sql
et valider.

La base de donner et operationelle

/////////////////////////////////////////////////////////

Sécriter et mot de passe de la Base De Donner :

par défaut le serveur et configurer avec le nom utilisateur : root et sans mot de passe
configuration par Défaut de Phpmyadmin.

Vous pouvez (Recommander) créer un nom d'utilisateur et mot de passe d'un nouveau compte utilisateur sur Phpmyadmin et l'utiliser avec le serveur back-end'


Si vous voulez utiliser un autre compte utilisateur avec un mot de passe coté Back-End.
aller dans le dossier Back-End puis dans src > db > sequelize.js
a la ligne 20 changer l'utilisateur root par votre nom d'utilisateur.
Pour le mot de passe aller dans back-end et .env et ajouter votre mot de passe sur la ligne 2
MOTDEPASSE=MonNouveauMotDePasse




/////////////////////////////////////////////////////////

Dossier Back-End :

Pour installer le serveur cote back-end taper la commande suivante dans le répertoire :

npm install

Lancer le serveur en tapent :

npm run dev

////////////////////////////////////////////////////////

Dossier Front-End :

Pour installer le serveur cote Front-end taper la commande suivante dans le répertoire :

npm install

Lancer le serveur en tapent :

npm run serve

//////////////////////////////////////////////////////

le serveur Back-End et Front-End doivent être lancer les deux en même temps.

l'adresse URL du Back-End est : http://localhost:8880
l'adresse URL du Front-End est : http://localhost:8080

Pour lancer le site tapé dans votre navigateur à la barre d'adresse : http://localhost:8080

///////////////////////////////////////////////////////

Un fichier texte avec le compte Modérateur pour le site est donné dans le fichier : Compte-Moderateur.txt



