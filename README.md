# Alair Informática

Site institucional e portfólio profissional de **Alair Informática**, com foco em desenvolvimento web, sites profissionais e sistemas sob medida.

## Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Lucide React
- Motion

## Desenvolvimento

```bash
npm install
npm run dev
```

O servidor de desenvolvimento utiliza a porta `3000`.

## Validação

```bash
npm run lint
npm run typecheck
npm run build
npm run preview
```

## Variáveis de ambiente

Copie `.env.example` para `.env.local` e preencha somente as variáveis realmente utilizadas pelo projeto. **Nunca versione segredos ou chaves privadas.**

## Estrutura

- `src/components` — componentes de interface
- `src/data` — conteúdo estruturado do site
- `src/utils` — utilitários compartilhados
- `src/types.ts` — tipos TypeScript
- `public` — arquivos públicos e metadados de rastreamento

## Qualidade e segurança

A branch `main` é tratada como produção. O desenvolvimento e a manutenção devem ocorrer em branches de trabalho, preferencialmente via Pull Request.

O projeto não deve apresentar métricas, clientes, depoimentos ou resultados que não possam ser comprovados. Conteúdo demonstrativo deve ser identificado como tal.

## Deploy

O projeto é compatível com hospedagem estática baseada em Vite. Antes de publicar uma alteração, execute lint, typecheck e build e valide a aplicação no ambiente de preview.
