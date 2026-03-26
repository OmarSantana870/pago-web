# 🏛️ Página de Pago - Consulta Jurídica

Página web profesional para solicitar y pagar consultas jurídicas con integración completa a **Netlify Forms**.

## 📋 Características

✅ **Formulario de Pago**
- Campos: Nombre, Apellido, Correo, Teléfono, Dirección, Ciudad
- Selección de tipo de consulta jurídica
- Campos de tarjeta de crédito (número, vencimiento, CVV)
- Validación de datos en tiempo real

✅ **Formulario de Contacto**
- Consultas generales
- Integración directa con Netlify Forms

✅ **Diseño Responsivo**
- Compatible con desktop, tablet y móvil
- Interfaz profesional y moderna
- Colores corporativos para despacho de abogados

✅ **Validaciones**
- Número de tarjeta (13-19 dígitos)
- Fecha de vencimiento (MM/YY)
- CVV (3-4 dígitos)
- Validación de email
- Campos requeridos

## 🚀 Cómo Desplegar en Netlify

### Paso 1: Crear una cuenta en Netlify
1. Ve a [netlify.com](https://www.netlify.com/)
2. Haz clic en "Sign up" y crea tu cuenta

### Paso 2: Subir los archivos
**Opción A: Arrastra y suelta (Más fácil)**
1. En el dashboard de Netlify, arrastra la carpeta "pagina pago" a la zona de carga
2. Netlify reconocerá automáticamente los formularios

**Opción B: Git (Recomendado)**
1. Sube los archivos a un repositorio de GitHub
2. En Netlify, ve a "New site from Git"
3. Selecciona tu repositorio

### Paso 3: Configurar Netlify Forms (Automático)
Netlify detectará automáticamente los formularios gracias a:
```html
<form name="pago-consulta" method="POST" data-netlify="true">
<form name="contacto" method="POST" data-netlify="true">
```

### Paso 4: Verificar que los formularios funcionen
1. Una vez desplegado, visita tu sitio web
2. Completa los formularios de prueba
3. Ve al dashboard de Netlify → "Forms" para ver los datos enviados

## 📁 Estructura de Archivos

```
pagina pago/
├── index.html          # Página principal con ambos formularios
├── styles.css          # Estilos profesionales
├── script.js           # Validación y lógica de formularios
└── README.md           # Este archivo
```

## 🔒 Consideraciones de Seguridad

⚠️ **IMPORTANTE**: Este formulario es para DEMOSTRACIÓN.

Para un sitio en producción que maneje pagos reales:
1. **Nunca** pidas números de tarjeta en formularios HTML
2. Usa procesadores de pago como **Stripe** o **PayPal**
3. Implementa HTTPS (Netlify lo hace automáticamente)
4. Cumple con estándares PCI DSS

Para uso educativo/demostración, el formulario está completamente funcional.

## 🎨 Personalización

### Cambiar colores
En `styles.css`, modifica:
- `#1a3a52` - Azul oscuro (primario)
- `#2d5f8d` - Azul gradiente
- `#ffd700` - Dorado (acentos)

### Agregar más opciones de consulta
En `index.html`, línea ~88, agrega opciones en el select:
```html
<option value="Tu Nueva Opción">Tu Nueva Opción</option>
```

### Cambiar el precio
En `index.html`, busca "$99.99" y reemplázalo con el precio deseado.

## 📧 Recibir Notificaciones por Email

1. En el dashboard de Netlify, ve a tu sitio
2. Ve a **Integrations** → **Add integrations**
3. Busca **Email notifications**
4. Configura para recibir alertas cuando se envíen formularios

## 🛠️ Archivos de Configuración (Opcional)

Si deseas más control, crea un archivo `netlify.toml`:

```toml
[build]
  command = "echo 'Building...'"
  publish = "."

[[redirects]]
  from = "/*"
  to = "index.html"
  status = 200
```

## 📱 Pruebas de Formularios

Datos de prueba para verificar que funciona:
- **Nombre**: Juan
- **Apellido**: Pérez
- **Email**: juan@example.com
- **Tarjeta**: 4111 1111 1111 1111 (número de prueba)
- **Vencimiento**: 12/25
- **CVV**: 123

## 🐛 Solucionar Problemas

**El formulario no se envía:**
- Verifica que `data-netlify="true"` esté en el formulario
- Revisa que todos los campos requeridos tengan `required`

**Los datos no llegan a Netlify:**
- Despliega el sitio nuevamente después de hacer cambios
- Revisa en Netlify Dashboard → Forms

**Error de validación de tarjeta:**
- Asegúrate de que el número tenga entre 13 y 19 dígitos
- La fecha debe estar en formato MM/YY
- El CVV debe tener 3 o 4 dígitos

## 📞 Soporte

Para más ayuda:
- [Documentación de Netlify Forms](https://docs.netlify.com/forms/overview/)
- [Netlify Community](https://community.netlify.com/)

---

**¡Tu página está lista para desplegar! 🚀**