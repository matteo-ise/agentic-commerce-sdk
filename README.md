# agentic-commerce-sdk

<div align="center">
  <img src="https://img.shields.io/badge/Agentic-Commerce-19C332?style=for-the-badge" alt="Agentic Commerce" />
  <img src="https://img.shields.io/badge/Status-Pioneer-white?style=for-the-badge" alt="Status" />
  <img src="https://img.shields.io/badge/TypeScript-Ready-blue?style=for-the-badge&logo=typescript" alt="TypeScript" />
</div>


> Die Zukunft des B2B-Commerce ist nicht Mensch-zu-Mensch, sondern Agent-zu-Agent.

Kein PDF-Angebot. Kein Telefon. Kein Fax. Agenten verhandeln, bestellen und bezahlen direkt — in Millisekunden statt Tagen. Das **Agentic Commerce SDK** schlägt die Brücke zwischen der alten B2B-Welt (EDI, E-Mail-Bestellungen) und der neuen M2M (Machine-to-Machine) Economy.

## Warum dieses SDK?

Der B2B-Handel wird heute von ineffizienten, veralteten Systemen (EDI, PDFs, manuelle Freigaben) dominiert. Mit dem **Agentic Commerce SDK** verlagern wir die Interaktion von Menschen auf KI-Agenten, die über standardisierte Protokolle miteinander kommunizieren. 

- **Discovery:** Autonome Katalog- und Preisabfragen.
- **Cart:** Standardisiertes Warenkorb-Management für Agenten.
- **Negotiation:** Algorithmus-gestützte, vollautomatische Preisverhandlungen (Pactum AI Use Case, bis zu 35 Tage Payment Terms Extension).
- **Orders & Invoicing:** XRechnung und EDI-Kompatibilität für Legacy-B2B-Prozesse.

## Architektur & Protokolle

- **UCP (Universal Commerce Protocol):** Google-Standard für Katalog & Checkout (Partner: Shopify, Walmart).
- **ACP (Agentic Commerce Protocol):** OpenAI-Standard für protokollagnostischen Checkout via Shared Payment Tokens (SPT).
- **A2A (Agent-to-Agent):** Agent Cards (\`/.well-known/agent-card.json\`), JSON-RPC 2.0 & SSE Streaming.
- **EDI / XRechnung:** Bridge für Legacy-Systeme (EDIFACT) und gesetzliche Anforderungen in Deutschland (E-Rechnung mandatory ab 2028).

## Architektur-Übersicht

```mermaid
graph LR
    A[Agent 1 (Einkauf)] -->|Discovery| B(Katalog API)
    A -->|Negotiation| C[Agent 2 (Verkauf)]
    C -->|Order Confirmation| A
    C -->|XRechnung| D[Buchhaltung]
    A -->|Shared Payment Token| C
```

## Installation

\`\`\`bash
npm install @agentic-commerce/core
\`\`\`

## Code-Beispiel: Autonome Verhandlung

Zwei Agenten verhandeln dynamisch über Preis und Zahlungsbedingungen:

\`\`\`typescript
import { NegotiationEngine } from '@agentic-commerce/core';

const engine = new NegotiationEngine();
const result = await engine.negotiate({
  with: 'https://lieferant.de',
  items: [{ sku: 'PAPER-A4-500', quantity: 1000 }],
  config: {
    strategy: 'fair',
    priorities: ['price', 'payment_terms'],
    constraints: { max_price_per_unit: 3.50 },
    fallback: 'escalate_to_human'
  }
});
\`\`\`

## Code-Beispiel: EDI Integration

Verbindung zu Legacy-Lieferanten über EDIFACT:

\`\`\`typescript
import { EdiBridge } from '@agentic-commerce/edi-bridge';

const bridge = new EdiBridge();
// Generiert eine EDIFACT ORDERS Nachricht für den Legacy-Lieferanten
const edifact = bridge.generateEdifactOrders('ORD-12345');
\`\`\`


## 🚀 Quantum Leap Architecture: Game-Theoretic MCTS

LLMs sind schlechte Verhandler (Sycophancy). Wir trennen die Sprache von der Mathematik:
- **Monte Carlo Tree Search (MCTS):** Ein deterministischer Solver berechnet das Nash-Gleichgewicht und die Pareto-Front.
- **Rubinstein Bargaining:** Das LLM übersetzt nur die vom Solver berechneten harten Limits in B2B-Payloads. Der Agent ist mathematisch unfähig, unrentable Deals anzunehmen.


---

**Teil des Agentic Commerce Stack von Matteo Ise:**

- [well-known-mcp](https://github.com/matteo-ise/well-known-mcp) — Discovery-Standard für KI-Agenten
- [agent-wallet-sdk](https://github.com/matteo-ise/agent-wallet-sdk) — Unified Payment Infrastructure für Agenten
- [agent-governance](https://github.com/matteo-ise/agent-governance) — Audit, Compliance & Human-Escalation
- [mcp-deutschland](https://github.com/matteo-ise/mcp-deutschland) — MCP-Server für ELSTER, DATEV, XRechnung
- [mcp-handelsregister](https://github.com/matteo-ise/mcp-handelsregister) — Deutsches Handelsregister für Agenten
- [agentic-commerce-sdk](https://github.com/matteo-ise/agentic-commerce-sdk) — Agent-to-Agent Commerce
- [agentic-maturity-model](https://github.com/matteo-ise/agentic-maturity-model) — Reifegrad-Framework (Stufe 0→5)
- [kontorstack](https://github.com/matteo-ise/kontorstack) — Full-Stack Framework für agentische Unternehmen

[Matteo Ise auf GitHub](https://github.com/matteo-ise) · [X/Twitter](https://x.com/matteoise)
