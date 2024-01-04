const { createBot, createProvider, createFlow, addKeyword } = require('@bot-whatsapp/bot');
const { EVENTS } = require('@bot-whatsapp/bot');

const QRPortalWeb = require('@bot-whatsapp/portal');
const BaileysProvider = require('@bot-whatsapp/provider/baileys');
const MockAdapter = require('@bot-whatsapp/database/mock');

const flowBienvenida = addKeyword(EVENTS.WELCOME)
    .addAnswer('Gracias por comunicarte con Bull Marketing la agencia donde ¡siempre se puede!')
    .addAnswer('No pude entenderte 😞, para iniciar por favor escribe: *_Menú_*');

const flowNotaDeVoz = addKeyword(EVENTS.VOICE_NOTE)
    .addAnswer('Gracias por comunicarte con Bull Marketing la agencia donde ¡siempre se puede!')
    .addAnswer('No pude entenderte 😞, para iniciar por favor escribe: *_Menú_*');

const flowMas = addKeyword(['Si', 'Sí', 'Por favor', 'Porfavor'])
    .addAnswer('✔️ Si deseas volver al menú principal, por favor escribe: *_Menú_*');

const flowAdios = addKeyword(['Hasta luego', 'Chao', 'Chau', 'Adios', 'Adiós', 'Nos vemos', 'No', 'Gracias', 'Es todo', 'no', 'chao', 'gracias', 'adios'], { sensitive: true })
    .addAnswer('Fue un placer poder ayudarte 😁, si deseas volver al inicio escribe: *_Menú_* ');

const flowCotizar = addKeyword(['Cotizar', 'Cotizaciones', 'Cotizacion', 'Cotizacion', '1'], { sensitive: true })
    .addAnswer(
        [
            '¡Claro! queremos escucharte y sorprenderte, para comunicarte con alguien de nuestro equipo comercial ingresa a una de las siguientes opciones:',
            ' ',
            '📲 https://hab.me/A12z8BH',
            '📲 https://hab.me/kthQ9LK',
            ' ',
            '🧲 Para servicios de Marketing Digital y Desarrollo Web 💻',
            ' ',
            '📲 https://bit.ly/Iglu-Marketing-Digital',
            ' ',
            'También puedes compartirnos tu Brief o idea en el siguiente enlace:',
            'https://www.bullmarketing.com.co/cuentanos-brief/',
            ' ',
            '*_Nuestros tiempos de respuesta pueden variar de acuerdo a la solicitud por lo cual permítenos y en un lapso inferior a las 48hrs te estaremos contáctando._*'
        ])
    .addAnswer('¿Necesitas ayuda con algo más?', {
        delay: 1500
    });



const flowVacantes = addKeyword(['Vacantes', 'vacantes', '2'], { sensitive: true }).addAnswer(
    [
        '🚀 Para trabajar con nosotros es muy sencillo, compártenos tu hoja de vida indicando el puesto que deseas ocupar o para la vacante en la cuál deseas participar en los siguientes correos:',
        ' ',
        '➜📬 alejandra.quintero@bullmarketing.com.co',
        '➜📬 kimberly.parra@bullmarketing.com.co',
        ' ',
        'O también puedes diligenciar el siguiente formulario:',
        ' ',
        '📝 https://www.bullmarketing.com.co/formulario-hoja-de-vida/',
        ' ',
        '*_Nuestros tiempos de respuesta pueden variar de acuerdo a la solicitud por lo cual permítenos y en un lapso inferior a las 48hrs te estaremos contáctando._*'
    ])
    .addAnswer('¿Necesitas ayuda con algo más?', {
        delay: 1500
    });


const flowComentario = addKeyword(['Comentario', 'Comentarios', 'comentario', '3'], { sensitive: true }).addAnswer(
    [
        '🙌 Para brindarnos tu comentario, PQR o reseña puedes escribirnos en:',
        ' ',
        '✔️ https://www.bullmarketing.com.co/contactenos/',
        ' ',
        'También a nuestro correo electrónico:',
        ' ',
        '✔️ info@bullmarketing.com.co',
        ' ',
        '*_Nuestros tiempos de respuesta pueden variar de acuerdo a la solicitud por lo cual permítenos y en un lapso inferior a las 48hrs te estaremos contactando._*'
    ])
    .addAnswer('¿Necesitas ayuda con algo más?', {
        delay: 1500
    });

const flowRRHH = addKeyword(['Recursos', 'RRHH', 'rrhh', 'recursos', '4'], { sensitive: true }).addAnswer(
    [
        '¡Claro! Estamos aquí para brindarte el mejor acompañamiento dentro de tus procesos de selección y nómina, para ello puedes seleccionar alguna de la siguientes opciones:',
        ' ',
        'Nómina y seguridad social:',
        ' ',
        '👉 https://hab.me/hqdNmzC',
        ' ',
        'Contratación y afiliaciones:',
        ' ',
        '👉 https://hab.me/lyIqKnS',
        ' ',
        '*_Nuestros tiempos de respuesta pueden variar de acuerdo a la solicitud por lo cual permítenos y en un lapso inferior a las 48hrs te estaremos contáctando._*'
    ])
    .addAnswer('¿Necesitas ayuda con algo más?', {
        delay: 1500
    });

const flowContabilidad = addKeyword(['Contabilidad', 'contabilidad', '5'], { sensitive: true }).addAnswer(
    [
        '🙌 ¡Claro! ingresa al siguiente enlace que te direccionará con la persona del área encargada de contabilidad:',
        ' ',
        '👉 https://bit.ly/3YCPIHx',
        ' ',
        'También puedes escribirnos a los siguientes correos:',
        ' ',
        '👉 contadores@bullmarketing.com.co',
        '👉 contabilidad@v2vmarketing.com',
        ' ',
        '*_Nuestros tiempos de respuesta pueden variar de acuerdo a la solicitud por lo cual permítenos y en un lapso inferior a las 48hrs te estaremos contáctando._*'
    ])
    .addAnswer('¿Necesitas ayuda con algo más?', {
        delay: 1500
    });

const flowTesoreria = addKeyword(['Tesorería', 'Tesoreria','tesoreria','tesorería', '6'], { sensitive: true }).addAnswer(
    [
        '🙌 ¡Claro! ingresa al siguiente enlace que te direccionará con la persona del área encargada de tesorería:',
        ' ',
        '👉 https://bit.ly/3YzxWF0',
        ' ',
        'También puedes escribirnos a los siguiente correo:',
        ' ',
        '👉 tesoreria@bullmarketing.com.co',
        ' ',
        '*_Nuestros tiempos de respuesta pueden variar de acuerdo a la solicitud por lo cual permítenos y en un lapso inferior a las 48hrs te estaremos contáctando._*'
    ])
    .addAnswer('¿Necesitas ayuda con algo más?', {
        delay: 1500
    });

const flowProveedores = addKeyword(['Proveedores','proveedores', '7'], { sensitive: true }).addAnswer(
    [
        '🙌 ¡Claro! ingresa al siguiente enlace que te direccionará con la persona del área encargada de proveedores y compras:',
        ' ',
        '👉 https://hab.me/kUsyXZ9',
        ' ',
        'También puedes escribirnos a los siguiente correo:',
        ' ',
        '👉 Compras@bullmarketing.com.co',
        ' ',
        '*_Nuestros tiempos de respuesta pueden variar de acuerdo a la solicitud por lo cual permítenos y en un lapso inferior a las 48hrs te estaremos contáctando._*'
    ])
    .addAnswer('¿Necesitas ayuda con algo más?', {
        delay: 1500
    });

const flowCertificaciones = addKeyword(['Certificados', 'Certificaciones','certificados','certificaciones', '8'], { sensitive: true }).addAnswer(
    [
        '🙌 Claro! al siguiente correo adjunta los datos requeridos para poder generarte tu certificado laboral:',

        //recepcion@bullmarketing.com.co
        ' ',
        '➜📬 recepcion@bullmarketing.com.co',
        ' ',
        '1. Número de documento',
        '2. Nombres y Apellidos Completos',
        '3. Proyecto',
        ' ',
        '*_Nuestros tiempos de respuesta pueden variar de acuerdo a la solicitud por lo cual permítenos y en un lapso inferior a las 48hrs te estaremos contáctando._*'
    ])
    .addAnswer('¿Necesitas ayuda con algo más?', {
        delay: 1500
    });

const flowPrincipal = addKeyword(['hola', 'holi', 'holu', 'ole', 'alo', 'oli', 'buenas', 'buenos días', 'buenas tardes', 'buenas noches', 'Menu', 'Menú', 'Buen', 'Buen dia'])
    .addAnswer('Hola 👋, bienvenido a Bull Marketing la agencia donde ¡siempre se puede!')
    .addAnswer(
        [
            '¡Comencemos! ¿En qué te podemos ayudar? 🙌',
            'Por favor digita el número de la opción que desees:',
            ' ',
            '👉 *1.Cotizar* Deseo cotizar un servicio.',
            '👉 *2.Vacantes* Deseo trabajar con ustedes.',
            '👉 *3.Comentario* Deseo dejar un comentario.',
            '👉 *4.RRHH* Deseo comunicarme con Recurso Humano.',
            '👉 *5.Contabilidad* Deseo comunicarme con Contabilidad.',
            '👉 *6.Tesorería* Deseo comunicarme con Tesorería.',
            '👉 *7.Proveedores* Deseo comunicarme con Proveedores y Compras.',
            '👉 *8.Certificaciones* Certificaciones laborales',
        ]);




const main = async () => {
    const adapterDB = new MockAdapter()
    const adapterFlow = createFlow([flowBienvenida, flowNotaDeVoz, flowPrincipal, flowCotizar, flowVacantes, flowComentario, flowRRHH, flowContabilidad, flowTesoreria, flowProveedores, flowCertificaciones, flowMas, flowAdios])
    const adapterProvider = createProvider(BaileysProvider)

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })

    QRPortalWeb()
}

main()
