// ============================================
// FUNÇÕES PARA GERAR PDF E RELATÓRIO
// ============================================

// Função para gerar PDF diretamente
function gerarPDF() {
    // Validar se há dados no formulário
    const hasData = document.querySelectorAll('input[type="radio"]:checked').length > 0;
    
    if (!hasData) {
        showAlert('error', 'Preencha pelo menos algumas informações antes de gerar o PDF');
        return;
    }
    
    // Mostrar loading
    const btn = document.getElementById('btn-pdf');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Gerando PDF...';
    btn.disabled = true;
    
    try {
        // Configuração do PDF
        const element = document.querySelector('.form-section');
        const opt = {
            margin: [0.5, 0.5, 0.5, 0.5],
            filename: `avaliacao_arvore_${formatarDataHora()}.pdf`,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { 
                scale: 2, 
                letterRendering: true,
                backgroundColor: '#ffffff'
            },
            jsPDF: { 
                unit: 'in', 
                format: 'a4', 
                orientation: 'portrait' 
            }
        };
        
        // Gerar PDF
        html2pdf().set(opt).from(element).save();
        
        // Feedback de sucesso
        btn.innerHTML = '<i class="fas fa-check"></i> PDF Salvo!';
        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.disabled = false;
        }, 2000);
        
        showAlert('success', 'PDF gerado com sucesso!');
        
    } catch (error) {
        console.error('Erro ao gerar PDF:', error);
        btn.innerHTML = originalText;
        btn.disabled = false;
        showAlert('error', 'Erro ao gerar PDF: ' + error.message);
    }
}

// Função para visualizar relatório antes de enviar
function visualizarRelatorio() {
    // Coletar dados do formulário
    const dados = coletarDadosFormulario();
    const totalScore = document.getElementById('total-risk').textContent;
    
    // Criar janela de visualização
    const win = window.open('', '_blank');
    win.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Relatório de Avaliação - Pré-visualização</title>
            <style>
                * { margin: 0; padding: 0; box-sizing: border-box; }
                body {
                    font-family: 'Segoe UI', Arial, sans-serif;
                    padding: 30px;
                    background: #f5f5f5;
                }
                .report-container {
                    max-width: 900px;
                    margin: 0 auto;
                    background: white;
                    border-radius: 10px;
                    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                    overflow: hidden;
                }
                .report-header {
                    background: linear-gradient(135deg, #D52B1E, #A71C1C);
                    color: white;
                    padding: 30px;
                    text-align: center;
                }
                .report-header h1 {
                    margin-bottom: 10px;
                }
                .report-body {
                    padding: 30px;
                }
                .section {
                    margin-bottom: 25px;
                    page-break-inside: avoid;
                }
                .section-title {
                    background: #D52B1E;
                    color: white;
                    padding: 10px;
                    border-radius: 5px;
                    margin-bottom: 15px;
                    font-size: 18px;
                }
                .info-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 10px;
                    margin-bottom: 20px;
                }
                .info-item {
                    padding: 8px;
                    border-bottom: 1px solid #eee;
                }
                .label {
                    font-weight: bold;
                    color: #555;
                    display: inline-block;
                    min-width: 120px;
                }
                .risk-card {
                    text-align: center;
                    padding: 20px;
                    background: #f8f9fa;
                    border-radius: 10px;
                    margin: 20px 0;
                }
                .risk-score {
                    font-size: 48px;
                    font-weight: bold;
                    margin: 10px 0;
                }
                .risk-low { color: #28A745; }
                .risk-medium { color: #FFC107; }
                .risk-high { color: #DC3545; }
                .recommendation {
                    padding: 15px;
                    border-radius: 5px;
                    margin-top: 15px;
                    font-weight: bold;
                }
                .rec-low { background: #d4edda; color: #155724; }
                .rec-medium { background: #fff3cd; color: #856404; }
                .rec-high { background: #f8d7da; color: #721c24; }
                .report-footer {
                    background: #f8f9fa;
                    padding: 20px;
                    text-align: center;
                    font-size: 12px;
                    color: #666;
                    border-top: 1px solid #dee2e6;
                }
                .btn-close {
                    background: #D52B1E;
                    color: white;
                    border: none;
                    padding: 10px 20px;
                    border-radius: 5px;
                    cursor: pointer;
                    margin-top: 20px;
                }
                .btn-close:hover {
                    background: #A71C1C;
                }
                @media print {
                    body { background: white; padding: 0; }
                    .no-print { display: none; }
                }
            </style>
        </head>
        <body>
            <div class="report-container">
                <div class="report-header">
                    <h1>📋 Relatório de Avaliação de Árvore</h1>
                    <p>Formulário de Viabilização de Corte</p>
                    <p><small>Gerado em: ${new Date().toLocaleString()}</small></p>
                </div>
                
                <div class="report-body">
                    <div class="section">
                        <div class="section-title">📌 Dados da Vistoria</div>
                        <div class="info-grid">
                            <div class="info-item"><span class="label">SDO:</span> ${dados.sdo || 'N/A'}</div>
                            <div class="info-item"><span class="label">Data:</span> ${dados.dataVistoria || 'N/A'}</div>
                            <div class="info-item"><span class="label">Vistoriador:</span> ${dados.vistoriador || 'N/A'}</div>
                            <div class="info-item"><span class="label">Endereço:</span> ${dados.endereco || 'N/A'}</div>
                            <div class="info-item"><span class="label">Bairro:</span> ${dados.bairro || 'N/A'}</div>
                            <div class="info-item"><span class="label">Espécie:</span> ${dados.especie || 'N/A'}</div>
                            <div class="info-item"><span class="label">Altura:</span> ${dados.altura || 'N/A'} m</div>
                            <div class="info-item"><span class="label">CAP:</span> ${dados.cap || 'N/A'} cm</div>
                        </div>
                    </div>
                    
                    <div class="section">
                        <div class="section-title">🎯 Resultado da Avaliação</div>
                        <div class="risk-card">
                            <h3>Pontuação Total de Risco</h3>
                            <div class="risk-score ${getRiskClass(parseInt(totalScore))}">
                                ${totalScore} pontos
                            </div>
                            <p><strong>Classificação:</strong> ${getRiskLevel(parseInt(totalScore))}</p>
                            <div class="recommendation ${getRecClass(parseInt(totalScore))}">
                                <strong>📌 Recomendação:</strong> ${getRecommendation(parseInt(totalScore))}
                            </div>
                        </div>
                    </div>
                    
                    <div class="section">
                        <div class="section-title">📊 Detalhamento dos Critérios</div>
                        <div style="max-height: 400px; overflow-y: auto;">
                            ${gerarTabelaRiscos(dados.avaliacoes)}
                        </div>
                    </div>
                </div>
                
                <div class="report-footer">
                    <p>Este documento é uma pré-visualização do formulário preenchido.</p>
                    <p>Para validade oficial, o formulário deve ser submetido e protocolado.</p>
                    <button class="btn-close no-print" onclick="window.close()">Fechar Visualização</button>
                </div>
            </div>
            
            <script>
                function getRiskClass(score) {
                    if (score <= 6) return 'risk-low';
                    if (score <= 11) return 'risk-medium';
                    return 'risk-high';
                }
                
                function getRiskLevel(score) {
                    if (score <= 6) return '✅ Risco de Menor Importância - Baixo';
                    if (score <= 11) return '⚠️ Risco de Média Importância - Moderado';
                    return '🔴 Risco de Alta Importância - Crítico';
                }
                
                function getRecClass(score) {
                    if (score <= 6) return 'rec-low';
                    if (score <= 11) return 'rec-medium';
                    return 'rec-high';
                }
                
                function getRecommendation(score) {
                    if (score <= 6) return 'Monitoramento periódico recomendado. Realizar nova avaliação em 6 meses.';
                    if (score <= 11) return 'Necessita poda corretiva e acompanhamento técnico. Intervenção em até 30 dias.';
                    return 'URGENTE! Risco iminente de queda. Intervenção necessária imediata.';
                }
            </script>
        </body>
        </html>
    `);
    win.document.close();
}

// Função auxiliar para coletar dados do formulário
function coletarDadosFormulario() {
    const dados = {
        sdo: document.getElementById('sdo')?.value || '',
        dataVistoria: document.getElementById('data-vistoria')?.value || '',
        vistoriador: document.getElementById('vistoriador')?.value || '',
        endereco: document.getElementById('endereco')?.value || '',
        bairro: document.getElementById('bairro')?.value || '',
        especie: document.getElementById('nome-popular')?.value || document.getElementById('nome-cientifico')?.value || '',
        altura: document.getElementById('altura')?.value || '',
        cap: document.getElementById('cap')?.value || '',
        avaliacoes: {}
    };
    
    // Coletar todas as avaliações
    const avaliacoes = {
        'Galhos na Rede': document.querySelector('input[name="galhos-rede"]:checked')?.value,
        'Galhos Secos': document.querySelector('input[name="galhos-secos"]:checked')?.value,
        'Galhos Angulados': document.querySelector('input[name="galhos-angulados"]:checked')?.value,
        'Galhos Esguios': document.querySelector('input[name="galhos-esguios"]:checked')?.value,
        'Lesões na Casca': document.querySelector('input[name="lesoes-casca"]:checked')?.value,
        'Fungos': document.querySelector('input[name="fungos"]:checked')?.value,
        'Insetos Perfuradores': document.querySelector('input[name="insetos"]:checked')?.value,
        'Erva-de-Passarinho': document.querySelector('input[name="erva-de-passarinho"]:checked')?.value,
        'Folhagem': document.querySelector('input[name="folhagem"]:checked')?.value,
        'Poda': document.querySelector('input[name="poda"]:checked')?.value
    };
    
    dados.avaliacoes = avaliacoes;
    return dados;
}

// Função para gerar tabela de riscos
function gerarTabelaRiscos(avaliacoes) {
    let html = '<table style="width: 100%; border-collapse: collapse;">';
    html += '<tr style="background: #f2f2f2;"><th style="padding: 8px; text-align: left;">Critério</th><th style="padding: 8px; text-align: center;">Pontuação</th></tr>';
    
    for (const [critério, pontuacao] of Object.entries(avaliacoes)) {
        if (pontuacao && pontuacao !== '0') {
            const nivel = parseInt(pontuacao) <= 2 ? 'Baixo' : (parseInt(pontuacao) <= 4 ? 'Médio' : 'Alto');
            html += `<tr>
                        <td style="padding: 8px; border-bottom: 1px solid #eee;">${critério}</td>
                        <td style="padding: 8px; text-align: center; border-bottom: 1px solid #eee;">
                            <strong>${pontuacao}</strong> pontos - ${nivel}
                        </td>
                    </tr>`;
        }
    }
    
    html += '</table>';
    return html;
}

// Função para formatar data e hora
function formatarDataHora() {
    const now = new Date();
    return `${now.getFullYear()}${(now.getMonth()+1).toString().padStart(2,'0')}${now.getDate().toString().padStart(2,'0')}_${now.getHours().toString().padStart(2,'0')}${now.getMinutes().toString().padStart(2,'0')}`;
}

// Adicionar event listeners quando o DOM carregar
document.addEventListener('DOMContentLoaded', function() {
    setupRiskCalculator();
    
    // Botão de PDF
    const pdfBtn = document.getElementById('btn-pdf');
    if (pdfBtn) {
        pdfBtn.addEventListener('click', gerarPDF);
    }
    
    // Botão de visualização
    const previewBtn = document.getElementById('btn-preview');
    if (previewBtn) {
        previewBtn.addEventListener('click', visualizarRelatorio);
    }
});