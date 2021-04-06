---
title: Light Spa
description: Custom pipe bending system developed for a light art installation.
role: Tech Lead
img: /projects_images/lightspa/poster.jpg
alt: nice image
---

## Overview

**Light Spa** is an interactive installation by artist Daniel Sauter (http://danielsauter.com). The center piece of the installation is a structure built out of curved pipes. 

For this project I was asked to develop a system that would read information from a CAD file and output the setup (distance + force) that should be used on a pipe bending machine in order to reproduce the curvature of each of the pieces part of the 3D model. 

I used **Processing** to program this system. The availability of open source libraries that complement Processing's functionalities allowed to get the system reading information from a **Rhino** file right away. I used this data as input for the calculations that provided the final setup needed to obtain the curvature for each segment of the pipes. 

An encoder connected to an **Arduino** was used to update the information displayed by the system in real time. 
 
<div class="imgs">
<img src="/projects_images/lightspa/img_1.jpg">
<img src="/projects_images/lightspa/img_2.jpg">
</div>


<div class="imgs">
<img src="/projects_images/lightspa/img_3.jpg">
<img src="/projects_images/lightspa/img_4.jpg">
</div>

Although the final result was very close to the computer generated model, some pipes did need small adjustments in order to match their final shape.

The following video shows how the final interface looked and the information that could be obtained from it. 

<div class="imgs">
    <lazy-video-component
	source="/projects_images/lightspa/video_1.mp4"
        class="md:w-1/2 object-cover my-10 mx-auto border-gray border shadow-md"
    ></lazy-video-component>
</div>
