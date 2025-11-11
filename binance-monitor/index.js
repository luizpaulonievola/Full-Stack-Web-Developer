// Importa os módulos necessários
const https = require("https");
const fs = require("fs");

// Array para armazenar os dados do ticker
let tickerHistory = [];

// Função para carregar o histórico de ticker do arquivo, se existir
function loadTickerHistory() {
  try {
    if (fs.existsSync("ticker-history.json")) {
      const data = fs.readFileSync("ticker-history.json", "utf8");
      tickerHistory = JSON.parse(data);
      console.log("Histórico de ticker carregado com sucesso.");
    }
  } catch (error) {
    console.error("Erro ao carregar o histórico de ticker:", error.message);
  }
}

// Função para salvar o histórico de ticker no arquivo
function saveTickerHistory() {
  try {
    fs.writeFileSync(
      "ticker-history.json",
      JSON.stringify(tickerHistory, null, 2)
    );
  } catch (error) {
    console.error("Erro ao salvar o histórico de ticker:", error.message);
  }
}

// Função para buscar os dados da Binance
function fetchBinanceData() {
  const url = "/api/v3/ticker/24hr?symbol=BTCUSDT";
  const options = {
    hostname: "api.binance.com",
    port: 443,
    path: url,
    method: "GET",
  };

  const req = https.request(options, (res) => {
    let data = "";

    res.on("data", (chunk) => {
      data += chunk;
    });

    res.on("end", () => {
      try {
        const tickerData = JSON.parse(data);

        // Formata o preço com duas casas decimais
        const formattedPrice = parseFloat(tickerData.lastPrice).toFixed(2);

        // Cria um objeto com todos os dados + timestamp
        const record = {
          timestamp: new Date().toISOString(),
          ...tickerData,
          lastPrice: formattedPrice, // Substitui pelo preço formatado
        };

        // Adiciona o registro ao histórico
        tickerHistory.push(record);

        // Salva o histórico atualizado no arquivo
        saveTickerHistory();

        // Exibe os dados no console
        console.log(
          `[${record.timestamp}] Preço BTC/USDT: $${record.lastPrice}`
        );
      } catch (error) {
        console.error("Erro ao parsear os dados:", error.message);
      }
    });
  });

  req.on("error", (error) => {
    console.error("Erro na requisição:", error.message);
  });

  req.end();
}

// Carrega o histórico de ticker existente
loadTickerHistory();

// Executa a função imediatamente quando o script é iniciado
console.log("Iniciando monitoramento de ticker da Binance...");
fetchBinanceData();

// Configura o intervalo para executar a cada 1 minuto (60000 milissegundos)
setInterval(fetchBinanceData, 60000);
