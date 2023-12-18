const { createBot, createProvider, createFlow, addKeyword } = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')

const flowSecundario = addKeyword(['Recepción', 'Recepcion', 'agente', 'Persona']).addAnswer(['En un momento nos pondremos en contacto'])

const flowCotizar = addKeyword([{ keyword: '1', exact: true }, 'cotizar', 'cotización', 'propuesta',]).addAnswer(
    [
        '¡Claro! queremos escucharte y sorprenderte, para comunicarte con alguien de nuestro equipo comercial ingresa a una de las siguientes opciones:',
        ' ',
        '📲 https://hab.me/A12z8BH',
        '📲 https://hab.me/kthQ9LK',
        ' ',
        '🧲 Para servicios de Marketing Digital y Desarrollo Web 💻',
        ' ',
        '📲 https://hab.me/dheZya1',
        ' ',
        'También puedes compartirnos tu Brief o idea en el siguiente enlace:',
        'https://www.bullmarketing.com.co/cuentanos-brief/',
        ' ',
        '*_Nuestros tiempos de respuesta pueden variar de acuerdo a la solicitud por lo cual permitenos y en un lapsus inferior a las 48hrs te estaremos contáctando._*',
        '\n*Recepción* Para contacto con una persona.',
    ],
    null,
    null,
    [flowSecundario]
)

const flowVacantes = addKeyword([{ keyword: '2', exact: true }, 'trabajar', 'vacantes', 'ofertas']).addAnswer(
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
        '*_Nuestros tiempos de respuesta pueden variar de acuerdo a la solicitud por lo cual permitenos y en un lapsus inferior a las 48hrs te estaremos contáctando._*',
        ' ',
        '\n*Recepción* Para contacto con una persona.',
    ],
    null,
    null,
    [flowSecundario]
)

const flowComentario = addKeyword([{ keyword: '3', exact: true }, 'comentario', 'queja', 'PQR']).addAnswer(
    [
        '🙌 Para brindarnos tu comentario, PQR o reseña puedes escribirnos en:',
        ' ',
        '✔️ https://www.bullmarketing.com.co/contactenos/',
        ' ',
        'También a nuestro correo electrónico:',
        ' ',
        '✔️ info@bullmarketing.com.co',
        ' ',
        '*_Nuestros tiempos de respuesta pueden variar de acuerdo a la solicitud por lo cual permitenos y en un lapsus inferior a las 48hrs te estaremos contáctando._*',
        '\n*Recepción* Para contacto con una persona.',
    ],
    null,
    null,
    [flowSecundario]
)

const flowRRHH = addKeyword([{ keyword: '4', exact: true }, 'RRHH', 'recurso humano', 'recursos humanos', 'talento humano', 'contratación', 'contratacion']).addAnswer(
    [
        '¡Claro! Estamos aquí para brindarte el mejor acompañamiento dentro de tus procesos de selección y nómina, para ello puedes seleccionar alguna de la siguientes opciones:',
        ' ',
        'Nómina y seguridad social:',
        ' ',
        '☞ https://hab.me/hqdNmzC',
        ' ',
        'Contratación y afiliaciones:',
        ' ',
        '☞ https://hab.me/lyIqKnS',
        ' ',
        '*_Nuestros tiempos de respuesta pueden variar de acuerdo a la solicitud por lo cual permitenos y en un lapsus inferior a las 48hrs te estaremos contáctando._*',
        ' ',
        '\n*Recepción* Para contacto con una persona.',
    ],
    null,
    null,
    [flowSecundario]
)

const flowContabilidad = addKeyword([{ keyword: '5', exact: true }, 'Contabilidad', 'Contable']).addAnswer(
    [
        '🙌 ¡Claro! ingresa al siguiente enlace que te direccionará con la persona del área encargada de contabilidad:',
        ' ',
        '☞ https://bit.ly/3YCPIHx',
        ' ',
        'También puedes escribirnos a los siguientes correos:',
        ' ',
        '☞ contadores@bullmarketing.com.co',
        '☞ contabilidad@v2vmarketing.com',
        ' ',
        '*_Nuestros tiempos de respuesta pueden variar de acuerdo a la solicitud por lo cual permitenos y en un lapsus inferior a las 48hrs te estaremos contáctando._*',
        '\n*Recepción* Para contacto con una persona.',
    ],
    null,
    null,
    [flowSecundario]
)

const flowTesoreria = addKeyword([{ keyword: '6', exact: true }, 'Tesorería']).addAnswer(
    [
        '🙌 ¡Claro! ingresa al siguiente enlace que te direccionará con la persona del área encargada de tesorería:',
        ' ',
        '☞ https://bit.ly/3YzxWF0',
        ' ',
        'También puedes escribirnos a los siguiente correo:',
        ' ',
        '☞ tesoreria@bullmarketing.com.co',
        ' ',
        '*_Nuestros tiempos de respuesta pueden variar de acuerdo a la solicitud por lo cual permitenos y en un lapsus inferior a las 48hrs te estaremos contáctando._*',
        '\n*Recepción* Para contacto con una persona.',
    ],
    null,
    null,
    [flowSecundario]
)

const flowProveedores = addKeyword([{ keyword: '7', exact: true }, 'Proveedores', 'Proveedor', 'Compras', 'Controller']).addAnswer(
    [
        '🙌 ¡Claro! ingresa al siguiente enlace que te direccionará con la persona del área encargada de proveedores y compras:',
        ' ',
        '☞ https://hab.me/kUsyXZ9',
        ' ',
        'También puedes escribirnos a los siguiente correo:',
        ' ',
        '☞ Compras@bullmarketing.com.co',
        ' ',
        '*_Nuestros tiempos de respuesta pueden variar de acuerdo a la solicitud por lo cual permitenos y en un lapsus inferior a las 48hrs te estaremos contáctando._*',
        '\n*Recepción* Para contacto con una persona.',
    ],
    null,
    null,
    [flowSecundario]
)

const flowCertificaciones = addKeyword([{ keyword: '8', exact: true }, 'Certificaciones', 'Certificado laboral', 'Experiencia laboral']).addAnswer(
    [
        '🙌 Claro! permítenos gestionar tu solicitud de *certificación laboral* para ello compártenos:',
        ' ',
        '1. Número de documento',
        '2. Nombres y Apellidos Completos',
        '3. Correo electrónico',
        '4. Proyecto',
        ' ',
        '*_Nuestros tiempos de respuesta pueden variar de acuerdo a la solicitud por lo cual permitenos y en un lapsus inferior a las 48hrs te estaremos contáctando._*',
        '\n*Recepción* Para contacto con una persona.',
    ],
    null,
    null,
    [flowSecundario]

)

const flowPrincipal = addKeyword(['hola', 'holi', 'holu', 'ole', 'alo', 'oli', 'buenos días', 'buenas tardes', 'buenas noches', 'Menu'])
    .addAnswer('Hola 👋, bienvenido a Bull Marketing la agencia donde ¡siempre se puede!')
    .addAnswer('Para brindarte un servicio más personalizado compartenos los siguientes datos:')
    .addAnswer('¿Cúal es tu nombre completo?', { capture: true }, (ctx) => {
        console.log('Mensaje entrante: ', ctx.body)
    })
    .addAnswer('¿Cúal es tu número telefónico?', { capture: true }, (ctx) => {
        console.log('Mensaje entrante: ', ctx.body)
    })
    .addAnswer('¿Cúal es tu correo electrónico?', { capture: true }, (ctx, { fallBack }) => {

        if (!ctx.body.includes('@'))
            return fallBack()
        console.log('Mensaje entrante: ', ctx.body)
    })
    .addAnswer(
        [
            {
                media: 'https://www.bullmarketing.com.co/wp-content/uploads/2022/09/Artboard-18-BULL-PARRILLA.jpg',
            },
            '¡Comencemos! ¿En que te podemos ayudar? 🙌',
            'Estas son nuestras opciones:',
            ' ',
            '👉 *1.Cotizar* Deseo cotizar un servicio.',
            '👉 *2.Vacantes* Deseo trabajar con ustedes.',
            '👉 *3.Comentario* Deseo dejar un comentario.',
            '👉 *4.RRHH* Deseo comunicarme con Recurso Humano.',
            '👉 *5.Contabilidad* Deseo comunicarme con Contabilidad.',
            '👉 *6.Tesorería* Deseo comunicarme con Tesorería.',
            '👉 *7.Proveedores* Deseo comunicarme con Proveedores y Compras.',
            '👉 *8.Certificaciones* Certificaciones laborales',
        ],
        null,
        null,
        [flowCotizar, flowVacantes, flowComentario, flowRRHH, flowContabilidad, flowTesoreria, flowProveedores, flowCertificaciones]
    )



const main = async () => {
    const adapterDB = new MockAdapter()
    const adapterFlow = createFlow([flowPrincipal])
    const adapterProvider = createProvider(BaileysProvider)

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })

    QRPortalWeb()
}

main()
