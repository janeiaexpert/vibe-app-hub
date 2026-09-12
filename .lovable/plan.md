# Adicionar abas Meus sistemas e Meus sites

## O que será feito
- Adicionar **Meus sistemas** e **Meus sites** à navegação principal, com acesso também no celular.
- Criar uma página própria para cada aba, mantendo pesquisa, filtros, ordenação, favoritos, edição e arquivamento.
- Organizar automaticamente os cadastros existentes: ferramentas internas, APIs, apps mobile e desktop aparecem em **Meus sistemas**; projetos Web voltados ao público aparecem em **Meus sites**.
- Manter **Meus apps** como a visão completa de todos os projetos.
- Ajustar títulos, mensagens vazias e metadados de cada nova página.

## Detalhes técnicos
- Reutilizar o explorador atual com um filtro de coleção, sem duplicar dados nem alterar o cadastro existente.
- Criar as rotas protegidas `/sistemas` e `/sites` com metadados próprios.
- Ajustar a navegação móvel para acomodar cinco abas sem sobreposição.
- Validar as novas páginas no desktop e no celular.
