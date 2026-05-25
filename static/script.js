// ============================================
// FUNÇÃO PRINCIPAL DO FORMULÁRIO
// ============================================

document.getElementById('tree-assessment-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const form = this;
    const submitBtn = form.querySelector('.submit-btn');
    const originalBtnText = submitBtn.innerHTML;
    
    // Desativar botão durante o envio
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> Enviando...`;
    
    // Validar formulário
    if (!validateForm(form)) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
        return;
    }
    
    try {
        // Simular envio (substitua por sua lógica real)
        await simulateSubmission();
        
        // Feedback de sucesso
        submitBtn.innerHTML = `<i class="fas fa-check"></i> Enviado com sucesso!`;
        submitBtn.style.backgroundColor = 'var(--success)';
        
        // Desabilitar todos os campos
        form.querySelectorAll('input, button, select, textarea').forEach(el => {
            el.disabled = true;
        });
        
        // Mostrar mensagem de confirmação
        showAlert('success', 'Formulário enviado com sucesso!');
        
    } catch (error) {
        // Feedback de erro
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
        showAlert('error', 'Erro ao enviar formulário: ' + error.message);
    }
});

// ============================================
// FUNÇÕES DE VALIDAÇÃO
// ============================================

function validateForm(form) {
    let isValid = true;
    
    // Limpar erros anteriores
    form.querySelectorAll('.error-message').forEach(el => el.remove());
    form.querySelectorAll('.input-error').forEach(el => el.classList.remove('input-error'));
    
    // Validar campos de texto
    const textInputs = form.querySelectorAll('input[required]:not([type="radio"]), select[required], textarea[required]');
    textInputs.forEach(input => {
        if (!input.value.trim()) {
            markAsInvalid(input, 'Este campo é obrigatório');
            isValid = false;
        }
    });
    
    // Validar radio buttons
    const radioGroups = form.querySelectorAll('.radio-options[required]');
    radioGroups.forEach(group => {
        const name = group.querySelector('input').name;
        const checked = form.querySelector(`input[name="${name}"]:checked`);
        
        if (!checked) {
            const legend = group.closest('.risk-assessment').querySelector('h3');
            markAsInvalid(legend, 'Selecione uma opção');
            isValid = false;
        }
    });
    
    if (!isValid) {
        // Rolar até o primeiro erro
        const firstError = form.querySelector('.error-message');
        if (firstError) {
            firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
    
    return isValid;
}

function markAsInvalid(element, message) {
    const input = element.tagName === 'LABEL' ? element.nextElementSibling : element;
    if (input) input.classList.add('input-error');
    
    const errorElement = document.createElement('div');
    errorElement.className = 'error-message';
    errorElement.innerHTML = `<i class="fas fa-exclamation-circle"></i> ${message}`;
    
    if (element.tagName === 'H3') {
        element.parentNode.insertBefore(errorElement, element.nextSibling);
    } else if (input) {
        input.parentNode.insertBefore(errorElement, input.nextSibling);
    }
}

function showAlert(type, message) {
    const alert = document.createElement('div');
    alert.className = `alert alert-${type}`;
    alert.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-triangle'}"></i>
        ${message}
    `;
    
    document.body.appendChild(alert);
    
    setTimeout(() => {
        alert.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        alert.classList.remove('show');
        setTimeout(() => alert.remove(), 500);
    }, 5000);
}

function simulateSubmission() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 1500);
    });
}

// ============================================
// CALCULADORA DE RISCO
// ============================================

function setupRiskCalculator() {
    const radioInputs = document.querySelectorAll('input[type="radio"][value]');
    const totalDisplay = document.getElementById('total-risk');
    
    function calculateTotal() {
        let total = 0;
        const checkedRadios = document.querySelectorAll('input[type="radio"]:checked');
        
        checkedRadios.forEach(radio => {
            total += parseInt(radio.value) || 0;
            highlightSelectedOption(radio);
        });
        
        updateRiskDisplay(total);
    }
    
    function highlightSelectedOption(radio) {
        const groupName = radio.name;
        document.querySelectorAll(`input[name="${groupName}"]`).forEach(item => {
            const card = item.closest('.radio-card');
            if (card) card.classList.remove('recently-selected');
        });
        
        const selectedCard = radio.closest('.radio-card');
        if (selectedCard) {
            selectedCard.classList.add('recently-selected');
            setTimeout(() => {
                selectedCard.classList.remove('recently-selected');
            }, 1000);
        }
    }
    
    function updateRiskDisplay(total) {
        if (!totalDisplay) return;
        totalDisplay.textContent = total;
        totalDisplay.className = 'total-score';
        
        if (total >= 12) {
            totalDisplay.classList.add('total-danger');
        } else if (total >= 7) {
            totalDisplay.classList.add('total-medium');
        } else if (total >= 3) {
            totalDisplay.classList.add('total-safe');
        } else {
            totalDisplay.classList.add('total-safe');
        }
    }
    
    radioInputs.forEach(input => {
        input.addEventListener('change', function() {
            calculateTotal();
            const card = this.closest('.radio-card');
            if (card) {
                card.style.transform = 'scale(1.03)';
                setTimeout(() => {
                    card.style.transform = '';
                }, 300);
            }
        });
    });
    
    calculateTotal();
}

// ============================================
// FUNÇÃO PARA GERAR PDF (VERSÃO ALTERNATIVA VIA IMPRESSÃO)
// ============================================

function gerarPDF() {
    const hasData = document.querySelectorAll('input[type="radio"]:checked').length > 0;
    
    if (!hasData) {
        showAlert('error', 'Preencha pelo menos algumas informações antes de gerar o PDF');
        return;
    }
    
    showAlert('info', 'Preparando PDF... Use "Salvar como PDF" na janela que abrir.');
    
    // Coletar dados do formulário
    const sdo = document.getElementById('sdo')?.value || 'N/A';
    const data = document.getElementById('data-vistoria')?.value || 'N/A';
    const vistoriador = document.getElementById('vistoriador')?.value || 'N/A';
    const endereco = document.getElementById('endereco')?.value || 'N/A';
    const bairro = document.getElementById('bairro')?.value || 'N/A';
    const longitude = document.getElementById('longitude')?.value || 'N/A';
    const latitude = document.getElementById('latitude')?.value || 'N/A';
    const nomeCientifico = document.getElementById('nome-cientifico')?.value || 'N/A';
    const nomePopular = document.getElementById('nome-popular')?.value || 'N/A';
    const altura = document.getElementById('altura')?.value || 'N/A';
    const cap = document.getElementById('cap')?.value || 'N/A';
    const totalRisk = document.getElementById('total-risk')?.textContent || '0';
    
    // Coletar avaliações marcadas
    let avaliacoesHtml = '';
    
    const avaliacoes = [
        { nome: 'Galhos na Rede Elétrica', selector: 'input[name="galhos-rede"]:checked' },
        { nome: 'Galhos Secos (podres)', selector: 'input[name="galhos-secos"]:checked' },
        { nome: 'Galhos Angulados', selector: 'input[name="galhos-angulados"]:checked' },
        { nome: 'Galhos Esguios', selector: 'input[name="galhos-esguios"]:checked' },
        { nome: 'Lesões na Casca dos Galhos', selector: 'input[name="lesoes-casca"]:checked' },
        { nome: 'Fungos nos Galhos', selector: 'input[name="fungos"]:checked' },
        { nome: 'Insetos Perfuradores', selector: 'input[name="insetos"]:checked' },
        { nome: 'Erva-de-Passarinho', selector: 'input[name="erva-de-passarinho"]:checked' },
        { nome: 'Folhagem', selector: 'input[name="folhagem"]:checked' },
        { nome: 'Poda', selector: 'input[name="poda"]:checked' },
        { nome: 'Inclinação do Tronco', selector: 'input[name="inclinacao"]:checked' },
        { nome: 'Cavidade no Tronco', selector: 'input[name="cavidade"]:checked' },
        { nome: 'Lesões na Casca do Tronco', selector: 'input[name="lesoes-tronco"]:checked' },
        { nome: 'Orifícios de Insetos', selector: 'input[name="orificios"]:checked' },
        { nome: 'Fungos no Tronco', selector: 'input[name="fungos-tronco"]:checked' },
        { nome: 'Cancro no Tronco', selector: 'input[name="cancro"]:checked' },
        { nome: 'Injúrias Mecânicas', selector: 'input[name="injuria"]:checked' },
        { nome: 'Brotação Epicórmica', selector: 'input[name="brotacao"]:checked' },
        { nome: 'Lesões na Base', selector: 'input[name="lesoes-base"]:checked' },
        { nome: 'Cavidades na Base', selector: 'input[name="cavidade-base"]:checked' },
        { nome: 'Fungos na Base', selector: 'input[name="fungos-base"]:checked' },
        { nome: 'Raízes Adventícias', selector: 'input[name="raizes-adventicias"]:checked' },
        { nome: 'Espaço Permeável', selector: 'input[name="espaco-permeavel"]:checked' },
        { nome: 'Ausência de Neilóide', selector: 'input[name="neiloide"]:checked' },
        { nome: 'Risco para Rede Elétrica', selector: 'input[name="rede-eletrica"]:checked' },
        { nome: 'Efeito Colateral', selector: 'input[name="efeito-colateral"]:checked' }
    ];
    
    avaliacoes.forEach(avaliacao => {
        const elemento = document.querySelector(avaliacao.selector);
        if (elemento && elemento.value !== '0') {
            const parent = elemento.closest('.radio-card');
            const descricao = parent?.querySelector('p')?.textContent || '';
            let nivel = '';
            const valor = parseInt(elemento.value);
            if (valor <= 1) nivel = 'Baixo';
            else if (valor <= 3) nivel = 'Médio';
            else nivel = 'Alto';
            
            avaliacoesHtml += `
                <tr>
                    <td style="padding: 10px; border: 1px solid #ddd;">${avaliacao.nome}</td>
                    <td style="padding: 10px; border: 1px solid #ddd; text-align: center; width: 80px;"><strong>${elemento.value}</strong> pts</td>
                    <td style="padding: 10px; border: 1px solid #ddd;">${descricao.substring(0, 80)}${descricao.length > 80 ? '...' : ''}</td>
                </tr>
            `;
        }
    });
    
    // Determinar classe de risco e recomendação
    let riskClass = '';
    let riskText = '';
    let recomendacao = '';
    const score = parseInt(totalRisk);
    
    if (score <= 6) {
        riskClass = 'risk-low';
        riskText = '✅ Risco de Menor Importância - Baixo';
        recomendacao = 'Monitoramento periódico recomendado. Realizar nova avaliação em 6 meses.';
    } else if (score <= 11) {
        riskClass = 'risk-medium';
        riskText = '⚠️ Risco de Média Importância - Moderado';
        recomendacao = 'Necessita poda corretiva e acompanhamento técnico. Intervenção em até 30 dias.';
    } else {
        riskClass = 'risk-high';
        riskText = '🔴 Risco de Alta Importância - Crítico';
        recomendacao = 'URGENTE! Risco iminente de queda. Intervenção necessária imediata.';
    }
    
    // Abrir janela de impressão
    const printWindow = window.open('', '_blank');
    if (!printWindow) {
        showAlert('error', 'Popup bloqueado! Permita popups para gerar o PDF.');
        return;
    }
    
    printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Relatório de Avaliação - Árvore</title>
            <meta charset="UTF-8">
            <style>
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
                body {
                    font-family: 'Segoe UI', Arial, sans-serif;
                    padding: 30px;
                    background: #e0e0e0;
                }
                .report {
                    max-width: 1000px;
                    margin: 0 auto;
                    background: white;
                    border-radius: 10px;
                    box-shadow: 0 5px 20px rgba(0,0,0,0.2);
                    overflow: hidden;
                }
                .header {
                    text-align: center;
                    padding: 30px;
                    background: linear-gradient(135deg, #D52B1E, #A71C1C);
                    color: white;
                }
                .logo {
                    height: 70px;
                    margin-bottom: 15px;
                    filter: brightness(0) invert(1);
                }
                h1 {
                    font-size: 28px;
                    margin-bottom: 5px;
                }
                .subtitle {
                    font-size: 14px;
                    opacity: 0.9;
                }
                .date {
                    font-size: 11px;
                    margin-top: 10px;
                    opacity: 0.8;
                }
                .content {
                    padding: 30px;
                }
                .section {
                    margin-bottom: 30px;
                    page-break-inside: avoid;
                }
                .section-title {
                    background: #D52B1E;
                    color: white;
                    padding: 10px 15px;
                    border-radius: 8px;
                    margin-bottom: 20px;
                    font-size: 18px;
                    font-weight: bold;
                }
                .info-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 12px;
                }
                .info-item {
                    padding: 8px 12px;
                    border-bottom: 1px solid #eee;
                    background: #f9f9f9;
                    border-radius: 5px;
                }
                .label {
                    font-weight: bold;
                    color: #D52B1E;
                    display: inline-block;
                    min-width: 130px;
                }
                .risk-card {
                    text-align: center;
                    padding: 25px;
                    background: linear-gradient(135deg, #f8f9fa, #e9ecef);
                    border-radius: 15px;
                    margin: 20px 0;
                }
                .risk-score {
                    font-size: 56px;
                    font-weight: bold;
                    margin: 15px 0;
                }
                .risk-low { color: #28A745; }
                .risk-medium { color: #FFC107; }
                .risk-high { color: #DC3545; }
                .recommendation {
                    padding: 15px;
                    border-radius: 10px;
                    margin-top: 15px;
                    font-weight: bold;
                }
                .rec-low { background: #d4edda; color: #155724; border-left: 4px solid #28A745; }
                .rec-medium { background: #fff3cd; color: #856404; border-left: 4px solid #FFC107; }
                .rec-high { background: #f8d7da; color: #721c24; border-left: 4px solid #DC3545; }
                table {
                    width: 100%;
                    border-collapse: collapse;
                    margin-top: 15px;
                }
                th {
                    background: #D52B1E;
                    color: white;
                    padding: 12px;
                    border: 1px solid #C41E12;
                }
                td {
                    padding: 10px;
                    border: 1px solid #ddd;
                }
                tr:nth-child(even) {
                    background: #f9f9f9;
                }
                .footer {
                    background: #f8f9fa;
                    padding: 20px;
                    text-align: center;
                    font-size: 11px;
                    color: #666;
                    border-top: 1px solid #dee2e6;
                }
                @media print {
                    body {
                        background: white;
                        padding: 0;
                    }
                    .report {
                        box-shadow: none;
                        border-radius: 0;
                    }
                    .no-print {
                        display: none;
                    }
                }
            </style>
        </head>
        <body>
            <div class="report">
                <div class="header">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/e/e2/Bras%C3%A3o_CBM_SP.PNG" class="logo">
                    <h1>📋 Relatório de Avaliação de Árvore</h1>
                    <p class="subtitle">Formulário de Viabilização de Corte</p>
                    <p class="date">Gerado em: ${new Date().toLocaleString()}</p>
                </div>
                
                <div class="content">
                    <div class="section">
                        <div class="section-title">📍 Dados da Vistoria</div>
                        <div class="info-grid">
                            <div class="info-item"><span class="label">SDO:</span> ${sdo}</div>
                            <div class="info-item"><span class="label">Data da Vistoria:</span> ${data}</div>
                            <div class="info-item"><span class="label">Vistoriador:</span> ${vistoriador}</div>
                            <div class="info-item"><span class="label">Endereço:</span> ${endereco}</div>
                            <div class="info-item"><span class="label">Bairro:</span> ${bairro}</div>
                            <div class="info-item"><span class="label">Coordenadas:</span> ${latitude}, ${longitude}</div>
                            <div class="info-item"><span class="label">Nome Científico:</span> <i>${nomeCientifico}</i></div>
                            <div class="info-item"><span class="label">Nome Popular:</span> ${nomePopular}</div>
                            <div class="info-item"><span class="label">Altura:</span> ${altura} metros</div>
                            <div class="info-item"><span class="label">CAP (Circunferência):</span> ${cap} cm</div>
                        </div>
                    </div>
                    
                    <div class="section">
                        <div class="section-title">🎯 Resultado da Avaliação</div>
                        <div class="risk-card">
                            <h3>Pontuação Total de Risco</h3>
                            <div class="risk-score ${riskClass}">
                                ${totalRisk} pontos
                            </div>
                            <p style="font-size: 16px; margin: 10px 0;"><strong>Classificação:</strong> ${riskText}</p>
                            <div class="recommendation rec-${riskClass.replace('risk-', '')}">
                                <strong>📌 Recomendação Técnica:</strong> ${recomendacao}
                            </div>
                        </div>
                    </div>
                    
                    ${avaliacoesHtml ? `
                    <div class="section">
                        <div class="section-title">📊 Detalhamento das Avaliações Realizadas</div>
                        <table>
                            <thead>
                                <tr><th style="width: 35%;">Critério Avaliado</th><th style="width: 15%;">Pontuação</th><th style="width: 50%;">Descrição</th></tr>
                            </thead>
                            <tbody>
                                ${avaliacoesHtml}
                            </tbody>
                        </table>
                    </div>
                    ` : '<p style="text-align: center; color: #999;">Nenhuma avaliação com pontuação foi registrada.</p>'}
                </div>
                
                <div class="footer">
                    <p>Este documento é uma avaliação técnica baseada nos critérios estabelecidos.</p>
                    <p>Não substitui uma vistoria presencial detalhada. Em caso de dúvidas, consulte um engenheiro florestal.</p>
                    <p>© ${new Date().getFullYear()} - Corpo de Bombeiros | Documento gerado eletronicamente</p>
                </div>
            </div>
            <script>
                window.onload = function() {
                    setTimeout(function() {
                        window.print();
                    }, 500);
                };
            <\/script>
        </body>
        </html>
    `);
    printWindow.document.close();
}

// ============================================
// FUNÇÃO PARA VISUALIZAR RELATÓRIO
// ============================================

function visualizarRelatorio() {
    gerarPDF();
}

// ============================================
// FUNÇÕES AUXILIARES
// ============================================

function formatarDataHora() {
    const now = new Date();
    return `${now.getFullYear()}${(now.getMonth()+1).toString().padStart(2,'0')}${now.getDate().toString().padStart(2,'0')}_${now.getHours().toString().padStart(2,'0')}${now.getMinutes().toString().padStart(2,'0')}`;
}

// ============================================
// INICIALIZAÇÃO
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    setupRiskCalculator();
    
    const pdfBtn = document.getElementById('btn-pdf');
    if (pdfBtn) {
        pdfBtn.addEventListener('click', gerarPDF);
    }
    
    const previewBtn = document.getElementById('btn-preview');
    if (previewBtn) {
        previewBtn.addEventListener('click', visualizarRelatorio);
    }
});