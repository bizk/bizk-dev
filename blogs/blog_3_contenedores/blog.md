# Ponelo en un contenedor y ya

> Image credits: https://wallpaperset.com/moby-dick-wallpaper

    Mucho se ha hablado de la magia de los contenedores, ya han pasado 10 años desde el boom de Devops. Este blog no tiene nada nuevo que agregar a lo que ya se ha dicho. Solo es mi experiencia como ingeniero

    En todos mis trabajos excepto en J.P. Morgan donde trabajábamos con un sistema legacy, usar Docker o alguna alternativa ha sido el estandarte. Y si bien entendía la "teoría" del porqué es genial.

    No fue hasta que tuve que hacerme cargo de la infraestructura por mi cuenta que comprendí el fanatismo de los contenedores. En mis primeros trabajos Freelance, mis implementaciones corrían arriba de una VPS con Linux, donde configuraba maa nualmente las reglas de networking con nginx, configuraba los firewalls, configuraba el administrador de procesos y logs.

    Mi motivación principal de hacerlo así era la creencia de que era más fácil, ya que eran API rest sencillas de mantener y al usar Linux como sistema operativo nativo, me siento cómodo en él. Que equivocado estaba :) 

## infraestructura

    Los beneficios más grandes son a nivel de infraestructura. Hay 2 problemas fundamentales de esta solución que se resuelven: Seguridad y reaplicabilidad.

- **Seguridad**: Tener la aplicación corriendo "bare metal", permite que cualquier atacante ante una vulnerabilidad tenga acceso al servidor. O sea, a datos sensibles.
  
  - En un servidor de pruebas, había levantado una instancia de TigerVNC, a las 8 horas de tenerlo funcionando, me encontré que habían ejecutado descargado y ejecutados comandos dentro del mismo, aparentemente una botnet proveniente de china.

- **Reaplicabilidad:** Que pasa si el servidor por algún motivo (especialmente un VPS) se cae? Tenemos que hacer todo de nuevo. Y si el servicio tiene muchas configuraciones sin backup, es un dolor de cabeza. (Por suerte este problema no lo tuve, gracias a backups)

    Los contenedores resuelven la seguridad alienando al servicio dentro de una máquina virtual y aseguran poder correr la aplicación en cualquier entorno. Por otro lado, soluciones como Docker, traen "out of the box", herramientas para administrar el proceso, mantener logs, configurar al servicio mediante variables de ambiente, y facilitan la orquestación de múltiples servicios, particularmente gracias a **docker compose**.

## Desarrollo

    Algo no menor, es que también facilitan el desarrollo en términos de reaplicabilidad, y de buenas prácticas. Ya que lo que corre en el contenedor local, va a correr en el contenedor productivo.

    Por otro lado, el hecho de abstraer el servicio en una unidad inmutable. Lo reduce a uno a hacer cosas atadas con alambre, te obliga a pensar que hacer con las configuraciones, como manejar de manera replicable las interacciones con el file system o cualquier otra infraestructura. Haciendo que la arquitectura sea mejor pensada, y menos sobre la marcha.

## Conclusión

    Mi creencia era que los sistemas de contenedores consumían muchos recursos y ponerlo en proyectos pequeños era aplicar "sobre ingeniería", la práctica me ha demostrado lo contrario. Es fácil de implementar, y resuelve muchos dolores de cabeza + cada año los recursos son más baratos. Una raspberry pi puede correr varios contenedores en paralelo sin inmutarse.
