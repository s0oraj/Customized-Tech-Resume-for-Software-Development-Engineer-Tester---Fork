import React from 'react';
import { Header } from './sections/Header';
import { Education } from './sections/Education';
import { Skills } from './sections/Skills';
import { Experience } from './sections/Experience';
import { Projects } from './sections/Projects';
import { Achievements } from './sections/Achievements';
import { Research } from './sections/Research';
import { Hackathons } from './sections/Hackathons';
import { AndroidDev } from './sections/AndroidDev';
export function Resume() {
  return <div className="w-full max-w-5xl mx-auto text-gray-200 py-6 px-4 sm:px-6">
      <Header />
      <div className="mt-6">
        <div className="mb-6">
          <Education />
        </div>
        <div className="mb-6">
          <Skills />
        </div>
        <div className="mb-6">
          <Experience />
        </div>
        <div className="mb-6">
          <Projects />
        </div>
        <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Achievements />
          </div>
          <div>
            <Hackathons />
          </div>
        </div>
        <div className="mb-6">
          <Research />
        </div>
        <div className="mb-6">
          <AndroidDev />
        </div>
      </div>
    </div>;
}