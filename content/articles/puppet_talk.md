---
title: PuppetTalk
description: Voice as input to interact with puppets.
role: Tech Lead
img: /projects_images/puppet_talk/poster.jpg
---

## Overview

PuppetTalk is an interactive installation that invites visitors to use their voice to control two string puppets. The installation relies on pitch to movement mapping and aims to engage visitors in playful interaction while exploring the use of voice and ambient sounds in puppetry.

We live in a time in which technology has made available new communication channels that are constantly changing the quality of social interaction in our lives. "Our networked life allows us to hide from each other, even as we are tethered to each other. We'd rather text than talk" [1]. PuppetTalk turns to puppetry as a resource to engage visitors in the joy of eye-to-eye, oral communication. The installation relies on the pitch of sound signals to trigger the movements of two puppets. One puppet reacts only to high pitch sounds, while another puppet reacts only to low pitch sounds. By having puppets respond to sound input with movements that resemble a dialogue between two people, the installation builds a communication channel to encourage both: interactions between visitors and the installation, and interactions between visitors themselves.

The main goal of PuppetTalk is to orchestrate playful, momentary, and unexpected interactions between visitors. The use of humanlike puppets aims to facilitate such interactions by supporting more natural and intense connections with and through the puppets. In addition, PuppetTalk allows for dialogues between puppets to take place even when there are no visitors interacting with them. By reacting to ambient music and sounds, the installation continuously invites visitors to interact with it.

<div class="imgs">
<img src="/projects_images/puppet_talk/img_1.jpg">
<img src="/projects_images/puppet_talk/img_2.jpg">
</div>

<div class="imgs">
<img src="/projects_images/puppet_talk/img_3.jpg">
<img src="/projects_images/puppet_talk/img_4.jpg">
</div>

### Implementation

PuppetTalk consists of 2 string puppets, 4 servomotors, 2 stepper motors, 1 Arduino board, and 1 computer. A pitch detection software program developed using **openFrameworks**, processes the audio signals captured
by the computer's microphone. The software program extracts pitch information out of the audio signals and classifies them as low or high pitch sounds. Based on this classification, control signals are sent to the **Arduino** board, which in turn controls the motors that move the strings of the puppets accordingly.
<div class="imgs">
    <lazy-video-component
	showcontrols='true' source="/projects_images/puppet_talk/video_1.mp4"
        class="md:w-1/2 object-cover my-10 border-gray border shadow-md"
    ></lazy-video-component>
<lazy-video-component
	showcontrols='true' source="/projects_images/puppet_talk/video_2.mp4"
        class="md:w-1/2 object-cover my-10 border-gray border shadow-md"
    ></lazy-video-component>
</div>
<div class="citations">
<li>[1] Turkle, S. Alone Together: Why We Expect More
from Technology and Less from Each Other. Basic
Books, New York, NY, USA, 2011.</li>  
</div>
