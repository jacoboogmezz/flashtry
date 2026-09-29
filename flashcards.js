/**
 * Flashcards de Economía
 * Datos embebidos desde flashcards.csv
 */

const FLASHCARDS = [
    { q: "¿Qué ciencia estudia los recursos y el consumo para satisfacer las necesidades?", a: "La economía." },
    { q: "¿De qué palabra griega proviene el término 'economía'?", a: "Oikonomía." },
    { q: "En la etimología de economía, ¿qué significa la palabra griega 'Oikos'?", a: "Patrimonio, casa u hogar." },
    { q: "En la etimología de economía, ¿qué significa la palabra griega 'Nomía'?", a: "Leyes, administración o gestión." },
    { q: "¿Qué rama de la economía estudia la economía de una zona, país o grupo de países?", a: "La macroeconomía." },
    { q: "Menciona tres elementos que considera la macroeconomía para su estudio.", a: "Renta nacional, inversiones e importaciones." },
    { q: "¿Qué registro de las operaciones de un país con otros es objeto de estudio de la macroeconomía?", a: "La balanza de pagos." },
    { q: "Además de la producción, ¿qué otros factores sobre la calidad de vida de las personas estudia la macroeconomía?", a: "Lo que ganan las personas y los precios." },
    { q: "¿Qué es la microeconomía?", a: "El estudio del comportamiento individual de los agentes económicos." },
    { q: "En microeconomía, se suelen estudiar los productos que fabrican las empresas y el _____ de estos.", a: "Consumo." },
    { q: "¿Cuáles son los tres agentes económicos principales?", a: "Las familias, las empresas y el estado." },
    { q: "¿De qué funciones se encargan las familias en la economía?", a: "Consumir, ahorrar y producir trabajo." },
    { q: "¿Cuál es el fin principal de las empresas al emplear factores de producción?", a: "Crear y aumentar el valor y la prosperidad de los bienes y servicios." },
    { q: "¿Qué es una empresa pública?", a: "Aquella que pertenece al estado o administración pública." },
    { q: "Ejemplos de empresas públicas según el texto.", a: "Renfe y Hacienda." },
    { q: "¿Qué es una empresa privada?", a: "Aquella propiedad de particulares, como autónomos o PYMES." },
    { q: "¿Qué es una empresa mixta?", a: "Aquella que combina capital público y privado." },
    { q: "¿Qué ejemplo de empresa mixta se menciona en el texto?", a: "Colegios concertados." },
    { q: "¿Qué agente económico posee la capacidad de controlar la oferta y la demanda?", a: "El estado." },
    { q: "¿Cómo influye el estado en las actividades económicas mediante los tributos?", a: "Gestionando el costo de los impuestos." },
    { q: "Además de proponer leyes, ¿qué otra acción reguladora realiza el estado sobre los bienes?", a: "Regula los precios." },
    { q: "¿Qué son los factores de producción?", a: "Recursos básicos utilizados para crear bienes y servicios que satisfacen necesidades." },
    { q: "En economía, ¿a qué se refiere el factor 'tierra'?", a: "Al espacio en el que se produce la actividad económica." },
    { q: "Concepto: Capital", a: "Medios obtenidos y elaborados para ser usados posteriormente en el proceso productivo." },
    { q: "En los factores de producción, ¿qué comprende el 'trabajo'?", a: "Las facultades físicas e intelectuales del ser humano." },
    { q: "¿Cuál es la función del empresario respecto a los demás factores de producción?", a: "Coordinar los demás factores de producción." },
    { q: "¿Quién es el encargado de administrar, organizar y dirigir la empresa?", a: "El empresario." },
    { q: "¿Qué define a un emprendedor según el texto?", a: "Persona capaz de transformar una idea en algo concreto asumiendo riesgos." },
    { q: "¿Qué es la 'iniciativa emprendedora'?", a: "La acción y capacidad de tener una idea y hacerla realidad." },
    { q: "¿Cuál es el objetivo principal que busca el empresario?", a: "El beneficio de la empresa." },
    { q: "¿Qué es una empresa?", a: "Organización creada para ofrecer productos y servicios y obtener beneficios." },
    { q: "¿Qué concepto define la cantidad de un bien que las empresas pueden ofrecer?", a: "La oferta." },
    { q: "¿Qué gráfico muestra la relación entre el precio y la cantidad ofrecida?", a: "La curva de la oferta." },
    { q: "¿Qué es la demanda?", a: "La cantidad de un bien que los compradores quieren adquirir." },
    { q: "¿Qué gráfico muestra la relación entre el precio y la cantidad que los compradores desean?", a: "La curva de la demanda." },
    { q: "¿En cuántos sectores se divide tradicionalmente la economía?", a: "En tres sectores (primario, secundario y terciario)." },
    { q: "¿Qué actividades integran el sector primario?", a: "Actividades dedicadas a la obtención de recursos naturales." },
    { q: "Menciona tres ejemplos de actividades del sector primario.", a: "Agricultura, ganadería y pesca." },
    { q: "¿A qué sector económico pertenecen la minería y la silvicultura?", a: "Sector primario." },
    { q: "¿Cuál es la función del sector secundario?", a: "Transformar las materias primas en productos de consumo." },
    { q: "Menciona tres ejemplos de actividades del sector secundario.", a: "Artesanía, obtención de fuentes de energía e industria." },
    { q: "¿En qué consiste el sector terciario?", a: "En trabajos que distribuyen y ofrecen bienes y servicios a las personas." },
    { q: "Menciona tres ejemplos de sectores de servicios dentro del sector terciario.", a: "Enseñanza, medicina y hostelería." },
    { q: "¿A qué sector económico pertenecen el transporte y el ocio?", a: "Sector terciario." },
    { q: "¿Qué es la inflación?", a: "La subida generalizada de los precios de la mayoría de productos y servicios." },
    { q: "Concepto: Mercado", a: "Lugar donde se compran y se venden bienes y servicios." },
    { q: "¿Qué es la renta per cápita?", a: "El ingreso medio que corresponde a las personas de un país." },
    { q: "¿Qué significa importar?", a: "Comprar productos a otros países." },
    { q: "¿Qué significa exportar?", a: "Vender productos a otros países." },
    { q: "¿Qué es la balanza de pagos?", a: "Registros de las operaciones de un país con otros." },
    { q: "¿Qué son los impuestos?", a: "Pagos obligatorios al estado para contribuir a la prosperidad del país." },
    { q: "¿Quiénes deben realizar el pago de impuestos según el texto?", a: "Personas y empresas." },
    { q: "¿Qué es una persona física en el contexto económico?", a: "Individuo residente de un país con derechos y obligaciones." },
    { q: "¿Qué es una persona jurídica?", a: "Individuo o entidad (como una empresa) con derechos y obligaciones." },
    { q: "¿Qué significan las siglas IVA?", a: "Impuesto sobre Valor Añadido." },
    { q: "¿Qué significan las siglas NIF?", a: "Número de Identificación Fiscal." },
    { q: "¿Qué significan las siglas IBI?", a: "Impuesto sobre Bienes Inmuebles." },
    { q: "¿Qué significan las siglas BOE?", a: "Boletín Oficial del Estado." },
    { q: "¿Cuál es la principal diferencia entre microeconomía y macroeconomía?", a: "La magnitud y el tamaño del grupo de estudio (individual vs. general)." },
    { q: "En la economía, las familias son consideradas consumidoras y, al mismo tiempo, _____.", a: "Productoras de trabajo." },
    { q: "¿Cómo se clasifican las empresas según su titularidad en el texto?", a: "Públicas, privadas o mixtas." },
    { q: "¿Qué factor de producción se encarga de administrar y dirigir la empresa?", a: "El empresario." },
    { q: "¿Qué diferencia al emprendedor del empresario según la gestión?", a: "El emprendedor transforma una idea en realidad, mientras el empresario dirige y busca beneficio." },
    { q: "Verdadero o Falso: La oferta es establecida únicamente por los consumidores.", a: "Falso (es establecida por las empresas según su capacidad)." },
    { q: "Verdadero o Falso: La demanda es la cantidad de un bien que los compradores quieren.", a: "Verdadero." },
    { q: "¿Cuál es el sector económico encargado de la obtención directa de recursos de la naturaleza?", a: "Sector primario." },
    { q: "¿A qué sector pertenecen las actividades de artesanía?", a: "Sector secundario." },
    { q: "¿Qué fenómeno económico provoca que el coste de vida sea más caro?", a: "La inflación." },
    { q: "¿Cuál es el factor de producción que engloba las facultades intelectuales?", a: "El trabajo." },
    { q: "Las PYMES son un ejemplo de empresa de tipo _____.", a: "Privada." },
    { q: "El estado interviene en la economía proponiendo _____ y regulando precios.", a: "Leyes." },
    { q: "¿Cómo se llama el ingreso medio por persona en un país?", a: "Renta per cápita." },
    { q: "¿Qué documento oficial publica las normas y leyes en España?", a: "El BOE (Boletín Oficial del Estado)." },
    { q: "¿Qué impuesto se aplica específicamente a los bienes inmuebles?", a: "IBI." },
    { q: "¿Qué agente económico consume y ahorra?", a: "Las familias." },
    { q: "¿Qué factor de producción incluye las herramientas y maquinaria ya elaboradas?", a: "El capital." },
    { q: "La capacidad de transformar una idea en algo concreto define al _____.", a: "Emprendedor." },
    { q: "¿Qué sector incluye la medicina y la enseñanza?", a: "Sector terciario." },
    { q: "La relación entre precio y cantidad en la oferta se analiza mediante la _____.", a: "Curva de la demanda (según el texto, aunque se refiere al gráfico de análisis)." },
    { q: "¿Quién coordina los factores de producción en una empresa?", a: "El empresario." },
    { q: "La balanza de pagos registra las operaciones de un país con _____.", a: "Otros países." },
    { q: "Los autónomos son un ejemplo de empresa _____.", a: "Privada." },
    { q: "La silvicultura es una actividad perteneciente al sector _____.", a: "Primario." },
    { q: "El valor del dinero y la renta nacional son objetos de estudio de la _____.", a: "Macroeconomía." },
    { q: "¿Qué término describe a una entidad con derechos y obligaciones como empresa?", a: "Persona jurídica." }
];

// ===== STATE =====
let cards = [...FLASHCARDS];
let currentIndex = 0;
let isFlipped = false;
let viewedCount = 0;
const viewedSet = new Set();

// ===== DOM REFS =====
const cardEl = document.getElementById('card');
const questionText = document.getElementById('questionText');
const answerText = document.getElementById('answerText');
const cardCounter = document.getElementById('cardCounter');
const progressFill = document.getElementById('progressFill');
const progressText = document.getElementById('progressText');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const flipBtn = document.getElementById('flipBtn');
const shuffleBtn = document.getElementById('shuffleBtn');
const resetBtn = document.getElementById('resetBtn');
const themeToggle = document.getElementById('themeToggle');

// ===== INIT =====
function init() {
    initTheme();
    renderCard();
    updateProgress();

    cardEl.addEventListener('click', flipCard);
    flipBtn.addEventListener('click', flipCard);
    prevBtn.addEventListener('click', prevCard);
    nextBtn.addEventListener('click', nextCard);
    shuffleBtn.addEventListener('click', shuffleCards);
    resetBtn.addEventListener('click', resetProgress);
    themeToggle.addEventListener('click', toggleTheme);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') prevCard();
        if (e.key === 'ArrowRight') nextCard();
        if (e.key === ' ' || e.key === 'Enter') {
            e.preventDefault();
            flipCard();
        }
    });
}

// ===== THEME =====
function initTheme() {
    const saved = localStorage.getItem('flashcards-theme');
    if (saved) {
        document.documentElement.setAttribute('data-theme', saved);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
}

function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('flashcards-theme', next);
}

// ===== RENDER =====
function renderCard() {
    if (cards.length === 0) return;

    const card = cards[currentIndex];
    questionText.textContent = card.q;
    answerText.textContent = card.a;

    // Reset flip state
    isFlipped = false;
    cardEl.classList.remove('flipped');

    // Animate text
    questionText.style.animation = 'none';
    answerText.style.animation = 'none';
    void questionText.offsetHeight;
    void answerText.offsetHeight;
    questionText.style.animation = '';
    answerText.style.animation = '';

    // Update counter
    cardCounter.textContent = `${currentIndex + 1} / ${cards.length}`;

    // Track viewed
    viewedSet.add(currentIndex);
    updateProgress();

    // Update nav buttons
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === cards.length - 1;
}

function updateProgress() {
    viewedCount = viewedSet.size;
    const total = cards.length;
    const pct = total > 0 ? (viewedCount / total) *
