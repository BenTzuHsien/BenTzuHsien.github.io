---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

<div style="display: flex; justify-content: space-between; align-items: center; margin-top: 20px; margin-bottom: 20px;">
  <div>
    <a href="{{ base_path }}/files/CV.pdf" class="btn btn--primary">Download CV as PDF</a>
  </div>
</div>

Education
======
* M.S. in Robotics, University of Minnesota, 2026 (expected)
* B.S. in Mechanical Engineering, National Yang Ming Chiao Tung University, 2022

Experience
======
* **Research Graduate Student**, University of Minnesota \| *09.2024 - Present*
  * Advisor: [Prof. Karthik Desingh](https://karthikdesingh.com/)
  * Robotics Perception and Manipulation Lab
  * Led the system design, real-robot data collection, and experimental evaluation for a research project resulting in an [arXiv preprint](https://arxiv.org/abs/2512.11173) on category-level visual navigation for mobile manipulation.
  * Built and deployed pipelines for constructing and navigating semantically enhanced topological maps using foundation models, enabling spatially-aware planning and downstream manipulation on Boston Dynamics Spot robot.
  * Created [SpotStack](https://github.com/BenTzuHsien/SpotStack), an open-source utility repository to streamline interface development and programming workflows for Boston Dynamics Spot robot, accelerating research iteration across the lab.

* **Teaching Assistant**, University of Minnesota \| *09.2025 - 01.2026*
  * Course: CSCI 5561 Computer Vision
  * Designed and maintained an automated grading system for coding assignments, enabling scalable and consistent evaluation of student submissions.
  * Held weekly office hours and provided technical guidance on computer vision algorithms, deep learning models, and course projects.
  * Contributed to midterm exam design and grading, and managed overall course grading logistics.
    <br>
    <summary style="cursor: pointer; color: #52adc8; font-weight: bold;">
      <i class="fas fa-quote-left"></i> Selected Student Feedback <i class="fas fa-quote-right"></i>
    </summary>
    <div style="padding: 10px; border-left: 3px solid #52adc8; margin-top: 5px; font-size: 0.9em; font-style: italic;">
      <p style="margin: 0 0 8px 0;">
      "Ben's patience during office hours and detailed guidance on assignments helped me understand not just the 'how,' but also the 'why' behind each method."
      </p>
      <p style="margin: 0 0 8px 0;">
      "Ben should be acknowledged by the department for his commitment to his students' learning, and I would like to have him as my TA for another course!"
      </p>
      <p style="margin: 0;">
      "Tzu-Hsein Lee, thank you for the fact you were a nice person to talk to."
      </p>
    </div>
    
    <details>
      <summary style="cursor: pointer; font-weight: bold;">
        View Full Student Feedback (Official SRT Results):
      </summary>

      <div style="margin-top: 10px;">
        <img src="/images/TA_Feedback_2025Fall_CSCI5561.png" alt="Screenshot of TA Feedback" style="width: 100%; border: 1px solid #ddd; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      </div>
    </details>

* **Intern**, Industrial Technology Research Institute \| *11.2022 - 02.2023*
  * Established an autonomous grinding line for irregularly shaped water faucets by independently designing force-adaptive trajectories using dual-robot arms and a force feedback sensor.
  * Improved on-site calibration efficiency by designing a coordinate transformation algorithm for adaptive trajectory tuning.

* **Software Lead**, NYCU Autonomous Underwater Vehicle (AUV) Team \| *02.2021 - 09.2022*
  * Spearheaded the design and implementation of the software architecture, control system, and navigation.
  * Established a modular high-level/low-level robotics system by using an embedded system (STM32) for low-level attitude and motion control, and deploying ROS on Raspberry Pi and Jetson Nano for task planning and navigation.
  * Reduced high-frequency noise in attitude estimation by 10\% through implementing a gradient descent-based Madgwick filter on embedded hardware.
  * Developed a real-time obstacle-aware navigation system by employing A* algorithm and sonar-based localization.
  
Skills
======
* **Core Competencies:** Mobile Manipulation, Imitation Learning, Robot Perception, SLAM, Motion Planning, Embedded Systems
* **Programming Languages:** Python, C++, C, JavaScript
* **Frameworks & Libraries:** PyTorch, ROS (Robot Operating System), Qt, MySQL
* **Tools & Platforms:** Docker, Git, Linux, Gazebo, SolidWorks, Boston Dynamics Spot, STM32

Publications
======
<ul>
  <li>
    <div class="list__item">
      <article class="archive__item" itemscope itemtype="http://schema.org/CreativeWork">
        <h3 class="archive__item-title" itemprop="headline" style="margin-top: 0;">
          <a href="https://rpm-lab-umn.github.io/category-level-last-meter-nav/" rel="permalink">Learning Category-level Last-meter Navigation from RGB Demonstrations of a Single Instance</a>
        </h3>
        <p class="archive__item-excerpt" itemprop="description">
          <strong>Tzu-Hsien Lee</strong>, Fidan Mahmudova, Karthik Desingh. 
          <br>
          <i>arXiv preprint arXiv:2512.11173</i>, 2025.
        </p>
      </article>
    </div>
  </li>
</ul>
  
Presentation
======
<ul>
  <li>
    <div class="list__item">
      <article class="archive__item" itemscope itemtype="http://schema.org/CreativeWork">
        
        <h3 class="archive__item-title" itemprop="headline" style="margin-top: 0;">
          <a href="/files/MWRW2025_poster.pdf" rel="permalink">Learning Object-Centric Local Navigation from RGB Demonstrations</a>
        </h3>
        
        <p class="page__meta" style="margin: 5px 0 0 0; font-size: 0.85em;">
          <i class="fa fa-clock" aria-hidden="true"></i> June 2025
        </p>
        
        <p class="archive__item-excerpt" itemprop="description" style="margin-top: 5px;">
          <strong>Poster Presentation</strong> at  <i><a href="https://www.ttic.edu/mwrw/">2025 Midwest Robotics Workshop (MWRW)</a></i>, TTIC, Chicago, IL
        </p>
        
      </article>
    </div>
  </li>

  <li>
    <div class="list__item">
      <article class="archive__item" itemscope itemtype="http://schema.org/CreativeWork">
        
        <h3 class="archive__item-title" itemprop="headline" style="margin-top: 0;">
          <a href="/files/G4_Student_Lecture_01.pdf" rel="permalink">RGB-D Networks</a>
        </h3>
        
        <p class="page__meta" style="margin: 5px 0 0 0; font-size: 0.85em;">
          <i class="fa fa-clock" aria-hidden="true"></i> November 2024
        </p>
        
        <p class="archive__item-excerpt" itemprop="description" style="margin-top: 5px;">
          <strong>Student Lecture</strong> at <i><a href="https://rpm-lab.github.io/CSCI5980-F24-DeepRob/">CSCI 5980: Deep Learning for Robot Manipulation</a></i>, University of Minnesota, Minneapolis, MN
        </p>
        
      </article>
    </div>
  </li>
</ul>
  
<!-- Teaching
======
  <ul>{% for post in site.teaching reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul> -->
  
<!-- Service and leadership
======
* Currently signed in to 43 different slack teams -->
