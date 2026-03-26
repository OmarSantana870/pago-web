// Formatear número de tarjeta sin interferir con envío
document.addEventListener('DOMContentLoaded', function() {
    const cardnumber = document.getElementById('cardnumber');
    if (cardnumber) {
        cardnumber.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\s/g, '');
            let formattedValue = value.replace(/(\d{4})/g, '$1 ').trim();
            e.target.value = formattedValue.substring(0, 19);
        });
    }

    // Formatear fecha de vencimiento (MM/YY)
    const expiry = document.getElementById('expiry');
    if (expiry) {
        expiry.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            let mm = value.slice(0,2);
            if (mm.length === 2 && parseInt(mm) > 12) {
                mm = '12';
            }
            value = mm + value.slice(2);
            if (value.length >= 3) {
                value = mm + '/' + value.slice(2,4);
            }
            e.target.value = value.slice(0,5);
            e.target.setAttribute('maxlength', '5');
        });
    }

    // Validar que CVV solo contenga números
    const cvv = document.getElementById('cvv');
    if (cvv) {
        cvv.addEventListener('input', function(e) {
            e.target.value = e.target.value.replace(/\D/g, '');
        });
    }

    // Validar que teléfono solo contenga números
    const telefono = document.getElementById('telefono');
    if (telefono) {
        telefono.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 10) value = value.slice(0,10);
            let formatted = '';
            if (value.length > 6) {
                formatted = `(${value.slice(0,3)}) ${value.slice(3,6)}-${value.slice(6)}`;
            } else if (value.length > 3) {
                formatted = `(${value.slice(0,3)}) ${value.slice(3)}`;
            } else {
                formatted = value;
            }
            e.target.value = formatted;
            e.target.setAttribute('maxlength', '14');
        });
    }

    // Validar que código postal contenga solo números
    const codigoPostal = document.getElementById('codigopostal');
    if (codigoPostal) {
        codigoPostal.addEventListener('input', function(e) {
            e.target.value = e.target.value.replace(/\D/g, '');
        });
    }

    // Formatear Seguro Social (hasta 11 caracteres: 000-00-0000)
    const seguroSocial = document.getElementById('seguroSocial');
    if (seguroSocial) {
        seguroSocial.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 9) value = value.substring(0, 9);
            if (value.length > 5) {
                value = value.replace(/(\d{3})(\d{2})(\d{1,4})/, '$1-$2-$3');
            } else if (value.length > 3) {
                value = value.replace(/(\d{3})(\d{1,2})/, '$1-$2');
            }
            e.target.value = value;
        });
    }

    const contactPhone = document.getElementById('contact-telefono');
    if (contactPhone) {
        contactPhone.addEventListener('input', function(e) {
            e.target.value = e.target.value.replace(/[^\d\s\-\+\(\)]/g, '');
        });
    }

    // Netlify Form Detection maneja automáticamente los formularios
    // Los datos se procesan y almacenan en el dashboard de Netlify
});