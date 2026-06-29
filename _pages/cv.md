---
layout: archive
title: "CV / Resume"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

<div style="display: flex; gap: 20px; margin-top: 20px; margin-bottom: 20px;">
  <a href="/files/CV.pdf" class="btn btn--inverse"><i class="fas fa-download" aria-hidden="true" style="margin-right: 6px;"></i>Download CV as PDF</a>
  <a href="/files/Resume.pdf" class="btn btn--inverse"><i class="fas fa-download" aria-hidden="true" style="margin-right: 6px;"></i>Download Resume as PDF</a>
</div>

Education
======
* M.S. in Robotics, University of Minnesota, 2026 (expected)
* B.S. in Mechanical Engineering, National Yang Ming Chiao Tung University, 2022

Skills
======
* **Robot Learning:** Data-Efficient Imitation Learning, Vision-Based Manipulation, Robot Perception
* **Robotics Engineering:** SLAM, Motion Planning, State Estimation, Embedded Systems
* **Programming Languages:** Python, C++, C, JavaScript
* **Software & Tools:** PyTorch, ROS, Gazebo, OpenCV, Qt, Git, Docker, SolidWorks
* **Robotics Platforms & Systems:** Boston Dynamics Spot, FANUC robots, STM32, Raspberry Pi, Jetson Nano

Publications
======
<ul>
  <li>
    <div class="list__item">
      <article class="archive__item" itemscope itemtype="http://schema.org/CreativeWork">
        <h3 class="archive__item-title" itemprop="headline" style="margin-top: 0;">
          <a href="https://rpm-lab-umn.github.io/category-level-last-meter-nav/" rel="permalink">Learning Category-level Last-meter Navigation from RGB Demonstrations of a Single-instance</a>
        </h3>
        <p class="archive__item-excerpt" itemprop="description">
          <strong>Tzu-Hsien Lee</strong>, Fidan Mahmudova, Karthik Desingh. 
          <br>
          <i>IEEE Robotics and Automation Letters (RA-L)</i>, 2026. doi: <a href="https://doi.org/10.1109/LRA.2026.3707352" rel="permalink">10.1109/LRA.2026.3707352</a>
        </p>
      </article>
    </div>
  </li>
</ul>
  
Presentations
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

Experience
======
* **Graduate Researcher**, University of Minnesota \| *09.2024 - Present*
  * Advisor: [Prof. Karthik Desingh](https://karthikdesingh.com/)
  * [Robotics Perception and Manipulation Lab](https://rpm-lab.github.io/)
  * First-authored [RA-L paper (2026)](https://rpm-lab-umn.github.io/category-level-last-meter-nav/) on category-level last-meter navigation for mobile manipulation, achieving 89.42% success on unseen instances by training goal-conditioned imitation learning policies on multi-view RGB demonstrations from a single object instance, generalizing across the entire category.
  * Designed the policy architecture with a frozen DINOv2 vision encoder, language-driven SAM2 segmentation, and a score-matrix decoder that captures spatial correlation between current and goal observations for action prediction.
  * Engineered an automated data collection pipeline using AprilTag-based localization to generate expert trajectories, eliminating manual teleoperation for behavior cloning.
  * Accelerated real-world robot learning research by designing and implementing [SpotStack](https://github.com/BenTzuHsien/SpotStack), a modular software library for perception integration, data collection, and policy deployment on Boston Dynamics Spot.
  * Built [semantic topological mapping pipelines](https://github.com/BenTzuHsien/sentmap-implementation) with vision-language foundation models for semantic-aware navigation and downstream manipulation on Boston Dynamics Spot.

* **Robotics Course Developer**, University of Minnesota \| *01.2026 - 05.2026*
  * Course: *CSCI 5551 Introduction to Intelligent Robotic Systems*
  * Designed and engineered a 10-stage real-robot manipulation curriculum on a 6-DoF Lite6 arm and ZED 2i stereo camera, covering arm kinematics, frame transforms, and perception-to-manipulation learning.
  * Enabled rapid development of vision-based manipulation pipelines by building reusable software infrastructure, including AprilTag-based camera-to-robot calibration, grasp primitives, and camera wrapper APIs.
  * Implemented reference solutions for zero-shot target selection and 6D object pose estimation using SAM-based segmentation and oriented bounding box fitting on point clouds.
  * Improved usability and reproducibility by authoring comprehensive 20-page [technical documentation](/files/experiences/CSCI5551_Robot_Challenge.pdf) and [starter templates](https://github.com/BenTzuHsien/robot-manipulation-kit).

* **Teaching Assistant**, University of Minnesota \| *09.2025 - 01.2026*
  * Course: *CSCI 5561 Computer Vision*
  * Designed and maintained an automated grading system for coding assignments, enabling scalable and consistent evaluation of student submissions.
  * Held weekly office hours and provided technical guidance on computer vision algorithms and deep learning methods, including feature extraction, image registration, scene recognition, and CNN implementation.
  * Contributed to midterm exam design and grading, and managed overall course grading logistics.
    <br>
    <summary style="cursor: pointer; font-weight: bold; font-size: 0.9em">
      <i class="fas fa-quote-left"></i> Selected Student Feedback <i class="fas fa-quote-right"></i>
    </summary>
    <div style="padding: 10px; border-left: 3px solid; margin-top: 5px; font-size: 0.9em; font-style: italic;">
      <p style="margin: 0 0 8px 0;">
      "Ben's patience during office hours and detailed guidance on assignments helped me understand not just the 'how,' but also the 'why' behind each method."
      </p>
      <p style="margin: 0 0 8px 0;">
      "Ben should be acknowledged by the department for his commitment to his students' learning, and I would like to have him as my TA for another course!"
      </p>
      <p style="margin: 0;">
      "Tzu-Hsien Lee, thank you for the fact you were a nice person to talk to."
      </p>
    </div>
    
    <details>
      <summary style="cursor: pointer; color: #52adc8; font-size: 0.9em">
        View Full Student Feedback (Official SRT Results):
      </summary>

      <div style="margin-top: 10px;">
        <img src="/images/TA_Feedback_2025Fall_CSCI5561.png" alt="Screenshot of TA Feedback" style="width: 100%; border: 1px solid #ddd; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      </div>
    </details>

* **Robotics Intern**, Industrial Technology Research Institute \| *11.2022 - 02.2023*
  * Established an autonomous grinding production line for irregularly shaped water faucets by designing force-adaptive trajectories using a robot arm and a force feedback sensor.
  * Improved on-site calibration efficiency by developing a coordinate transformation algorithm for adaptive trajectory tuning.

* **Software Lead**, NYCU Autonomous Underwater Vehicle (AUV) Team \| *02.2021 - 09.2022*
  * Spearheaded the design and implementation of the software architecture, control system, and navigation, winning Silver Medal at the 2021 Intelligent Innovation Contest and qualifying for SAUVC 2022 (93 teams, 19 countries).
  * Established a modular high-level/low-level robotics system by using an embedded system (STM32) for low-level attitude and motion control, and deploying ROS on Raspberry Pi and Jetson Nano for task planning and navigation.
  * Reduced high-frequency noise in attitude estimation by 10% through implementing a gradient descent-based Madgwick filter on embedded hardware.
  * Developed a real-time obstacle-aware navigation system by employing A* algorithm and sonar-based localization.

Leadership
======
* **Appointed Treasurer**, NYCU Student Association \| *01.2021 - 09.2021*
  * Allocated and managed \$30,000 budget, approved and recorded all financial transactions, and provided monthly financial reports to the Student Council.