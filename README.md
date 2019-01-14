# Notifications-Api


Inicializando el servicio

1-Ejecuta el siguiente comando en la raiz del proyecto para montar la imagen de docker desde el archivo Dockerfile.

	sudo docker -t getcolors/notifications-api .


2-Ahora, debes ejecutar un contenedor con esa imagen, eso lo haces con el siguiente comando:

	sudo docker run -d -p 4000:3000 getcolors/notifications-api

	Nota: esto ejecutará el contenedor en segundo plano (-d), y expondrá la aplicación en el puerto (-p) 4000, mapeando el puerto de 	entrada de la aplicación que es el 3000, al final se indica el tag asignado a la imagen para saber cual se debe ejecutar.

3- Finalmente está listo, puedes entrar a:
	
	localhost:4000 

