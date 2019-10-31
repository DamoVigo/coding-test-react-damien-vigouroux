# 04h11 Coding Test (React)
Bienvenue dans le projet test de 04h11. Vos compétences en Front-End et en React seront mis à l'épreuve.

## Tâches
Votre tâche principale sera de compléter ce repo dans le but d'obtenir un produit fini comportant les deux pages qui suivent. Ces pages testeront vos compétences en intégration, ainsi qu'en interactions avec un API REST. _Le lien vers cet API vous sera communiqué directement._

### Home Page
Une page simple, contenant un titre, un sous-sitre et un lien vers la page _User_.
On ne demande pas que tout soit _Pixel Perfect_, mais la page intégrée devrait être proportionnée similairement à l'image.

![Home Page](src/assets/images/home.page.png)
__Important :__ Le background ainsi que les bulles doivent être réalisés en CSS.

### User Page
Cette page consiste en un dropdown d'utilisateurs (peuplé à partir d'un appel __list__ à l'API), des informations sur l'utilisateur sélectionné ainsi qu'une liste d'articles liés à cet utilisateur (peuplés à partir d'un appel __get__ à l'API).

Au changement du dropdown, on demande la redirection vers une URL incluant l'ID de l'utilisateur choisi. Si aucun ID n'est fourni à l'URL, on peuple le reste de la page avec les informations du premier utilisateur dans la liste.

Par exemple, si on considère deux utilisateurs (avec les ID 1 et 2 respectivement) :

- `/users` et `users/1` afficheraient les informations de l'utilisateur #1
- `/users/2` afficherait les information du second utilisateur

__Attention__, cela ne veut pas dire qu'un rafraichissement de la page est nécéssaire. Il serait probablement optimal de ne pas _mount/unmount_ la page à chaque fois qu'un changement a lieu...

![User Page](src/assets/images/user.page.png)

## Détails sur l'API
2 appels vous seront possibles sur cet API. Un __list__ et un __get__.

- __list__ : `${ API }/users` vous retournera la liste des utilisateurs
- __get__ : `${ API }/users/${ id }` vous retournera les détails d'un utilisateur en particulier, avec les articles qui lui sont liés

## Indices
- Les variables à utiliser pour les styles sont dans le fichier `/src/assets/scss/imports/_variables.scss`
- La route vers l'API à utiliser peut être mise à jour dans le fichier `/src/constants/api.js`
- Les interractions avec l'API devraient se faire dans des __services__
- Des componsants peuvent être créés pour démontrer votre compréhension de ceux-ci. Si nécéssaire, utiliser le dossier `/src/components/` pour regrouper ces derniers.
- Une attention sera aussi portée sur votre qualité d'utilisation de GIT


## Démarrer l'application
### `npm install`
Installe les dépendances nécessaires pour faire rouler l'application.

### `npm start`
Roule l'application en mode de développement<br>
Ouvrir [http://localhost:3000](http://localhost:3000) pour consulter dans un navigateur.

Cette page se recharge automatiquement à chaque modification.
