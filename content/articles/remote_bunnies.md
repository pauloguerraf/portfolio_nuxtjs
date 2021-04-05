---
title: RemoteBunnies
description: Multi-agent phenomena mapping between physical environments.
role: Tech Lead
img: /posts_images/remote_bunnies/poster.jpg
---

## Overview

RemoteBunnies is a proof-of-concept design for multi-agent phenomena mapping between physical environments. RemoteBunnies relies on a sensor network and a tangible representational tool connected via an Extensible Messaging and Presence Protocol (XMPP) server. For demonstration purposes, the proposed system will be integrated to map field data of cottontail rabbits' foraging behavior onto an indoor environment. 

The RemoteBunnies system consists of three major elements: a sensor network. a tangible representational tool, and a XMPP server. The sensor network  supports data collection and monitoring for multiple agents in a physical environment. The tangible representational tool is used to map the data received from the sensor network into another physical environment. The XMPP server works as a one-way communication bridge between the sensor network and the tangible representational tool.

<div class="w-full text-center">
<img class="mx-auto" src="/posts_images/remote_bunnies/img_1.jpg">
</div>

In the Embedded Phenomena (EP) framework [1], simulated scientific phenomena are mapped to the physical space of the classroom and accessed through a small number of embedded and mobile "portals." Learners study these phenomena over periods of weeks, collecting data on the course of the phenomenon to answer a question or solve a problem. For my M.S. thesis, I developed RemoteBunnies, the technology base for an application that extends the EP framework in two ways. First, it replaces the simulation with a live data stream drawn from a sensor network installed in a natural habitat: a small urban field that hosts a population of cottontail rabbits. (The data stream reflects the sequence of individual rabbits' visits to a collection of experimental "food patches" that can be configured within the habitat.) Second, rather than representing the phenomena in the classroom through display portals, we reflect the rabbits' foraging patterns using a set of tiny robots, with each robot serving as an avatar for an individual rabbit. This results in a live multi-agent mapping between the two physicals environments. 

<div class="imgs">
<img src="/projects_images/remote_bunnies/img_2.jpg">
<img src="/projects_images/remote_bunnies/img_3.jpg">
</div>

## Implementation
### Active RFID Sensor Network  
An active RFID sensor network has been implemented to support the remote real-time monitoring of multi-agent natural phenomena. Each sensor node in the network consists of an active RFID reader protected by a weather resistance case. The readers are networked in star configuration and connected to an XMPP server via a Power over Ethernet (PoE) switch. The PoE switch provides power to each of the RFID readers in the network. Small, lightweighted active-RFID tags are to be used by the monitored agents.

### Tangible Robots
Two prototype tangible robots have been built for demonstration purposes. The robots are equipped with an Arduino Pro Mini 328 board, a motor driver integrated circuit, and three photoresistive light sensors. The sensors face down and are lined-up in front of the robot. Each robot have a diameter of 5cm and is powered by a 3.7 Volts (V) lithium battery. Two 3.3V direct current (DC) motors enable differential movement control of the robot. A fiducial marker is placed on top of each robot for identification. Robots have been programmed to move based on the light values detected by their sensors. The program follows a simple line-following algorithm. This algorithm allows to control the robot either by placing light spots below each sensor or by drawing lines from the robot towards a destination point.
<div class="imgs">
<img src="/projects_images/remote_bunnies/img_4.jpg">
<img src="/projects_images/remote_bunnies/img_5.jpg">
</div>

### Software
  
*Monitoring Agent*  
A monitoring agent has been implemented to query the sensor network and report RFID tags arrivals to and departures from each sensor node. This data is transmitted to the robot control agent via XMPP messages. The monitoring agent also implements a software-based solution developed as part of this work to better define the detection range around an active RFID reader. This solution registers the average received signal strength indicator (RSSI) of each tag for all the RFID readers used in the sensor network. The resulting data is used to build a series of hash maps holding tag-specific RSSI threshold values. The monitoring agent references these data each time a RFID tag transmission is received, and decides if the tag is within the detection range of the RFID reader.

*Robot Control Agent*  
Based on the interface setups used in [2] and [3], a computer vision-based system has been implemented to control the tangible robots. The system relies on reacTIVision, a framework that allows fast tracking of fiducial markers in real-time [4]. The fiducial markers placed on the robot allow the system to continuously provide information on each robot's location and orientation. Based on the idea of projection-based robot control in [5], the agent uses graphics displayed on a LCD screen to control the robots via their light sensors.

<div class="imgs">
	 <video class="border-gray border shadow-md p-0 m-0 outline-none" src="/projects_images/remote_bunnies/video_1.mp4" crossorigin="anonymous" autoplay="true" loop="true" muted="true" playsinline></video>
<video class="border-gray border shadow-md p-0 m-0 outline-none" src="/projects_images/remote_bunnies/video_2.mp4" crossorigin="anonymous" autoplay="true" loop="true" muted playsinline></video>

</div>

<div class="citations">
<li>[1] T. Moher, “Embedded phenomena: supporting science learning with classroom-sized distributed simulations,” in Proceedings of the SIGCHI conference on Human Factors in computing systems, New York, NY, USA, 2006, pp. 691–700.</li>  
<li>[2] E. W. Pedersen and K. Hornbæk, “Tangible bots: interaction with active tangibles in tabletop interfaces,” in 
Proceedings of the 2011 annual conference on Human factors in computing systems, New York, NY, USA, 2011,
pp. 2975–2984. </li>
<li>[3] A. Krzywinski, H. Mi, W. Chen, and M. Sugimoto, “RoboTable: a tabletop framework for tangible interaction with robots in a mixed reality,” in Proceedings of the International Conference on Advances in Computer Enterntainment Technology, New York, NY, USA, 2009, pp. 107–114.</li>
<li>[4] M. Kaltenbrunner and R. Bencina, “reacTIVision: a computer-vision framework for table-based tangible interaction,” in Proceedings of the 1st international conference on Tangible and embedded interaction, New York, NY, USA, 2007, pp. 69–74. </li>
<li>[5] J. Leitner, M. Haller, K. Yun, W. Woo, M. Sugimoto, and M. Inami, “IncreTable, a mixed reality tabletop game experience,” in Proceedings of the 2008 International Conference on Advances in Computer Entertainment Technology, New York, NY, USA, 2008, pp. 9–16.</li>
</div>


