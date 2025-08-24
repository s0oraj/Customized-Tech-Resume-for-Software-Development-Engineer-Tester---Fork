import React from 'react';
import { MapPinIcon } from 'lucide-react';
import { SectionTitle } from '../ui/SectionTitle';
export function Experience() {
  const experiences = [{
    company: 'Wipro Technologies',
    position: 'Data Engineer L2 - Top 4 BFSI Client',
    period: '03/2025 - Present',
    location: 'Hyderabad',
    points: ['Building distributed systems for processing multi-terabyte datasets through Genesis DataMart, handling data flows from PP files through NGL/DRI processes to holding layers', 'Optimizing PySpark Directed Acyclic Graph (DAG) execution using topological sorting algorithms for SUBGL processes and backfeed mechanisms with STR/SRU adjustment components', 'Implementing SQL/Hive partitioning strategies for banking data across dual holding layers and BSS file processing', 'Processing multi-stream PP-SGL reconciliation via BTEQ scripts and STDDEF processes with Teradata', 'Developing pipelines with checkpoint mechanisms for downstream GLRS, IFRS9, Y9C, RUBY integration']
  }, {
    company: 'Roboslog Pvt Ltd',
    position: 'Software Developer Intern (Java)',
    period: '06/2022 - 08/2022',
    location: 'Delhi, NCR',
    points: ['Developed Agent-Driver Android apps with Firebase Cloud Messaging for live order notifications and MapBox location tracking for real-time delivery monitoring', 'Designed and implemented REST API integration using Retrofit for authentication and data management', 'Integrated Razorpay, PayPal, PayU with commission split: 60% driver, 18% sender-receiver, 4% admin', 'Built a wallet UI to display balance storage and track goods transactions, using XML and Jetpack Compose']
  }];
  return <div>
      <SectionTitle>Experience</SectionTitle>
      <div className="space-y-4 mt-3">
        {experiences.map((exp, index) => <div key={index} className="bg-gray-900 p-4 rounded">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-gray-200 font-semibold">{exp.company}</h3>
              <span className="text-[#5DC22D] text-sm">{exp.period}</span>
            </div>
            <div className="flex justify-between items-start mb-2">
              <p className="text-sm text-gray-300">{exp.position}</p>
              <div className="flex items-center text-xs text-gray-400">
                <MapPinIcon size={12} className="mr-1" />
                <span>{exp.location}</span>
              </div>
            </div>
            <ul className="space-y-1 mt-2">
              {exp.points.map((point, idx) => <li key={idx} className="flex items-start text-xs text-gray-400">
                  <span className="text-[#5DC22D] mr-2 mt-0.5">•</span>
                  <span>{point}</span>
                </li>)}
            </ul>
          </div>)}
      </div>
    </div>;
}