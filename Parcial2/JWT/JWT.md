# <center>**JSON WEB TOKEN**<center>

*Un JSON Web Token (JWT) es una manera compacta y segura de representar afirmaciones para ser transferidas entre dos partes. Se utiliza a menudo en escenarios de autenticación y autorización, permitiendo transmitir información de manera segura. Piensa en ello como un token digital que puedes llevar contigo, demostrando quién eres o qué permisos tienes, sin necesidad de comprobar constantemente con el servidor central.*

# ¿Cómo se estructura un JSON Web Token?

*Un JWT firmado consta de tres partes, todas ellas codificadas en Base64 y separadas por un punto:*

HEADER.PAYLOAD.SIGNATURE

**HEADER**  
*El header consta generalmente de dos valores y proporciona información importante sobre el token. Contiene el tipo de token y el algoritmo de la firma y/o cifrado utilizados. Este podría ser un ejemplo de header de un JWT:*

{ "alg": "HS256", "typ": "JWT" }

**PAYLOAD**  
*El campo payload de JSON Web Token contiene la información real que se transmitirá a la aplicación. Aquí se definen algunos estándares que determinan qué datos se transmiten y cómo. La información se proporciona como pares key/value (clave-valor); las claves se denominan claims en JWT. Hay tres tipos diferentes de claims:*

* Claims registrados.  
* Claims publicos. 
* Claims privados.

*Un payload podría estructurarse, por lo tanto, de la siguiente manera:*

{ "sub": "123", "name": "Alicia", "exp": 30 }

**FIRMA**  
*La firma de un JSON Web Token se crea utilizando la codificación Base64 del header y del payload, así como el método de firma o cifrado especificado. La estructura viene definida por JSON Web Signature (JWS), un estándar establecido en el RFC 7515. Para que la firma sea eficaz, es necesario utilizar una clave secreta que solo conozca la aplicación original. Por un lado, la firma verifica que el mensaje no se ha modificado por el camino. Por otro, si el token está firmado con una clave privada, también garantiza que el remitente del JWT sea el correcto.*

*Existen diferentes métodos de firma, dependiendo del nivel de confidencialidad de los datos:*

* Sin protección.
* Firma (JWS).
* Firma (JWS) y cifrado (JWE). 

*El cifrado crea una secuencia de caracteres aparentemente aleatoria:*

{ 7WK5T79u5mIzjIXXi2oI9Fglmgivv7RAJ7izyj9tUyQ }

# ¿Cómo funciona un JSON Web Token?

*El inicio de sesión de usuario ejemplifica bien la función del JSON Web Token. Antes de utilizar el JWT, hay que establecer una clave secreta. Una vez que el usuario ha introducido correctamente sus credenciales, el JWT se devuelve con la clave y se guarda localmente. La transmisión debe realizarse a través de HTTPS para que los datos estén mejor protegidos.*

*De esta manera, cada vez que el usuario accede a recursos protegidos, como a una API o a una ruta protegida, el user agent utiliza el JWT como parámetro (por ejemplo, jwt para peticiones GET) o como header de autorización (para POST, PUT, OPTIONS y DELETE). La otra parte puede descifrar el JSON Web Token y ejecutar la solicitud si la verificación se realiza correctamente.*

# ¿En qué casos se utiliza JSON Web Token?

*JSON Web Token ofrece varias ventajas en comparación con el método tradicional de autentificación y autorización con cookies, por lo que se utiliza en las siguientes situaciones:*

* Aplicaciones REST.  
* Intercambio de recursos de origen cruzado.  
* Uso de varios frameworks.