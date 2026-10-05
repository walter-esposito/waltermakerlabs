---
title: "Robot con AI: i componenti e a che punto sono"
description: "Un robot bipede stampato in 3D con ESP32-S3, microfono, speaker e giroscopio. La distinta completa dei componenti e lo stato del progetto, episodio per episodio."
categoria: ai
tipo: progetto
pubDate: 2025-06-17
updatedDate: 2025-07-24
cover: ../../assets/robot-ai-otto.jpg
coverAlt: "Le prime parti stampate in 3D del robot bipede: corpo centrale e piedi"
tags:
  - "robot"
  - "esp32"
  - "otto diy"
  - "intelligenza artificiale"
shorts:
  - id: 8be2AgtM8AQ
    titolo: "Ep. 1 — Prima stampa 3D"
    nota: "Corpo centrale e piedi. 4 ore di stampa, 46 g di ABS, 0,92 € di costo totale."
  - id: K5iHXbcYXyE
    titolo: "Ep. 2 — Ultima stampa 3D"
    nota: "Le parti restanti in ABS arancione. 3 ore, 37 g, 0,87 €."
  - id: Sp4QND3rbZ0
    titolo: "Ep. 5 — Componenti pronti"
    nota: "Tutta l'elettronica sul banco e il cablaggio su basetta millefori."
  - id: 6M7kRb404Do
    titolo: "Ep. 6 — Primo programma e primi sensori"
    nota: "Prima versione del software, sensoristica di base e primi movimenti."
  - id: 96HZk9im5Vg
    titolo: "Ep. 7 — Microfono, speaker e occhi"
    nota: "Entrano l'audio in ingresso e in uscita, piu' il display che fa da occhi."
  - id: WIkgwmWOYr8
    titolo: "Ep. 8 — MPU6050 montato"
    nota: "Accelerometro e giroscopio pronti. E il bivio: prima camminare o prima parlare?"
  - id: e_j-5KIvhYw
    titolo: "Ep. 10 — Progettazione del PCB"
    nota: "Sbroglio e circuito stampato, per eliminare i fili volanti e compattare tutto."
draft: false
---

> 🚧 **Progetto in corso.** Questo articolo viene aggiornato man mano che il robot avanza. Lo stato qui sotto è fermo all'ultimo episodio pubblicato.

Il progetto è un **robot bipede stampato in 3D con l'intelligenza artificiale a bordo**: cammina, sente, parla e vede chi ha davanti. La base meccanica è il modello open source **Otto DIY**, il resto è elettronica montata e programmata da zero.

Questa pagina raccoglie la distinta completa dei componenti — quella che mi viene chiesta più spesso nei commenti — e lo stato di avanzamento.

## La distinta dei componenti

| Componente | A cosa serve |
|---|---|
| **ESP32-S3-WROOM** | Il cervello. Wi-Fi e Bluetooth integrati, abbastanza potenza per l'elaborazione audio |
| **PCA9685** | Driver a 16 canali per i servo, comandati via I²C |
| **Servo EMAX ES08AII** | I motori delle gambe |
| **MPU6050** | Giroscopio e accelerometro: dice al robot com'è orientato |
| **Microfono I²S INMP441** | L'orecchio, digitale |
| **Amplificatore I²S MAX98357A** | Pilota l'altoparlante |
| **Altoparlante 3 W 4 Ω** | La voce |
| **HC-SR04** | Sensore a ultrasuoni: distanza dagli ostacoli |
| **Display OLED 0,96"** | Gli occhi, e le espressioni |

<p class="avviso-affiliato">
<strong>Trasparenza:</strong> i link qui sotto sono affiliati Amazon. Se li usi io ricevo una piccola
commissione e tu non paghi di più.<br>
File STL: <a href="https://makerworld.com/it/models/1307980-otto-diy-biped-dancing-robot" rel="nofollow">Otto DIY biped dancing robot</a> ·
<a href="https://amzn.to/3G0NAGa" rel="sponsored nofollow">ESP32-S3-WROOM</a> ·
<a href="https://amzn.to/45uZ3YW" rel="sponsored nofollow">PCA9685</a> ·
<a href="https://amzn.to/4n4D5lM" rel="sponsored nofollow">servo EMAX ES08AII</a> ·
<a href="https://amzn.to/4ngKcrD" rel="sponsored nofollow">MPU6050</a> ·
<a href="https://amzn.to/3G7EPKp" rel="sponsored nofollow">microfono INMP441</a> ·
<a href="https://amzn.to/3TuHSiU" rel="sponsored nofollow">amplificatore MAX98357A</a> ·
<a href="https://amzn.to/45XYcjG" rel="sponsored nofollow">altoparlante 3 W</a> ·
<a href="https://amzn.to/4e8SUDV" rel="sponsored nofollow">HC-SR04</a> ·
<a href="https://amzn.to/4ek2Yu7" rel="sponsored nofollow">display OLED 0,96"</a>
</p>

## Perché proprio questi pezzi

**L'ESP32-S3 invece di un Arduino classico.** Se non sai da dove si parte, ne ho scritto [qui](https://arduinoproject.it/2011/03/04/cose-arduino/) e il primo sketch e' [questo](https://arduinoproject.it/2011/03/22/primo-esperimento-blink/). Qui pero' serviva qualcosa che gestisse audio e connettività senza schede aggiuntive. L'S3 ha Wi-Fi e Bluetooth integrati e abbastanza potenza per elaborare il suono: con un microcontrollore a 8 bit questo progetto non sarebbe partito.

**Il PCA9685 anche se l'ESP32 ha i suoi PWM.** Si potrebbero pilotare i servo direttamente, ma il PWM software è soggetto a jitter: il servo trema e il passo diventa irregolare. Il PCA9685 genera i segnali via hardware su un bus I²C a due fili, quindi i movimenti sono puliti e si risparmiano pin.

**Microfono e amplificatore entrambi I²S.** È la scelta che semplifica tutto: l'audio resta digitale dal microfono fino all'amplificatore, senza passare da convertitori analogici. Meno rumore e meno componenti.

**L'MPU6050 serve per camminare, non per decorazione.** (Se e' il tuo primo sensore, conviene partire da uno piu' semplice: ho spiegato la [fotoresistenza](https://arduinoproject.it/2011/06/27/fotoresistenza/) e il [sensore di temperatura LM35](https://arduinoproject.it/2011/07/19/lm35dz/) passo per passo.) Un bipede è instabile per natura. Senza sapere la propria inclinazione, un robot a due gambe può solo ripetere sequenze preregistrate e cadere appena il terreno non è perfetto. Giroscopio e accelerometro sono il prerequisito per qualsiasi camminata che si corregga da sola.

## Quanto costa la parte stampata

Il dato è preciso perché l'ho misurato sulle due stampe:

| | Episodio 1 | Episodio 2 |
|---|---|---|
| Materiale | ABS eSUN bianco | ABS AzureFilm arancione |
| Tempo | 4 ore | 3 ore |
| Filamento | 46 g | 37 g |
| Costo filamento | 0,60 € | 0,63 € |
| Costo energia | 0,32 € | 0,24 € |
| **Totale** | **0,92 €** | **0,87 €** |

Stampante: Anycubic Kobra 3 Combo. Meno di due euro di plastica per tutta la struttura — in un progetto del genere il costo è tutto nell'elettronica.

## A che punto è

La struttura è stampata, l'elettronica è cablata, il software gira con i sensori di base e il robot si muove. Audio in ingresso e in uscita funzionano, il display fa da occhi, l'MPU6050 è montato.

L'ultimo passo fatto è la **progettazione del PCB**: il cablaggio su basetta millefori funziona ma è fragile e ingombrante. Un circuito stampato rende tutto più compatto e toglie i fili volanti, che su un robot che cammina sono il primo punto di rottura.

## Il bivio aperto: prima camminare o prima parlare?

A questo punto il progetto si divide in due direzioni, e sono due problemi di natura diversa:

- **Camminare in autonomia** significa modelli di apprendimento per l'andatura, con il feedback del giroscopio a correggere l'equilibrio in tempo reale. Tutto a bordo, tutto in locale.
- **Parlare** significa integrare un modello linguistico, quindi una connessione di rete e latenza, ma restituisce subito qualcosa di spettacolare da vedere.

Non c'è una risposta ovvia. La camminata è il problema più interessante da risolvere; il parlato è quello che rende il robot *vivo* agli occhi di chi lo guarda.

---

Gli episodi sono Short, quindi brevi: qui sotto in ordine cronologico. Il progetto continua sul canale, e questa pagina si aggiorna con lui.
