import React from 'react';
import { SectionTitle } from '../ui/SectionTitle';
import { ExternalLinkIcon } from 'lucide-react';
export function Achievements() {
  return <div>
      <SectionTitle>Achievements</SectionTitle>
      <div className="bg-gray-900 p-4 rounded mt-3">
        <ul className="space-y-3">
          <li>
            <div className="flex justify-between items-start">
              <h3 className="text-gray-200 font-semibold text-sm">
                IIT Kanpur Research Internship Offer
              </h3>
              <span className="text-[#5DC22D] text-xs">01/2024</span>
            </div>
            <p className="text-xs text-gray-400 mt-1">
              Offered a Research internship by Prof. Tushar Sandhan from IIT
              Kanpur to work on Image segmentation of the heart for 3D heart
              model generation.
            </p>
          </li>
          <li>
            <div className="flex justify-between items-start">
              <h3 className="text-gray-200 font-semibold text-sm">
                Amazon & IEEE
              </h3>
              <span className="text-[#5DC22D] text-xs">04/2023</span>
            </div>
            <p className="text-xs text-gray-400 mt-1">
              Ranked 228 globally out of 30,000+ teams in the Amazon ML
              Challenge 2023
            </p>
            <div className="flex flex-wrap gap-1 mt-1">
              <a href="https://www.kaggle.com/code/umitsahoo/nlp-with-regression/notebook" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-xs bg-gray-800 hover:bg-gray-700 text-gray-300 px-1.5 py-0.5 rounded">
                <ExternalLinkIcon size={8} className="mr-1 text-[#5DC22D]" />
                Python Code
              </a>
            </div>
            <p className="text-xs text-gray-400 mt-1">
              Presented at the 14th ICCCNT conference 2023 by IEEE at IIT Delhi
            </p>
            <div className="flex flex-wrap gap-1 mt-1">
              <a href="https://ieeexplore.ieee.org/document/10306481" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-xs bg-gray-800 hover:bg-gray-700 text-gray-300 px-1.5 py-0.5 rounded">
                <ExternalLinkIcon size={8} className="mr-1 text-[#5DC22D]" />
                Publication
              </a>
              <a href="https://drive.google.com/file/d/1JWcyN7JysQWhkED1CN3ktS-hS7UeeoL7/view" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-xs bg-gray-800 hover:bg-gray-700 text-gray-300 px-1.5 py-0.5 rounded">
                <ExternalLinkIcon size={8} className="mr-1 text-[#5DC22D]" />
                View PDF
              </a>
            </div>
          </li>
          <li>
            <div className="flex justify-between items-start">
              <h3 className="text-gray-200 font-semibold text-sm">
                Coding & Competitive Exams
              </h3>
              <span className="text-[#5DC22D] text-xs">05/2024</span>
            </div>
            <p className="text-xs text-gray-400 mt-1">
              Ranked Top 9.53% of all contestants on LeetCode with a contest
              rating of 1755
            </p>
            <div className="flex flex-wrap gap-1 mt-1">
              <a href="https://leetcode.com/u/s0oraj/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-xs bg-gray-800 hover:bg-gray-700 text-gray-300 px-1.5 py-0.5 rounded">
                <ExternalLinkIcon size={8} className="mr-1 text-[#5DC22D]" />
                Username: s0oraj
              </a>
            </div>
            <p className="text-xs text-gray-400 mt-1">
              Ranked AIR 688 out of 25,000+ candidates (Top 2.752%) in C-DAC
              Common Admission Test 2025.
            </p>
          </li>
        </ul>
      </div>
    </div>;
}