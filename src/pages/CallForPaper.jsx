import React from 'react';

const CallForPaper = () => {
  const boxStyle = 'border border-gray-300 rounded-xl shadow-md p-6 bg-white flex-1';

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-2">CALL FOR PAPERS</h1>

      {/* Underline effect */}
      <div className="relative w-full flex justify-center mb-6">
        <div className="w-32 h-px bg-gray-300"></div>
        <div className="absolute w-8 h-0.5 bg-red-600 top-[-2px]"></div>
      </div>

      <p className="text-center mb-10">
        The conference will cover a wide range of topics related to electrical, electronics, and computing technologies, including but not limited to:
      </p>

      {/* Row 1: Track 1 and Track 2 */}
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        {/* Track 1 */}
        <div className={boxStyle}>
          <h2 className="text-xl font-semibold text-center mb-4">Track 1: Internet of Things</h2>
          <ul className="list-disc list-inside space-y-1 text-sm sm:text-base">
            <li>Smart City Solution</li>
            <li>IoT-Based Smart Home</li>
            <li>IoT in Transportation</li>
            <li>IoT-based Smart Education System</li>
            <li>IoT-based Enterprise Management</li>
            <li>IoT-based Business Process Management</li>
            <li>IoT-based Robots</li>
            <li>IoT in Automobile</li>
            <li>IoT-based Intelligent Manufacturing</li>
            <li>IoT in Process Instrumentation & Automation</li>
            <li>IoT in Healthcare, IoT in Agriculture</li>
            <li>IoT in Green Computing</li>
            <li>IoT in UAV Application</li>
            <li>IoT Solution Reference Architectures and Instances</li>
            <li>IoT Standard Application Scenarios</li>
            <li>Next Generation Infrastructure for IoT</li>
            <li>Cloud Computing (IAAS, PAAS, SAAS) for IoT</li>
            <li>Big Data for IoT</li>
            <li>Open Platforms for IoT</li>
            <li>Wearable Devices for IoT</li>
            <li>Artificial Intelligence for IoT</li>
            <li>Security, Privacy</li>
            <li>Trust in IoT</li>
          </ul>
        </div>

        {/* Track 2 */}
        <div className={boxStyle}>
          <h2 className="text-xl font-semibold text-center mb-4">Track 2: Communication Systems</h2>
          <ul className="list-disc list-inside space-y-1 text-sm sm:text-base">
            <li>Space Applications/Satellite Communication</li>
            <li>Wireless Sensor Networks and Applications</li>
            <li>UWB Communication System</li>
            <li>5G and 6G Wireless Technology</li>
            <li>Communication Theory</li>
            <li>Communication Networks and Signal Processing</li>
            <li>Wireless and Optical Communications</li>
            <li>Quantum Communication and Computing</li>
            <li>Sensor Networks and Body Area Networks</li>
            <li>RADAR Communication</li>
            <li>Data Communication Network</li>
            <li>Cognitive Radio</li>
          </ul>
        </div>
      </div>

      {/* Row 2: Track 3 and Track 4 */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Track 3 */}
        <div className={boxStyle}>
          <h2 className="text-xl font-semibold text-center mb-4">Track 3: Automation Technology</h2>
          <ul className="list-disc list-inside space-y-1 text-sm sm:text-base">
            <li>Industry 4.0 & Industrial Internet of Things</li>
            <li>Industrial Robotics</li>
            <li>Robot Exoskeleton</li>
            <li>Mechatronics</li>
            <li>Additive Manufacturing</li>
            <li>CAD/CAM/CIM</li>
            <li>Digital Manufacturing & Cyber Physical Systems</li>
            <li>Flexible & Reconfigurable Manufacturing</li>
            <li>Production Scheduling & Manufacturing Management</li>
            <li>Automation in Material Handling & Logistics</li>
            <li>Optimization Algorithms</li>
            <li>Complete Automation</li>
            <li>Modeling & Simulation</li>
            <li>Supervisory Control, Finite Element Analysis</li>
            <li>Non-Traditional Manufacturing Processes</li>
            <li>Smart Materials</li>
            <li>Composites</li>
            <li>Materials Characterization</li>
            <li>Tribology</li>
            <li>Green and Sustainable Manufacturing</li>
            <li>Green Energy and related technologies</li>
          </ul>
        </div>

        {/* Track 4 */}
        <div className={boxStyle}>
          <h2 className="text-xl font-semibold text-center mb-4">Track 4: SPECIAL TRACK</h2>
          <ul className="list-disc list-inside space-y-1 text-sm sm:text-base">
            <li>Artificial intelligence</li>
            <li>Deep learning</li>
            <li>Machine learning and prompt engineering</li>
            <li>Cyber Physical system</li>
            <li>Software Engineering and Agile Development</li>
            <li>Multimedia and Web Services Agents</li>
            <li>Cloud Computing</li>
            <li>Big Data and quantum computing</li>
            <li>Ubiquitous Computing</li>
            <li>Global Software Engineering</li>
            <li>Knowledge-based Systems</li>
            <li>Pervasive Computing and Ambient Intelligence</li>
            <li>Bioinformatics</li>
            <li>Heuristic and AI Planning Strategies and Tools</li>
            <li>Computational Theories of Learning</li>
            <li>Recent Trends and Developments</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CallForPaper;
