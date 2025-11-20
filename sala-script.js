// ========================================
// SALA-SCRIPT.JS - Interações das páginas de sala
// ========================================

// Dados detalhados dos projetos (lista manual completa)
const projectsData = {
    // Sala 1º Ano
    1: {
        title: "Energia Solar Sustentável",
        category: "Física",
        team: ["Ana Paula Silva", "Carlos Eduardo Santos", "Mariana Oliveira"],
        pitch: "Auditório Principal - 10h30",
        fullDescription: `
            <p><strong>Objetivo:</strong> Desenvolver um sistema acessível de captação de energia solar 
            para pequenas residências, reduzindo custos e promovendo sustentabilidade.</p>
            
            <p><strong>Metodologia:</strong> Utilizamos painéis solares de baixo custo e criamos 
            um sistema de armazenamento eficiente com baterias recicláveis.</p>
            
            <p><strong>Resultados Esperados:</strong> Redução de até 40% nos custos de energia 
            elétrica e diminuição da pegada de carbono das residências.</p>
            
            <p><strong>Materiais Utilizados:</strong> Painéis fotovoltaicos, baterias, inversores 
            de corrente, controladores de carga.</p>
        `,
        images: [
            { url: 'images/9ano/energia-1.jpg', caption: 'Montagem do painel solar' },
            { url: 'images/9ano/energia-2.jpg', caption: 'Equipe apresentando o protótipo' },
            { url: 'images/9ano/energia-3.jpg', caption: 'Teste em bancada' }
        ]
    },
    2: {
        title: "Robótica e Automação",
        category: "Tecnologia",
        team: ["Pedro Henrique Costa", "Julia Fernandes", "Lucas Almeida", "Beatriz Rodrigues"],
        pitch: "Sala de Tecnologia - 14h00",
        fullDescription: `
            <p><strong>Objetivo:</strong> Criar um robô autônomo capaz de auxiliar em tarefas 
            domésticas simples, utilizando tecnologia acessível.</p>
            
            <p><strong>Tecnologias:</strong> Arduino, sensores ultrassônicos, motores servo, 
            programação em C++.</p>
            
            <p><strong>Funcionalidades:</strong> O robô pode navegar autonomamente, detectar 
            obstáculos e realizar tarefas como organização de objetos pequenos.</p>
            
            <p><strong>Inovação:</strong> Sistema de aprendizado que permite ao robô melhorar 
            suas ações com o uso contínuo.</p>
        `,
        images: [
            { url: 'images/9ano/robo-1.jpg', caption: 'Robô em testes de movimentação' },
            { url: 'images/9ano/robo-2.jpg', caption: 'Equipe ajustando sensores' }
        ]
    },
    3: {
        title: "Purificação de Água",
        category: "Química",
        team: ["Rafaela Lima", "Gabriel Souza"],
        pitch: "Laboratório de Química - 11h15",
        fullDescription: `
            <p><strong>Objetivo:</strong> Desenvolver um sistema de baixo custo para purificação 
            de água utilizando materiais naturais e recicláveis.</p>
            
            <p><strong>Processo:</strong> Filtração em múltiplas camadas com areia, carvão ativado, 
            cascalho e materiais naturais antibacterianos.</p>
            
            <p><strong>Eficácia:</strong> Testes laboratoriais comprovaram remoção de 95% das 
            impurezas e 99% das bactérias nocivas.</p>
            
            <p><strong>Impacto Social:</strong> Sistema pode beneficiar comunidades sem acesso 
            à água potável, com custo de implementação inferior a R$ 50.</p>
        `,
        images: [
            { url: 'images/9ano/agua-1.jpg', caption: 'Montagem do filtro em camadas' },
            { url: 'images/9ano/agua-2.jpg', caption: 'Resultado do teste de turbidez' }
        ]
    },

    // Sala 2º Ano (extrai os grupos listados no HTML)
    4: { title: "Câmara Escura", category: "Feira do Conhecimento 1º ano A", team: ["Manuella O.", "João Gustavo", "Lavínia", "Emanuelly"], pitch: "Sala 11", fullDescription: "", images: [] },
    5: { title: "Óptica", category: "Feira do Conhecimento 1º ano A", team: ["Annelise", "Lucas Rosa"], pitch: "Sala 11", fullDescription: "", images: [] },
    6: { title: "DNA", category: "Feira do Conhecimento 1º ano A", team: ["Anna Lívia", "Brenda Ferreira", "Heloa", "João Lucas Almeida", "Maria Rafaela", "Yasmin Pinesso"], pitch: "Sala 11", fullDescription: "", images: [] },
    7: { title: "Estrelas", category: "Feira do Conhecimento 1º ano A", team: ["Luiz Felipe Xavier", "Cássio", "Guilherme", "Pedro Varela"], pitch: "Sala 11", fullDescription: "", images: [] },
    8: { title: "Resina Bactericida", category: "Feira do Conhecimento 1º ano A", team: ["Gabriel Fernandes", "Gabriel Manfredine", "Kauã Cruz", "Lucas Martins"], pitch: "Sala 11", fullDescription: "", images: [] },
    9: { title: "Levitação Clássica", category: "Feira do Conhecimento 1º ano A", team: ["Manuella anunciato", "Victoria de Souza", "Breno Douglas", "Matheus"], pitch: "Sala 11", fullDescription: "", images: [] },
    10: { title: "Tratamento de Água e Esgoto", category: "Feira do Conhecimento 1º ano A", team: ["Gabriella Dantas", "Isabella Lima", "Gabriel Moraes", "Miguel Santos", "Gustavo Bulhões"], pitch: "Sala 11", fullDescription: "", images: [] },
    11: { title: "Pilhas", category: "Feira do Conhecimento 1º ano A", team: ["Leonardo Ribeiro", "Luiz Henrique", "Higor", "Gabriel", "Gustavo Bulhões"], pitch: "Sala 11", fullDescription: "", images: [] },
    12: { title: "Pilhas e Baterias", category: "Feira do Conhecimento 1º ano A", team: ["Kaue", "Kaiky", "Lavinia", "João Paiva", "Gustavo Martins", "Miguel"], pitch: "Sala 11", fullDescription: "", images: [] },
    13: { title: "", category: "Feira do Conhecimento 1º ano B", team: ["Maria Eduarda", "Victor Hugo", "Adrielly"], pitch: "Sala 12", fullDescription: "", images: [] },
    14: { title: "Foguete", category: "Feira do Conhecimento 1º ano B", team: ["Augusto", "Júlia Nojosa", "Leonardo Yano", "Leonardo Justo", "Matheus Fabiano"], pitch: "Sala 12", fullDescription: "", images: [] },
    15: { title: "Vulcão", category: "Feira do Conhecimento 1º ano B", team: ["Bryan", "Enzo", "João Pedro Dário", "João Pedro Félix", "Ricardo"], pitch: "Sala 12", fullDescription: "", images: [] },
    16: { title: "Atmosfera", category: "Feira do Conhecimento 1º ano B", team: ["Ana Clara", "Clara Vieira", "Giovanna Ramos", "Rafaela Teles"], pitch: "Sala 12", fullDescription: "", images: [] },
    17: { title: "Sistema Circulatório", category: "Feira do Conhecimento 1º ano C", team: ["Ana Clara Frota", "Julianne", "Manuella Saquetti"], pitch: "Sala 12", fullDescription: "", images: [] },

    // Sala 3º Ano
    18: { title: "Eletrostática", category: "Feira do Conhecimento 3º ano A", team: ["Richard", "Henrique", "João Gabriel"], pitch: "Sala 17", fullDescription: "", images: [] },
    19: { title: "Bioplástico", category: "Feira do Conhecimento 3º ano A", team: ["Attilio", "Ana Fernanda", "Letícia", "Tiago"], pitch: "Sala 17", fullDescription: "", images: [] },
    20: { title: "Bioplástico", category: "Feira do Conhecimento 3º ano A", team: ["Attilio", "Ana Fernanda", "Letícia", "Tiago"], pitch: "Sala 17", fullDescription: "", images: [] },
    21: { title: "Eletrólise", category: "Feira do Conhecimento 3º ano A", team: ["Amanda", "Ana Julia", "Giovana", "Giovana Ayumi"], pitch: "Sala 17", fullDescription: "", images: [] },
    22: { title: "", category: "Feira do Conhecimento 3º ano A", team: ["Gustavo", "Gabriely", "Eduardo", "Giovana Ayumi"], pitch: "Sala 17", fullDescription: "", images: [] },
    23: { title: "Biocombustível", category: "Feira do Conhecimento 3º ano A", team: ["João Pedro Brandi", "Rafael Marcos Fróis de Oliveira", "Maria Clara Caputo Matiotti"], pitch: "Sala 17", fullDescription: "", images: [] },
    24: { title: "", category: "Feira do Conhecimento 3º ano A", team: ["Milena", "Júlia", "Ruan", "Elis"], pitch: "Sala 17", fullDescription: "", images: [] },
    25: { title: "Balão de Fermentação", category: "Feira do Conhecimento 3º ano B", team: ["Giovana Araújo", "Larissa Lima", "Maria Eduarda", "Matheus Henrique", "Vinícius Matos"], pitch: "Sala 15", fullDescription: "", images: [] },
    26: { title: "Bioplástico", category: "Feira do Conhecimento 3º ano B", team: ["Guilherme Gabriel", "Luiz Guilherme", "Vinícius Thomas", "Raul Bicudo"], pitch: "Sala 15", fullDescription: "", images: [] },
    27: { title: "", category: "Feira do Conhecimento 3º ano B", team: ["Anna Clara", "Ana Luiza", "Ana Júlia", "Luiza Pereira", "Maria Clara", "Mathues Caramuru"], pitch: "Sala 15", fullDescription: "", images: [] },
    28: { title: "", category: "Feira do Conhecimento 3º ano B", team: ["Gabriella", "Isabelly Fofano", "Lavínia", "Lívia", "Yasmin", "Elis Fidêncio"], pitch: "Sala 15", fullDescription: "", images: [] },
    29: { title: "", category: "Feira do Conhecimento 3º ano B", team: ["João Vitor", "Kauã Guimarães", "Leonardo Tavares", "Matheus Almeida", "Raí Guilherme"], pitch: "Sala 15", fullDescription: "", images: [] },
    30: { title: "Desenvolvimento do site!", category: "Feira do Conhecimento 3º ano B", team: ["Arthur Filipe dos Santos Pereira", "Gabriel Prudente Magalhães", "Guilheme Aparecido Nascimento", "Júlio Cesar Carneiro Filho", "Rafael Oliveira e Silva"], pitch: "Você está vendo agora!", fullDescription: "Desenvolvimento de um site para apresentar os projetos da Feira de Ciências do SESI Jacareí.", images: [] },

    // Sala 9º Ano
    31: { title: "Reações Químicas", category: "Feira do Conhecimento 9º ano A", team: ["Larissa", "Mariana Elisa"], pitch: "Laboratório de Química ou Física", fullDescription: "", images: [] },
    32: { title: "Bola de Plasma", category: "Feira do Conhecimento 9º ano A", team: ["Mariana Vitória", "Gabriel Godoy", "Kemelyn", "Maria Luiza", "Sara Liz"], pitch: "Laboratório de Química ou Física", fullDescription: "", images: [] },
    33: { title: "", category: "Feira do Conhecimento 9º ano", team: ["Helena", "Ana Laura", "Paulo"], pitch: "Laboratório de Química ou Física", fullDescription: "", images: [] },
    34: { title: "Drone", category: "Feira do Conhecimento 9º ano A", team: ["Thiago Pietro", "Carlos Luiz", "Igor", "Phelipe"], pitch: "Laboratório de Química ou Física", fullDescription: "", images: [] },
    35: { title: "", category: "Feira do Conhecimento 9º ano", team: ["Vinícius", "Gustavo", "Arthur"], pitch: "Laboratório de Química ou Física", fullDescription: "", images: [] },
    36: { title: "", category: "Feira do Conhecimento 9º ano", team: ["Júlia", "Thamires"], pitch: "Laboratório de Química ou Física", fullDescription: "", images: [] },
    37: { title: "Garra Mecânica", category: "Feira do Conhecimento 9º ano", team: ["Alice", "Anna Júlia", "Eduarda", "Gabriel Lisboa", "Gabriel Leite", "Henrique", "Pedro Henrique", "Thaniara"], pitch: "Laboratório de Química ou Física", fullDescription: "", images: [] },
    38: { title: "", category: "Feira do Conhecimento 9º ano C", team: ["Vitor Rodrigues", "Cauã Miguel", "Pedro Miguel", "Analu Pires", "Ana Clara Idalgo", "Lucas Abdala"], pitch: "Sala 19", fullDescription: "", images: [] },
    39: { title: "Sistema de Ligação", category: "Feira do Conhecimento 9º ano C", team: ["Romulo", "Luiz Miguel Joia", "João Victor", "Rafael", "Calebe", "Saymon Ferreira"], pitch: "Sala 19", fullDescription: "", images: [] },
    40: { title: "", category: "Feira do Conhecimento 9º ano C", team: ["Yasmin", "Maria Cecília", "Helena de Paula", "Miguel Rangel"], pitch: "Sala 19", fullDescription: "", images: [] },
    41: { title: "", category: "Feira do Conhecimento 9º ano C", team: ["Gabriel Frota", "Isabela", "Allana", "Giovana Bomsucesso", "Amanda Moraes", "Felipe Thomaz"], pitch: "Sala 19", fullDescription: "", images: [] },
    42: { title: "", category: "Feira do Conhecimento 9º ano C", team: ["Gustavo", "Sara Machado", "Beatriz", "Anna Julia"], pitch: "Sala 19", fullDescription: "", images: [] },
    43: { title: "", category: "Feira do Conhecimento 9º ano C", team: ["Maria Alice", "Davi Macenas", "Carlos", "Gyulia"], pitch: "Sala 19", fullDescription: "", images: [] }
};

// Garantir pelo menos 4 imagens por projeto usando placeholders
Object.keys(projectsData).forEach(key => {
    const p = projectsData[key];
    if (!p.images) p.images = [];
    for (let i = 1; i <= 4; i++) {
        if (!p.images[i - 1]) {
            p.images[i - 1] = {
                url: `images/projects/p${key}-${i}.svg`,
                caption: (p.title ? `${p.title} - Imagem ${i}` : `Projeto ${key} - Imagem ${i}`)
            };
        }
    }
});

// Garantir que cada projeto tenha ao menos uma imagem (placeholder) quando vazio.
Object.keys(projectsData).forEach(key => {
    const proj = projectsData[key];
    if (!proj) return;
    if (!Array.isArray(proj.images) || proj.images.length === 0) {
        proj.images = [{ url: `images/projects/project-${key}.svg`, caption: proj.title || 'Imagem do projeto' }];
    }
});

// Menu mobile toggle
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
        menuToggle.setAttribute('aria-expanded', !isExpanded);
        navMenu.classList.toggle('active');
    });
}

// Modal functionality
const modal = document.getElementById('project-modal');
const modalOverlay = document.getElementById('modal-overlay');
const modalClose = document.getElementById('modal-close');
const modalTitle = document.getElementById('modal-title');
const modalBody = document.getElementById('modal-body');

// Abrir modal
document.querySelectorAll('.project-card__btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const projectId = e.target.getAttribute('data-project');
        const project = projectsData[projectId];
        
        if (project) {
            modalTitle.textContent = project.title;
            // Montar galeria (se houver imagens) e conteúdo
            let galleryHTML = '';
            if (project.images && project.images.length > 0) {
                galleryHTML = `
                    <div class="modal__gallery" id="modal-gallery">
                        <div class="modal__gallery-main">
                            <button class="modal__gallery-btn modal__gallery-btn--prev" aria-label="Imagem anterior">‹</button>
                            <img src="${project.images[0].url}" alt="${project.images[0].caption}" class="modal__gallery-img" id="modal-gallery-main-img" loading="lazy">
                            <button class="modal__gallery-btn modal__gallery-btn--next" aria-label="Próxima imagem">›</button>
                        </div>
                        <div class="modal__gallery-thumbs" id="modal-gallery-thumbs">
                            ${project.images.map((img, i) => `
                                <button class="modal__gallery-thumb" data-index="${i}" aria-label="Ver imagem ${i+1}">
                                    <img src="${img.url}" alt="${img.caption}" loading="lazy">
                                </button>
                            `).join('')}
                        </div>
                    </div>
                `;
            }

            modalBody.innerHTML = `
                <div class="modal__content-grid">
                    ${galleryHTML}
                    <div class="modal__info">
                        <p class="modal__category"><strong>Categoria:</strong> ${project.category}</p>
                        <div class="modal__team">
                            <p><strong>Integrantes:</strong></p>
                            <ul>
                                ${project.team.map(member => `<li>${member}</li>`).join('')}
                            </ul>
                        </div>
                        <p class="modal__pitch"><strong>📍 Local do Pitch:</strong> ${project.pitch}</p>
                    </div>
                    <div class="modal__description">
                        ${project.fullDescription}
                    </div>
                </div>
            `;

            // Inicializar comportamento da galeria
            if (project.images && project.images.length > 0) {
                initModalGallery(project.images);
            }
            
            modal.removeAttribute('hidden');
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
            
            // Foco no botão de fechar para acessibilidade
            modalClose.focus();
        }
    });
});

// Fechar modal
function closeModal() {
    modal.setAttribute('hidden', '');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

if (modalClose) {
    modalClose.addEventListener('click', closeModal);
}

if (modalOverlay) {
    modalOverlay.addEventListener('click', closeModal);
}

// Fechar modal com tecla ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.hasAttribute('hidden')) {
        closeModal();
    }
});

// Inicializar galeria dentro do modal
function initModalGallery(images) {
    const mainImg = document.getElementById('modal-gallery-main-img');
    const thumbsContainer = document.getElementById('modal-gallery-thumbs');
    const prevBtn = document.querySelector('.modal__gallery-btn--prev');
    const nextBtn = document.querySelector('.modal__gallery-btn--next');
    if (!mainImg || !thumbsContainer) return;

    let currentIndex = 0;

    function showImage(index) {
        index = (index + images.length) % images.length;
        currentIndex = index;
        mainImg.src = images[currentIndex].url;
        mainImg.alt = images[currentIndex].caption;

        // Atualizar destaque nas miniaturas
        thumbsContainer.querySelectorAll('.modal__gallery-thumb').forEach((btn, i) => {
            btn.classList.toggle('active', i === currentIndex);
        });
    }

    // Event listeners miniaturas
    thumbsContainer.querySelectorAll('.modal__gallery-thumb').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const idx = parseInt(btn.getAttribute('data-index'), 10);
            showImage(idx);
        });
    });

    if (prevBtn) prevBtn.addEventListener('click', () => showImage(currentIndex - 1));
    if (nextBtn) nextBtn.addEventListener('click', () => showImage(currentIndex + 1));

    // Suporte teclado (setas)
    document.addEventListener('keydown', function handler(e) {
        if (modal.hasAttribute('hidden')) return;
        if (e.key === 'ArrowLeft') showImage(currentIndex - 1);
        if (e.key === 'ArrowRight') showImage(currentIndex + 1);
    });

    // Marcar primeira miniatura como ativa
    showImage(0);
}

// Dropdown no mobile
document.querySelectorAll('.nav__item--dropdown').forEach(item => {
    item.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            item.classList.toggle('active');
        }
    });
});

// Smooth scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});