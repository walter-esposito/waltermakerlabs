---
title: "Snapmaker U1: 10+ colours without an AMS, here's how"
description: "A toolchanger can go past the limits of an AMS. How to set up a print with more than ten colours, and what it costs you in time and attention."
categoria: stampa-3d
tipo: tutorial
pubDate: 2026-03-02
cover: ../../assets/snapmaker-u1-dieci-colori-senza-ams.jpg
coverAlt: "Snapmaker U1: more than ten colours without an AMS"
videoId: C3DVJdYKHy0
videoDurata: PT12M50S
originale: snapmaker-u1-dieci-colori-senza-ams
tags:
  - "snapmaker"
  - "3d printing"
---

With four filaments loaded you can print **ten colours and more**, with no AMS and no additional automatic changing system. It isn't a trick: it's a feature of the beta build of Orca Slicer optimised for Snapmaker.

## How it's possible

The insight is separating two things that usually get conflated: **how many filaments are loaded** and **how many colours appear in the finished part**.

A print doesn't use every colour simultaneously through its full height. Many multicolour models use one group of colours in the lower layers and a different group further up. If the slicer knows at which point a colour stops being needed, it can schedule a manual spool swap at exactly that moment, freeing a head for a new colour.

Four heads become four reusable *slots* along the Z axis, rather than four fixed colours.

## What you need

- The Snapmaker-optimised beta build of Orca Slicer, from the releases page:
  <a href="https://github.com/ratdoux/OrcaSlicer-FullSpectrum/releases" rel="nofollow">OrcaSlicer FullSpectrum</a>
- A Snapmaker U1 with all four heads
- The filaments you intend to use, ready for a swap on the fly

## The advantage over an AMS

An AMS reaches many colours but pays a toll on every single change: purging the nozzle. Here the colour changes *during* the print are still tool changes, so there's no purge; the only extra work is swapping a spool by hand at the planned points.

In practice: **more colours, the same waste as before**, in exchange for a few minutes of your presence.

## Limits to know before you try it

It's a beta, and it behaves like one. Budget for three constraints:

- **You have to be there** when the spool swap comes up. A ten-hour print with three scheduled swaps is not a print you start and then go out.
- **The model has to suit it.** If all ten colours are spread across the full height, the technique doesn't apply: you need separation along Z.
- **It's beta software.** The usual rule stands: don't use it for a long print you can't afford to lose, until you've found your feet on something small.

<p class="avviso-affiliato">
<strong>Disclosure:</strong> the purchase links below are affiliate links. If you use them I receive a
small commission and you pay no more.
<a href="https://snapmaker.sjv.io/4aPQGM" rel="sponsored nofollow">Snapmaker U1 on the official site</a>
&mdash; &euro;20 discount code: <code>waltermaker20</code> &middot; 5% discount code:
<code>walter_esposito-1-1</code>.
</p>
