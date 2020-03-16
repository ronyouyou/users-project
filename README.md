# users-project
Récupérer et afficher un ensemble d'utilisateur sous format JSON, en utilisant NodeJS.

# Aide pour utiliser le projet :

Pour cloner le projet, ouvrir une invite de commande Docker et saisir les commandes suivantes :

1°) git clone https://github.com/ronyouyou/users-project.git (permet de cloner le projet dans l'endroit où vous vous trouvez lors de l'exécution de la commande).

2°) cd users-project/

3°) docker run -p 3306:3306 --name mysql -e MYSQL_ROOT_PASSWORD=rtlry -d mysql:5 
Cette 3ème commande permet de démarrer une instance mysql.
Infos sur les options principales de la commande :
	-p permet de préciser un mappage sur un port
	--name permet de donner un nom à notre container
	-d permet de lancer le container en 'tâche de fond'
	
4°) docker run --name phpmyadmin --link mysql:db -d -p 3333:80 phpmyadmin/phpmyadmin
Cette 4ème commande permet de démarrer une instance phpmyadmin.
Infos sur les options principales de la commande :
	-p permet de préciser un mappage sur un port
	--name permet de donner un nom à notre container
	-d permet de lancer le container en 'tâche de fond'
	--link permet de lier le container avec celui de mysql créé avant.


5°) docker run -it --rm -p 8081:3000 -v $PWD:/users-project --link mysql:db node:12 bash


6°) cd users-project

Rendu ici, rendez-vous sur PhpMyAdmin(soit 127.0.0.1:3333 ou bien 192.168.99.100:3333 si vous êtes sur Windows).
Connectez vous avec les identifiants (login = root, et le mot de passe correspond à celui défini dans la 3ème commande).
Une fois connecté, créez la base 'ProgWeb' et importez le script sql nommé 'user.sql' que vous trouverez dans le dossier du projet créé après le clonage depuis github.

Une fois l'ensemble des données importées, retournez dans le terminal de Docker et saisissez la commande suivante :

7°) node index.js

Sur votre navigateur, rendez-vous sur le projet qui est lancé en saisissant l'adresse 127.0.0.1:8081 ou bien 192.168.99.100:8081.

Il ne vous reste plus qu'à visualiser l'ensemble des données par le biais de la route /users ou bien, si vous le souhaitez, je vous invite à visualiser seulement une seule donnée, pour cela :

- tester la route /users/:id en remplaçant le :id par un numéro, 1, 16, 250, ...)

2 choix s'offrent à vous :

- soit vous visualisez une données particulière.
- soit une message vous informant que la donnée liée à l'id que vous avez saisi n'existe pas.
