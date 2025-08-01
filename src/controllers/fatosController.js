const fatosHistoricos = require('../models/fatosHistoricos');
// Valida entrada de dados
exports.getFatosHistoricos = (req, res) => {
  const ano = parseInt(req.query.ano); //Converte string em number direto
  //Verifica se ano e NULL, UNDERFINED ou ""
  if (!ano) {
    return res.status(400).json({
      sucesso: false,
      error: 'Formato de ano errado ou vazio!',
    });
  }
  //Verifica se ano esta dentro da faixa permitida
  if (ano < 1920 || ano > 2020) {
    return res.status(400).json({
      sucesso: false,
      mensagem: 'Anos dos fato de 1920 ate 2020 aceitavel.',
      error: 'Fato não encontrado!',
    });
  }
  // Realiza a busca no models caso exita, retorna o fato
  const fato = fatosHistoricos.find((item) => item.ano === ano);
  // Retorna um json com sucesso: true para o front saber o quer fazer
  res.status(200).json({
    sucesso: true,
    ano,
    fato,
  });
};
