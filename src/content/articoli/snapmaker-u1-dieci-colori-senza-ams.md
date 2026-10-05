---
title: "Snapmaker U1: oltre 10 colori senza AMS, come si fa"
description: "Il sistema toolchange permette di superare i limiti dell'AMS. Come impostare una stampa con piu di dieci colori e quanto costa in tempo."
categoria: stampa-3d
tipo: tutorial
pubDate: 2026-03-02
cover: ../../assets/snapmaker-u1-dieci-colori-senza-ams.jpg
coverAlt: "Snapmaker U1: oltre 10 colori senza AMS, come si fa"
videoId: C3DVJdYKHy0
videoDurata: PT12M50S
tags:
  - "snapmaker"
  - "stampa 3d"
draft: false
---

Con quattro filamenti caricati si possono stampare **dieci colori e oltre**, senza AMS e senza nessun
sistema di cambio automatico aggiuntivo. Non e' un trucco: e' una funzione della versione beta di Orca
Slicer ottimizzata per Snapmaker.

## Come e' possibile

L'intuizione sta nel distinguere due cose che di solito vengono confuse: **quanti filamenti sono
caricati** e **quanti colori compaiono nel pezzo finito**.

Una stampa non usa tutti i colori contemporaneamente lungo tutta l'altezza. Molti modelli multicolore
usano un certo gruppo di colori nei primi strati e un gruppo diverso piu' in alto. Se lo slicer sa in
quale momento un colore smette di servire, puo' pianificare un cambio manuale di bobina in quel punto
preciso, liberando una testa per un colore nuovo.

Quattro teste diventano cosi' quattro *slot* riutilizzabili lungo l'asse Z, non quattro colori fissi.

## Cosa serve

- La build beta di Orca Slicer ottimizzata per Snapmaker, scaricabile dalla pagina delle release:
  <a href="https://github.com/ratdoux/OrcaSlicer-FullSpectrum/releases" rel="nofollow">OrcaSlicer FullSpectrum</a>
- Una Snapmaker U1 con le quattro teste
- I filamenti che intendi usare, pronti per il cambio al volo

## Il vantaggio rispetto a un AMS

Un AMS raggiunge molti colori ma paga un pedaggio a ogni singolo cambio: lo spurgo dell'ugello. Qui i
cambi di colore *durante* la stampa continuano a essere cambi utensile, quindi senza spurgo; l'unico
intervento in piu' e' la sostituzione manuale della bobina nei punti pianificati.

In pratica: **piu' colori, stesso spreco di prima**, in cambio di qualche minuto di presenza.

## Limiti da conoscere prima di provarci

E' una beta, e si comporta come tale. Vanno messi in conto tre vincoli:

- **Devi essere presente** al momento del cambio bobina. Una stampa di dieci ore con tre cambi
  pianificati non e' una stampa che lanci prima di uscire.
- **Il modello deve prestarsi.** Se tutti e dieci i colori sono distribuiti su tutta l'altezza, la
  tecnica non si applica: serve una separazione sull'asse Z.
- **E' software beta.** Vale la regola di sempre: non usarlo per una stampa lunga che non puoi
  permetterti di perdere, finche' non hai preso le misure con qualcosa di piccolo.

<p class="avviso-affiliato">
<strong>Trasparenza:</strong> i link di acquisto qui sotto sono affiliati. Se li usi, io ricevo una
piccola commissione e tu non paghi di piu'.
<a href="https://snapmaker.sjv.io/4aPQGM" rel="sponsored nofollow">Snapmaker U1 sul sito ufficiale</a>
&mdash; codice sconto 20&euro;: <code>waltermaker20</code> &middot; codice sconto 5%:
<code>walter_esposito-1-1</code>.
</p>
