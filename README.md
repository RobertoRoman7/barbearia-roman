# Barbearia Roman — site

Next.js 16 + React 19 + TypeScript + Tailwind CSS 4. Site 100% estático (sem banco de dados, sem login). Agendamento só pelo WhatsApp.

## Rodar no computador

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # gera a pasta /out pronta para hospedar
```

## Publicar

- **Vercel** (recomendado): importe a pasta/repositório e clique em Deploy.
- **Hospedagem comum** (Hostinger etc.): rode `npm run build` e envie o conteúdo da pasta `out/`.

Depois de ter o domínio, troque `url` em `src/config/site.ts`.

## O que editar (tudo em `src/config/site.ts`)

| Item | Campo |
| --- | --- |
| Instagram | `instagram: { handle: "...", url: "https://instagram.com/..." }` |
| Endereço | `location.address` e `location.city` |
| Botão "Como chegar" | `location.mapsUrl` (link do Google Maps) |
| Mapa na página | `location.mapEmbedUrl` (Google Maps → Compartilhar → Incorporar → valor do `src`) |
| Horários | `location.hours` (texto exibido + dias/horas usados pelo Google) |
| Preços / mensagens | lista `services` |

Enquanto um campo estiver `null`, o site mostra um espaço reservado ("Em breve" / `[ENDEREÇO DA BARBEARIA]`) e nunca um dado inventado. O link do Instagram e o botão "Como chegar" só ficam ativos quando preenchidos.

## Fotos e vídeos

Os 7 vídeos da barbearia já estão em `public/media/` (convertidos para MP4 H.264 720p, sem áudio, ~3,3 MB no total, cada um com capa .jpg). 6 estão na galeria e 1 na seção Sobre.

Para trocar ou adicionar:

1. Coloque os arquivos em `public/media/`.
2. Preencha `src` em `gallery` (Nosso Trabalho) e em `aboutMedia` (Sobre).

Vídeos: MP4 (H.264), 720p, até ~8 MB, de preferência sem áudio, com uma foto de capa em `poster`.
Eles rodam mudos e em loop, só carregam quando aparecem na tela e pausam ao sair dela — não pesam no carregamento inicial.
Para quem ativa "reduzir movimento" no celular, o vídeo não toca sozinho (aparecem os controles).

## Estrutura

```
src/config/site.ts        dados da barbearia (único arquivo a editar no dia a dia)
src/app/layout.tsx        SEO, Open Graph, dados estruturados (BarberShop)
src/app/opengraph-image   imagem de compartilhamento gerada no build
src/app/icon.svg          favicon
src/components/           Header, Hero, Services, Gallery, About, Booking, Contact, Footer, WhatsAppFloat
```
