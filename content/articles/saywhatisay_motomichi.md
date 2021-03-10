---
title: Say What I Say
description: Remote collaboration with projection artist Motomichi Nakamura.
role: Tech Lead
img: /projects_images/saywhatisay/poster.jpg
alt: nice image
---

## Overview

**Say What I Say** is a project by projection artist <a href="https://www.motomichi.com/">Motomichi Nakamura</a>, in which visitors are welcomed to stand by a lectern placed in the center of a room and speak to a microphone. As visitors speak, (or scream if they wish), 4 animated faces projected onto balloons react to volume and frequency perceived from the voice and move their mouths simultaneously with the visitor. For this project I was contacted to remotely lead, assist and developed software for the installation. 

<div class="imgs">
<img src="/projects_images/saywhatisay/img_1.jpg">
<img src="/projects_images/saywhatisay/img_2.jpg">
</div>

Time was short and budget limited, so we decided to use 4 **RaspberryPi** devices and **Openframeworks**. One RaspberryPi was responsible for reading audio input and send control messages to the other RaspberryPi. Each RaspberryPi would be running a custom built video mapping application that would react to the received messages resulting on the artist desired effect. 

<div class="imgs">
<img src="/projects_images/saywhatisay/img_3.jpg">
<img src="/projects_images/saywhatisay/img_4.jpg">
</div>

I have kept helping Motomichi in some projects after collaborating with him on *Say What I Say*. 