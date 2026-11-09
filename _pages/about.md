---
permalink: /
title: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

# I build learning-based systems for real-world robot manipulation<br> from visual observations and minimal demonstrations.
<br>
I am a Robotics Software Engineering Intern at [AgRobotics](https://agrobotics.com/), working on perception and VLA training data for a dual-arm strawberry harvesting robot. I completed my M.S. in Robotics at the University of Minnesota, advised by [Prof. Karthik Desingh](https://karthikdesingh.com/) at the [Robotics Perception and Manipulation Lab](https://rpm-lab.github.io/), where I published first-author work in IEEE RA-L on category-level last-meter navigation.

<div style="display: flex; flex-wrap: wrap; gap: 12px; margin: 1.2rem 0;">
  <a href="/files/CV.pdf" class="btn btn--inverse"><i class="fas fa-download" aria-hidden="true" style="margin-right: 6px;"></i>Download CV</a>
  <a href="/files/Resume.pdf" class="btn btn--inverse"><i class="fas fa-download" aria-hidden="true" style="margin-right: 6px;"></i>Download Resume</a>
</div>

My long-term research goal is to develop **generalizable robot manipulation systems** that perform everyday tasks under severe **data constraints**. I am particularly interested in how unifying **vision, representation, and action** can push manipulation beyond highly structured and stationary settings.

## Research Directions

- **Data-Efficient Imitation Learning**  
  I study how robots can generalize from very few demonstrations by reasoning about correspondence between what they were shown and what they currently see. In my RA-L work, a dense score matrix between goal and current observations let a policy trained on a single object instance generalize across the entire category. I am now interested in extending this concept toward in-context imitation, where a policy maps a reference demonstration onto the current scene to decide the next action, serving as the low-level policy beneath a high-level reasoning model.

- **Mobile & Manipulation**  
  For robots to become part of everyday life, knowing how to complete a task is not enough; they also need to move through human spaces and position themselves to carry it out. Most manipulation policies assume a fixed base, while navigation models cannot guarantee the precision that manipulation needs to begin. My RA-L work addresses this gap through last-meter navigation, bringing a robot from the vicinity of an object into a precise, manipulation-ready pose. Next, I am interested in unifying last-meter navigation and manipulation on a humanoid platform as a single mobile manipulation system, while maintaining the performance of the manipulation policy.

## What I Build

- **Real-world data pipelines**  
  Systems that produce training data for imitation learning and VLA policies, including automated demonstration collection on Boston Dynamics Spot using AprilTag-based localization instead of teleoperation, VLM auto-labeling, and curation of noisy teleoperation data by analyzing robot states and actions to identify grasp events and isolate clean demonstrations.

- **Perception systems on robot hardware**  
  Vision pipelines built on foundation models such as DINOv2 and SAM2 for policy learning on Spot, and real-time object detection deployed on NVIDIA Jetson Thor within a ROS 2 stack.

- **Robot software infrastructure**  
  Libraries that make real robots usable for learning research, including SpotStack for perception, data collection, and policy deployment on Spot, and a manipulation toolkit with camera-to-robot calibration and grasp primitives built for a robotics course.

<details>
  <summary style="cursor: pointer; font-size: 0.95em; font-weight: 600;">
    Background and Experience
  </summary>

  <div style="margin-top: 12px;">

<p>
I completed my undergraduate studies in Mechanical Engineering, which provided a strong foundation in the physical principles underlying robotic systems, including <b>dynamics, control, and state estimation</b>. During this time, I served as the software lead of an Autonomous Underwater Vehicle (AUV) student team, where I was responsible for the design and integration of the software stack spanning perception, estimation, control, and navigation. This role involved extensive work with <b>embedded systems</b> and low-level programming, and gave me hands-on experience deploying autonomous robotic systems in real-world operating conditions rather than purely simulated settings.
</p>

<p>
In my master’s studies in Robotics, I shifted my focus toward learning-based robotic systems. I initially concentrated on robot perception, particularly vision, through advanced coursework in Robot Vision and Computer Vision, where I implemented projects on <b>visual servoing</b> and <b>monocular visual SLAM</b>. Building on this perception foundation, my master’s research explored learning-based manipulation and robot positioning. Through these works, I became interested in tightly integrating perception, representation, and action to enable robots to perform complex tasks in real-world environments under limited demonstrations and visual-only observations.
</p>

  </div>
</details>

## Contact Me

I am open to **PhD opportunities** and **research roles** in robot learning, manipulation, and real-world robotic systems.

Please feel free to reach out if you are interested in my work or would like to discuss potential research directions. I am always happy to chat about research ideas and collaborations that push the boundaries of robotics!
