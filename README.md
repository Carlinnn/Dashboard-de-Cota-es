# Dashboard de Cotações em Tempo Real 📊

## Sumário
- [Sobre o Projeto](#sobre-o-projeto)
- [Tecnologias](#tecnologias)
- [Estrutura](#estrutura)
- [Funcionalidades](#funcionalidades)
- [Instalação](#instalação)
- [Configuração](#configuração)
- [API](#api)
- [Estilização](#estilização)
- [Segurança](#segurança)

## Sobre o Projeto
Dashboard moderno desenvolvido em React para monitoramento em tempo real de cotações de moedas e criptomoedas. O projeto oferece uma interface responsiva e intuitiva para acompanhamento de valores, com atualizações automáticas e visualizações gráficas interativas.

## Tecnologias

### Core
- React 18.3.1
- Vite 5.4.9
- TanStack Query 5.59.16

### UI/UX
- Tailwind CSS 3.4.14
- Emotion/React 11.13.3
- Material UI 6.1.5
- React Icons 5.3.0

### Gráficos
- Recharts 2.13.0
- ApexCharts 3.54.1

### Requisições
- Axios 1.7.7

## Estrutura
O projeto segue uma arquitetura modular com separação clara de responsabilidades:

- `/components`: Componentes React reutilizáveis
- `/config`: Configurações e constantes
- `/hooks`: Hooks personalizados
- `/utils`: Funções utilitárias
- `/styles`: Arquivos de estilização

## Funcionalidades

### Dashboard Principal
- Seleção dinâmica de moeda base
- Atualização automática a cada 60 segundos
- Visualização em cards informativos
- Gráficos interativos de cotações
- Estados de carregamento e erro
- Interface responsiva

### Sistema de Cotações
- Integração com API de cotações
- Cache inteligente de dados
- Atualizações em tempo real
- Formatação automática de valores

### Moedas Suportadas
- Dólar Americano (USD)
- Euro (EUR)
- Real Brasileiro (BRL)
- Libra Esterlina (GBP)
- Bitcoin (BTC)
- Ethereum (ETH)
- Iene Japonês (JPY)
- Dólar Australiano (AUD)
- Dólar Canadense (CAD)
- Yuan Chinês (CNY)

## Instalação

1. Requisitos do Sistema
   - Node.js 14+
   - npm ou yarn

2. Processo de Instalação
   - Clone do repositório
   - Instalação de dependências
   - Configuração de variáveis de ambiente
   - Inicialização do servidor de desenvolvimento

## Configuração

### Variáveis de Ambiente
- Cores do tema
- Configurações de API
- Intervalos de atualização
- Configurações de cache

### Scripts Disponíveis
- Desenvolvimento
- Build de produção
- Linting
- Preview de produção

## API

### Endpoints
- Cotações por moeda base
- Histórico de cotações
- Lista de moedas disponíveis

### Características
- Cache automático
- Tratamento de erros
- Rate limiting
- Validação de dados

## Estilização

### Sistema de Temas
- Variáveis CSS customizáveis
- Modo claro/escuro
- Cores semânticas
- Gradientes personalizados

### Componentes
- Cards responsivos
- Gráficos interativos
- Animações suaves
- Layout adaptativo

## Segurança

### Medidas Implementadas
- Sanitização de dados
- Proteção contra XSS
- Watermark no console
- Validações de entrada
- Mensagens de segurança

## Contribuição
O projeto está aberto para contribuições seguindo as diretrizes:

1. Fork e clone do projeto
2. Criação de branch para features
3. Commits semânticos
4. Testes e documentação
5. Pull Requests descritivos

## Autor

**Carlos Barros**
- GitHub: [@Carlinnn](https://github.com/Carlinnn)

## Licença

Este projeto está sob a licença MIT.

---

⭐ Se este projeto te ajudou, considere dar uma estrela!
