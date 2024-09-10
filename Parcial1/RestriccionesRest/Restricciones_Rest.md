# <center>RESTRICCIONES REST<center>
**Cliente - Servidor:** Las aplicaciones existentes en el servidor y el cliente deben estar separadas.  

**Sin estado:** Las requisiciones se realizan de forma independiente, es decir cada una ejecuta determinada accion.  

**Cache:** La API debe utilizar caché para evitar llamdas recurrentes al servidor.  

**Interfaz uniforme:** Todas las solicitudes de API para el mismo recurso deben tener el mismo aspecto, sin importar de dónde provenga la solicitud.  

**Sistema de capas:** El cliente puede estar conectado mediante la interfaz al servidor o a un intermediario, para el es irrelevante y descinocido.  

**Codigo bajo demanda(opcional)** 