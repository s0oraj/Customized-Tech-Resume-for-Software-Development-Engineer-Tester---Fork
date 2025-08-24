import React from 'react';
import { SectionTitle } from '../ui/SectionTitle';
import { ExternalLinkIcon, GithubIcon } from 'lucide-react';
export function Research() {
  return <div>
      <SectionTitle>Research - Machine Learning</SectionTitle>
      <div className="bg-gray-900 p-4 rounded mt-3">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="text-gray-200 font-semibold text-sm">
              C.V. Raman Global University
            </h3>
            <p className="text-xs text-gray-400">Undergraduate Researcher</p>
          </div>
          <span className="text-[#5DC22D] text-xs">12/2022 - 06/2023</span>
        </div>
        <div className="mb-4">
          <div className="flex justify-between items-start">
            <h3 className="text-gray-200 font-semibold text-sm">
              Early-Stage Glaucoma Detection
            </h3>
            <a href="https://github.com/s0oraj/Early_Stage_Glaucoma_Detection/tree/main" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-xs bg-gray-800 hover:bg-gray-700 text-gray-300 px-1.5 py-0.5 rounded">
              <GithubIcon size={8} className="mr-1 text-[#5DC22D]" />
              Repo
            </a>
          </div>
          <p className="text-xs text-[#5DC22D] mt-1 mb-1">
            Machine Learning, CNN, Transfer Learning, Python
          </p>
          <ul className="space-y-1">
            <li className="flex items-start text-xs text-gray-400">
              <span className="text-[#5DC22D] mr-2 mt-0.5">•</span>
              <span>
                Developing an Extreme Learning Machine Model with Convolutional
                Neural Networks (CNN) and Transfer Learning, achieving 96%
                accuracy in vision preservation for early-stage glaucoma
                detection.
              </span>
            </li>
            <li className="flex items-start text-xs text-gray-400">
              <span className="text-[#5DC22D] mr-2 mt-0.5">•</span>
              <span>
                Conducted research at C.V. Raman Global University as
                Undergraduate Researcher in Machine Learning department from
                12/2022 -- 06/2023.
              </span>
            </li>
          </ul>
        </div>
        <div>
          <div className="flex justify-between items-start">
            <h3 className="text-gray-200 font-semibold text-sm">
              Alzheimer's Disease Diagnostic System
            </h3>
            <div className="flex gap-1">
              <a href="https://ieeexplore.ieee.org/document/10306481" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-xs bg-gray-800 hover:bg-gray-700 text-gray-300 px-1.5 py-0.5 rounded">
                <ExternalLinkIcon size={8} className="mr-1 text-[#5DC22D]" />
                Paper
              </a>
              <a href="https://github.com/s0oraj/Alizhiemers_Detection_Transfer_Learning" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-xs bg-gray-800 hover:bg-gray-700 text-gray-300 px-1.5 py-0.5 rounded">
                <GithubIcon size={8} className="mr-1 text-[#5DC22D]" />
                Repo
              </a>
            </div>
          </div>
          <p className="text-xs text-[#5DC22D] mt-1 mb-1">
            Image Processing, DWT, SWT, CLAHE, Python
          </p>
          <ul className="space-y-1">
            <li className="flex items-start text-xs text-gray-400">
              <span className="text-[#5DC22D] mr-2 mt-0.5">•</span>
              <span>
                Employed Advanced image preprocessing techniques, including
                Discrete Wavelet Transform (DWT), Stationary Wavelet Transform
                (SWT), and Contrast Limited Adaptive Histogram Equalization
                (CLAHE) for hippocampus-based analysis.
              </span>
            </li>
            <li className="flex items-start text-xs text-gray-400">
              <span className="text-[#5DC22D] mr-2 mt-0.5">•</span>
              <span>
                Achieved 98% accuracy in Alzheimer's disease detection through
                optimized neural network architecture and preprocessing pipeline
                implementation.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>;
}